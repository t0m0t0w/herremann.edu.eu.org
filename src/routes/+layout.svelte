<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	let lenis: Lenis;

	onMount(() => {
		// Initialize Lenis
		lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		// Animation frame loop
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Cleanup
		return () => {
			lenis.destroy();
		};
	});
</script>

<svelte:head>
	<title>hermann roos</title>
</svelte:head>

<slot />
