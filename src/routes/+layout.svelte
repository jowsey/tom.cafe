<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { version, browser } from '$app/environment';
	import {
		AmbientLight,
		DirectionalLight,
		Mesh,
		MeshPhysicalMaterial,
		Object3D,
		PerspectiveCamera,
		ReinhardToneMapping,
		Scene,
		WebGLRenderer
	} from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	let { children } = $props();

	let currentTime = $state(new Date());
	let prefersReducedMotion = $state(false);

	let canvas: HTMLCanvasElement;
	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let mainModel: Object3D;
	let directionalLight: DirectionalLight;

	onMount(() => {
		let prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = prefersReducedMotionQuery.matches;

		const handleMotionPreferenceChange = (e: MediaQueryListEvent) => (prefersReducedMotion = e.matches);
		prefersReducedMotionQuery.addEventListener('change', handleMotionPreferenceChange);

		scene = new Scene();

		camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 100);
		camera.position.y = -5;
		camera.position.z = 10;

		renderer = new WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true
		});

		renderer.toneMapping = ReinhardToneMapping;
		renderer.toneMappingExposure = 1;

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 1);
		renderer.setPixelRatio(window.devicePixelRatio);

		const ambientLight = new AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		directionalLight = new DirectionalLight(0xffffff, 1);
		scene.add(directionalLight);

		const loader = new GLTFLoader();
		loader.load('/obj/skye2000-form-01.glb', (obj) => {
			let pbrMaterial = new MeshPhysicalMaterial({
				color: 0xeeaaff,
				metalness: 1,
				roughness: 0
			});

			mainModel = obj.scene;
			scene.add(mainModel);

			const scalar = 0.02;
			mainModel.scale.set(scalar, scalar, scalar);

			mainModel.position.set(-1, -3, 0);

			mainModel.traverse((child) => {
				let mesh = child as Mesh;
				if (mesh.isMesh) {
					mesh.material = pbrMaterial;
					mesh.material.transparent = true;
					mesh.material.opacity = 0;
				}
			});
		});

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		let lastTime = performance.now();
		const animate = () => {
			let deltaTime = performance.now() - lastTime;
			lastTime = performance.now();

			// current date or pre-selected cool-looking frame
			const time = !prefersReducedMotion ? Date.now() / 10_000 : 34;

			if (mainModel) {
				mainModel.rotation.y = time * 0.5;

				mainModel.traverse((child) => {
					let mesh = child as Mesh;
					if (mesh.isMesh && mesh.material instanceof MeshPhysicalMaterial) {
						if (mesh.material.opacity < 1) {
							mesh.material.opacity += deltaTime / 1000; // 1 second fade in
						}
					}
				});
			}

			directionalLight.position.x = Math.sin(time * 4);
			directionalLight.position.y = Math.cos(time * 4);

			renderer.render(scene, camera);
		};

		renderer.setAnimationLoop(animate);

		let timeInterval = setInterval(() => {
			currentTime = new Date();
		}, 1000);

		return () => {
			prefersReducedMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
			clearInterval(timeInterval);
		};
	});
</script>

<canvas class="fixed -z-10" bind:this={canvas}></canvas>

<div class="flex min-h-dvh w-full flex-col items-center justify-center gap-y-2 px-2 text-neutral-50">
	<div
		class="my-16 w-full max-w-xl rounded-tr-xl rounded-bl-xl border border-neutral-300/5 bg-transparent px-4 py-8 shadow-sm backdrop-blur-3xl transition-all sm:px-8"
	>
		<div class="flex items-center justify-between">
			<p class="font-bold sm:text-xl">Thomas Jowsey</p>
			<div class="flex gap-x-2 text-sm *:hover:underline sm:gap-x-4">
				<a target="_blank" href="https://github.com/jowsey">git</a>
				<a target="_blank" href="https://compiled.itch.io">itch</a>
				<a target="_blank" href="https://bsky.app/profile/tom.cafe">bsky</a>
			</div>
		</div>

		<p class="font-mono text-sm text-neutral-300">Programmer and artist <span class="font-emoji">🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>󠁧󠁿</p>

		<div class="my-8">
			{@render children()}
		</div>

		<div class="my-4 flex items-center justify-between font-mono text-sm text-neutral-500">
			<p>
				{browser
					? currentTime.toLocaleTimeString('en-GB', {
							timeZone: 'Europe/London',
							hour12: false,
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit'
						})
					: '??:??:??'}
			</p>
			<p>
				{version} 「{browser
					? currentTime.toLocaleDateString('en-GB', { timeZone: 'Europe/London', year: 'numeric' })
					: '????'}」
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-1.5 **:h-7">
			<img src="https://cyber.dabamos.de/88x31/amd_powered.gif" alt="powered by amd" />
			<img src="https://cyber.dabamos.de/88x31/bestviewed16bit.gif" alt="best viewed 1024x768 16bit color" />
			<img src="https://cyber.dabamos.de/88x31/chrmevil.gif" alt="google chrome is evil" />
			<a class="shadow-pink-300 transition-shadow hover:shadow" target="_blank" href="https://kahoneki.com/">
				<img src="/kaho88x31.png" alt="kahoneki" />
			</a>
		</div>

		{#if prefersReducedMotion}
			<p class="mt-4 text-center text-xs text-neutral-500">
				Background animation has been disabled based on your system-wide motion preferences.
			</p>
		{/if}
	</div>
</div>
