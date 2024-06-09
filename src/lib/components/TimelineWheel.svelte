<script lang="ts">
	import { currentSection, currentYear } from '$lib/sections';
	import { tweened } from 'svelte/motion';

	const tweenedYear = tweened($currentYear, {
		interpolate(a, b) {
			// only interpolate integers
			return (t) => Math.round(a + (b - a) * t);
		},
		duration: 250
	});

	let wheel: HTMLElement;
	let section = $currentSection;

	$: {
		console.log($currentYear);
		tweenedYear.set($currentYear);
	}
	$: {
		$currentSection;

		if (wheel && section !== $currentSection) {
			// animate rotation and change section mid-animation
			wheel.animate([{ rotate: '0deg' }, { rotate: '180deg' }], {
				duration: 500,
				easing: 'ease-in'
			}).onfinish = () => {
				section = $currentSection;
			};

			wheel.animate([{ rotate: '180deg' }, { rotate: '360deg' }], {
				duration: 500,
				easing: 'ease-out',
				delay: 500
			});
			// .onfinish = () => {
			// 	wheel.style.rotate = '0deg';
			// };
		}
	}
</script>

<div id="timeline-wheel" class:visible={$currentSection} bind:this={wheel}>
	<div id="timeline-elements">
		<div id="timeline-year">{$tweenedYear}</div>
		<div id="timeline-period">
			<div class="period-title">
				{section?.title}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#timeline-wheel {
		--wheel-size: 250px;

		position: fixed;
		bottom: calc(0px - var(--wheel-size));
		// rotate: 180deg;
		left: 50%;
		transform: translateX(-50%) translateY(50%);
		font-family: var(--font-modern);
		background-color: white;
		background-image: url('./clock.svg');
		background-size: cover;

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

			#timeline-year {
				font-size: 2rem;
				font-weight: bold;
			}

			#timeline-period {
				position: relative;
				width: 100%;

				.period-title {
					width: 100%;
					text-align: center;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
</style>
