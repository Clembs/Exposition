<script lang="ts">
	export let x = 0;
	export let y = 0;
	export let center = false;
</script>

<div class="window" style="--x: {x}px; --y: {y}px; --center: {center ? 'center' : 'unset'}">
	<div class="window-content">
		<slot />
	</div>

	<div class="window-controls">
		<div class="window-handle"></div>
	</div>
</div>

<style lang="scss">
	.window {
		cursor: url('visionos-pointer.png'), auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		max-width: 800px;
		margin: 1rem;
		top: var(--y);
		left: var(--x);

		.window-content {
			background-color: hsl(0 0% 50% / 30%);
			backdrop-filter: blur(100px);
			border-top: 1.4px solid hsl(0 0% 100% / 40%);
			border-left: 1.4px solid hsl(0 0% 100% / 0%);
			border-right: 1.4px solid hsl(0 0% 100% / 0%);
			border-bottom: 1.4px solid hsl(0 0% 100% / 10%);
			box-shadow:
				0 40px 80px 0 rgba(0, 0, 0, 0.3),
				1px 7px 10px 0 rgba(0, 0, 0, 0.09);
			padding: 2.25rem;
			border-radius: 2rem;
		}

		.window-controls {
			height: 2.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 0.5rem;

			// .window-close {
			// 	height: 14px;
			// 	width: 14px;
			// 	border-radius: 99px;
			// 	background-color: hsl(0 0% 100% / 30%);
			// 	margin: 0.5rem;
			// }

			.window-handle {
				transition:
					background-color 100ms,
					height 100ms;
				background-color: hsl(0 0% 100% / 30%);
				height: 10px;
				width: 136px;
				border-radius: 99px;
				margin: 0.5rem;
				cursor: grab;

				&:hover {
					background-color: hsl(0, 0%, 100%);
				}

				&:active {
					cursor: grabbing;
				}
			}
		}
	}
</style>
