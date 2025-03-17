<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
	import { scale } from 'svelte/transition';

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

			directionalLight.position.x = Math.sin(time) * 5;
			directionalLight.position.y = Math.cos(time) * 5;

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

<div class="flex h-screen w-screen items-center justify-center">
	<div
		class="mx-2 w-full max-w-xl rounded-tr-xl rounded-bl-xl border border-neutral-300 bg-transparent px-8 py-4 text-neutral-50 shadow-sm backdrop-blur-xl transition-all sm:mx-4"
	>
		<div class="flex items-center justify-between">
			<p class="text-xl font-bold transition-all">Thomas Jowsey</p>
			<div class="flex gap-x-4 text-sm transition-all *:hover:underline">
				<a target="_blank" href="https://compiled.itch.io">itch</a>
				<a target="_blank" href="https://bsky.app/profile/tom.cafe">bsky</a>
				<a target="_blank" href="https://linkedin.com/in/jowsey">lnkdn</a>
			</div>
		</div>

		<p class="mb-2 text-sm text-neutral-300">hey! i'm a programmer and artist 📍 Dundee, UK.</p>

		<div
			class="mb-4 flex items-center justify-evenly divide-neutral-500 rounded-md border border-neutral-500 px-2 py-1"
		>
			<a href="/portfolio">Portfolio</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</div>

		{@render children()}
	</div>
</div>
