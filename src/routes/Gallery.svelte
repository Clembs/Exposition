<script lang="ts">
	import { movable } from '@svelte-put/movable';

	const images = Object.values(
		import.meta.glob('/static/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
			eager: true,
			query: '?url',
			import: 'default'
		})
	).map((image) => String(image).replace('/static', ''));

	let sectionEl: HTMLElement;
	let windowTitlebarEl: HTMLDivElement;

	let currentImageIndex = 0;

	let windowState: 'minimized' | 'maximized' | 'opened' | 'closed' = 'opened';

	function toggleMaximize() {
		windowState = windowState === 'maximized' ? 'opened' : 'maximized';
	}

	function toggleMinimize() {
		windowState = windowState === 'minimized' ? 'opened' : 'minimized';
	}

	function close() {
		windowState = 'closed';
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
	>
		<div id="window-titlebar" bind:this={windowTitlebarEl} on:dblclick={toggleMaximize}>
			<span aria-label="Titre de la fenêtre" id="window-titlebar-title"> Galerie </span>
			<div id="window-titlebar-controls">
				<button id="minimize" aria-label="Minimiser la fenêtre" on:click={toggleMinimize}></button>
				<button
					id="toggle-maximize"
					aria-label="{windowState === 'maximized' ? 'Restaurer' : 'Maximiser'} la fenêtre"
					on:click={toggleMaximize}
				></button>
				<button id="close" aria-label="Fermer la fenêtre"></button>
			</div>
		</div>
		<article id="window-content">
			<img src={images[currentImageIndex]} alt="" />

			<div id="buttons">
				<button
					on:click={() =>
						(currentImageIndex = (currentImageIndex - 1 + images.length) % images.length)}
				>
					Précédent
				</button>
				<button on:click={() => (currentImageIndex = (currentImageIndex + 1) % images.length)}>
					Suivant
				</button>
			</div>
		</article>
	</div>

	<div id="taskbar">
		<button id="start">Start</button>
		{#if windowState !== 'closed'}
			<button data-active={windowState === 'opened'} on:click={toggleMinimize}>Gallery</button>
		{/if}
	</div>
</section>

<style lang="scss">
	@mixin windowBorder {
		border-top: 2px solid white;
		border-left: 2px solid white;
		border-right: 2px solid #393939;
		border-bottom: 2px solid #393939;
		background-color: hsl(0, 0%, 75%);
	}

	#gallery {
		background-color: var(--color-win95-green);

		height: 80vh;
		position: relative;
		font-family: var(--font-retro);
		display: flex;
		flex-direction: column;

		button {
			@include windowBorder;
			padding: 0.125rem 0.75rem;

			&:hover {
				background-color: hsl(0, 0%, 65%);
				cursor: default;
			}

			&:active,
			&[data-active='true'] {
				border-bottom: 2px solid white;
				border-right: 2px solid white;
				border-top: 2px solid #393939;
				border-left: 2px solid #393939;
				background-color: hsl(0, 0%, 75%);
			}
		}

		#window {
			@include windowBorder;
			position: absolute;
			top: 25px;
			left: 25px;
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
				position: sticky;
				inset: 0;

				#window-titlebar-title {
					user-select: none;
				}

				#window-titlebar-controls {
					display: flex;
					gap: 0.25rem;
					align-items: center;
					user-select: none;

					button {
						height: 1.5rem;
						width: 1.5rem;
						padding: 0;
					}
				}
			}
			#window-content {
				padding: 0.5rem;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;

				img {
					@include windowBorder;
					width: auto;
					max-height: 50vh;
					height: 100%;
				}
			}
		}

		#taskbar {
			@include windowBorder;
			margin-top: auto;
			z-index: 2;
			padding: 0.125rem;

			button {
				&#start {
					font-weight: bold;
				}
			}
		}
	}
</style>
