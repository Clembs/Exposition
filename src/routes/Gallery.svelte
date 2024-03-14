<script lang="ts">
	import { movable } from '@svelte-put/movable';

	let sectionEl: HTMLElement;
	let windowTitlebarEl: HTMLDivElement;

	let windowState: 'minimized' | 'maximized' | 'opened' | 'closed' = 'opened';

	function toggleMaximize() {
		windowState = windowState === 'maximized' ? 'opened' : 'maximized';
	}
</script>

<section id="gallery" bind:this={sectionEl}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		id="window"
		data-state={windowState}
		use:movable={{
			enabled: windowState !== 'maximized',
			handle: windowTitlebarEl,
			limit: {
				parent: sectionEl
			},
			ignore: 'button'
		}}
		on:dblclick={toggleMaximize}
	>
		<div id="window-titlebar" bind:this={windowTitlebarEl}>
			<span aria-label="Titre de la fenêtre" id="window-titlebar-title"> Galerie </span>
			<div id="window-titlebar-controls">
				<button id="minimize" aria-label="Minimiser la fenêtre"></button>
				<button
					id="toggle-maximize"
					aria-label="{windowState === 'maximized' ? 'Restaurer' : 'Maximiser'} la fenêtre"
					on:click={toggleMaximize}
				></button>
				<button id="close" aria-label="Fermer la fenêtre"></button>
			</div>
		</div>
		<article id="window-content">Saucisse purée</article>
	</div>

	<div id="taskbar">
		<button>Start</button>
		<button>Gallery</button>
	</div>
</section>

<style lang="scss">
	@mixin windowBorder {
		border-top: 2px solid white;
		border-left: 2px solid white;
		border-right: 2px solid #393939;
		border-bottom: 2px solid #393939;
		background-color: var(--color-window-background);
	}

	#gallery {
		--color-window-background: hsl(0, 0%, 75%);
		background-color: var(--color-win95-green);

		height: 80vh;
		position: relative;
		font-family: var(--font-retro);
		display: flex;
		flex-direction: column;

		#window {
			@include windowBorder;
			position: absolute;
			top: 25px;
			left: 25px;
			// transform: translate(-50%, -50%);
			padding: 0.125rem;
			resize: both;
			overflow: auto;
			min-width: 300px;
			min-height: 200px;

			&[data-state='opened'] {
				width: 80%;
			}
			&[data-state='closed'] {
				display: none;
			}
			&[data-state='minimized'] {
				display: none;
			}
			&[data-state='maximized'] {
				top: 0 !important;
				left: 0 !important;
				width: 100% !important;
				height: 100% !important;
				position: unset;
				resize: none;
			}

			#window-titlebar {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: hsl(240, 100%, 26%);
				color: white;
				font-weight: bold;
				padding: 0.25rem;

				#window-titlebar-title {
					user-select: none;
				}

				#window-titlebar-controls {
					display: flex;
					gap: 0.25rem;
					align-items: center;
					user-select: none;

					button {
						@include windowBorder;
						height: 1.5rem;
						width: 1.5rem;
						&:hover {
							background-color: hsl(0, 0%, 50%);
							cursor: default;
						}
					}
				}
			}
			#window-content {
				padding: 0.5rem;
			}
		}

		#taskbar {
			margin-top: auto;
			font-weight: bold;
			@include windowBorder;
			z-index: 2;
		}
	}
</style>
