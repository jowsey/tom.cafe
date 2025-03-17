<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

	let { children } = $props();

	let canvas: HTMLCanvasElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let mainModel: THREE.Object3D;
	let directionalLight: THREE.DirectionalLight;
	let frameId: number;

	onMount(() => {
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 100);
		camera.position.y = -5;
		camera.position.z = 10;

		renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			precision: 'highp'
		});

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 1);
		renderer.setPixelRatio(window.devicePixelRatio);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		scene.add(directionalLight);

		const loader = new OBJLoader();
		loader.load('/obj/skye2000-form-01.obj', (obj) => {
			let pbrMaterial = new THREE.MeshPhysicalMaterial({
				color: 0xeeaaff,
				metalness: 0.9,
				roughness: 0
			});

			mainModel = obj;
			scene.add(mainModel);

			const scalar = 0.04;
			mainModel.scale.set(scalar, scalar, scalar);

			mainModel.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					// todo this gives a warning bc dumb
					child.material = pbrMaterial;
				}
			});
		});

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		const animate = () => {
			frameId = requestAnimationFrame(animate);

			const time = Date.now() * 0.0001;
			if (mainModel) {
				mainModel.rotation.y = time * 0.2;
			}

			directionalLight.position.x = Math.sin(time * 4);
			directionalLight.position.y = Math.cos(time * 4);

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
		};
	});
</script>

<canvas class="fixed -z-10" bind:this={canvas}></canvas>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-y-2 px-2 text-neutral-50">
	<div
		class="w-full max-w-xl rounded-tr-lg rounded-bl-lg border border-neutral-300 bg-transparent px-4 py-4 shadow-sm backdrop-blur-xl transition-all sm:px-8"
	>
		<div class="flex items-center justify-between">
			<p class="font-bold transition-all sm:text-xl">Thomas Jowsey</p>
			<div class="flex gap-x-2 text-sm *:hover:underline sm:gap-x-4">
				<a target="_blank" href="https://github.com/jowsey">git</a>
				<a target="_blank" href="https://compiled.itch.io">itch</a>
				<a target="_blank" href="https://bsky.app/profile/tom.cafe">bsky</a>
				<a target="_blank" href="https://linkedin.com/in/jowsey">lnkdn</a>
			</div>
		</div>

		<p class="font-mono text-sm text-neutral-300">Programmer and artist 🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>

		{@render children()}

		<div class="mt-4 flex flex-wrap justify-center gap-1.5 *:h-7">
			<img src="https://cyber.dabamos.de/88x31/built_notepad.gif" alt="built with microsoft notepad" />
			<img src="https://cyber.dabamos.de/88x31/css3.gif" alt="made with cascading style sheets" />
			<img src="http://88x31.nl/gifs/amd_powered.gif" alt="powered by amd" />
			<img src="https://cyber.dabamos.de/88x31/bestviewed16bit.gif" alt="best viewed 1024x768 16bit color" />
			<img src="https://cyber.dabamos.de/88x31/button25.gif" alt="pride flag" />
			<img src="https://cyber.dabamos.de/88x31/archlinux.gif" alt="arch linux" />
			<img src="https://cyber.dabamos.de/88x31/anythingbut.gif" alt="anything but chrome" />
			<img src="https://cyber.dabamos.de/88x31/chrmevil.gif" alt="google chrome is evil" />
			<img src="https://cyber.dabamos.de/88x31/cc-by-nc-sa.gif" alt="cc by nc sa" />
		</div>
	</div>
</div>
