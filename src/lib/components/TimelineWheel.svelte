<script lang="ts">
	import { currentSection } from '$lib/sections';
	import { fade } from 'svelte/transition';

	let rotationDeg = 0;
	let menuOpen = false;

	function onScroll() {
		rotationDeg = window.scrollY % 360;
	}
</script>

<svelte:window on:scroll={onScroll} />

<button
	on:click={() => (menuOpen = true)}
	id="timeline-wheel"
	class:visible={$currentSection}
	style="--rotation: {rotationDeg}deg;"
>
	<div id="timeline-elements">
		<!-- <div id="timeline-year">{$tweenedYear}</div> -->
		<div id="timeline-period">
			{#key $currentSection}
				<div out:fade={{ duration: 250 }} in:fade={{ delay: 260 }} class="period-title">
					{$currentSection}
				</div>
			{/key}
		</div>
	</div>
</button>

<style lang="scss">
	#timeline-wheel {
		--wheel-size: 250px;

		position: fixed;
		bottom: calc(0px - var(--wheel-size));
		left: 50%;
		transform: translateX(-50%) translateY(50%);
		font-family: var(--font-modern);

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url('./clock.svg');
			background-size: cover;
			rotate: var(--rotation);
			border-radius: 50%;
		}

		color: var(--color-shell-black);
		transition: bottom 1000ms ease;
		// rotate 1000ms ease;
		transform-origin: left bottom;

		&.visible {
			bottom: 0;
			// rotate: 0deg;
			transition: bottom 200ms ease;
			// rotate 200ms ease;
		}

		border: 1px solid var(--color-shell-black);
		border-radius: 50%;
		height: var(--wheel-size);
		width: var(--wheel-size);
		display: flex;
		justify-content: center;
		// align-items: center;

		#timeline-elements {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
			gap: 1rem;
			height: 50%;
			width: 100%;

			#timeline-period {
				position: relative;
				width: 90%;
				top: 0.75rem;

				.period-title {
					width: 100%;
					text-align: center;
					position: absolute;
					font-size: 1.25rem;
					font-weight: bold;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
	}
</style>
