<script lang="ts">
	import Window95 from '$lib/components/Window95.svelte';

	const images = Object.values(
		import.meta.glob('$lib/gallery/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
			eager: true,
			query: '?url',
			import: 'default'
		})
	).map((image) => String(image));

	let currentImageIndex = 0;
	$: previousImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
	$: nextImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

	let sectionEl: HTMLElement;
	let galleryWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';
	let aboutWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';

	let focusedWindow: 'gallery' | 'about' | null = 'gallery';

	export let name = 'Vous';

	function openWindow(window: typeof focusedWindow) {
		if (window === 'gallery') {
			galleryWindowState = 'opened';
		}
		if (window === 'about') {
			aboutWindowState = 'opened';
		}
		focusedWindow = window;
	}

	function focusWindow(window: typeof focusedWindow) {
		if (focusedWindow !== window) {
			focusedWindow = window;
		} else {
			if (window === 'about') {
				aboutWindowState = aboutWindowState === 'minimized' ? 'opened' : 'minimized';
			}
			if (window === 'gallery') {
				galleryWindowState = galleryWindowState === 'minimized' ? 'opened' : 'minimized';
			}
		}
	}
</script>

<section id="gallery" bind:this={sectionEl}>
	<ul id="desktop">
		<li class="shortcut">
			<button on:dblclick={() => openWindow('gallery')}>
				<div class="shortcut-icon">
					<img
						loading="eager"
						width="42"
						height="42"
						src="/windows-95-icons/paint_big.png"
						alt="Galerie"
					/>
				</div>
				<div class="shortcut-text">Galerie</div>
			</button>
		</li>
		<li class="shortcut">
			<button on:dblclick={() => openWindow('about')}>
				<div class="shortcut-icon">
					<img
						loading="eager"
						width="42"
						height="42"
						src="/windows-95-icons/globe.png"
						alt="À propos"
					/>
				</div>
				<div class="shortcut-text">À propos</div>
			</button>
		</li>
	</ul>

	<Window95
		bind:windowState={galleryWindowState}
		{sectionEl}
		title="Galerie"
		iconPath="/windows-95-icons/paint.png"
		height="600px"
		x={50}
		y={40}
		resizable
		focused={focusedWindow === 'gallery'}
		on:focus={() => (focusedWindow = 'gallery')}
	>
		<div id="gallery-content">
			<div>
				<img fetchpriority="high" loading="eager" src={images[currentImageIndex]} alt="" />
			</div>

			<div id="gallery-bottom">
				<div id="gallery-progress">
					{#each images as _, index}
						<span class="gallery-progress-block" class:filled={index <= currentImageIndex}></span>
					{/each}
				</div>

				<div id="buttons">
					<a
						data-sveltekit-preload-data="hover"
						href={images[previousImageIndex]}
						class="btn-95"
						on:click|preventDefault={() => (currentImageIndex = previousImageIndex)}
					>
						Précédent
					</a>
					<a
						data-sveltekit-preload-data="hover"
						href={images[nextImageIndex]}
						class="btn-95"
						on:click|preventDefault={() => (currentImageIndex = nextImageIndex)}
					>
						Suivant
					</a>
				</div>
			</div>
		</div>
	</Window95>

	<Window95
		title="À propos"
		iconPath="/windows-95-icons/about-windows.png"
		bind:sectionEl
		x={200}
		y={80}
		bind:windowState={aboutWindowState}
		focused={focusedWindow === 'about'}
		on:focus={() => (focusedWindow = 'about')}
	>
		<div id="about-content">
			<div id="about-content-split">
				<div id="about-image">
					<img
						loading="eager"
						src="/windows-95-icons/globe.png"
						alt="À propos"
						width="48"
						height="48"
						draggable="false"
					/>
				</div>

				<div id="about-text">
					De la mécanique au numérique<br />
					Copyright © 2024-2024 Team 20.<br />
					<br />
					Produit par :
					<ul>
						<li>Ellisa Ee</li>
						<li>Gérald Leban</li>
						<li>Kylian Pawilowski</li>
						<li>Clément Voisin</li>
					</ul>
					<br />
					Ce produit est licencié pour :<br />
					{name}

					<hr />

					Windows, Microsoft et le logo Windows sont des marques déposées de Microsoft Corporation.
				</div>
			</div>

			<div id="bottom-actions">
				<button class="btn-95" on:click={() => (aboutWindowState = 'closed')}>OK</button>
			</div>
		</div>
	</Window95>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="taskbar" on:click={() => (focusedWindow = null)} on:focus={() => (focusedWindow = null)}>
		<button class="btn-95 taskbar-item" id="start">
			<img
				loading="eager"
				width="24"
				height="24"
				src="/windows-95-icons/windows-logo.png"
				alt="Icône pour Démarrer"
			/>
			<span class="taskbar-item-text"> Démarrer </span>
		</button>
		{#if galleryWindowState !== 'closed'}
			<button
				class="btn-95 taskbar-item"
				data-active={galleryWindowState === 'opened' && focusedWindow === 'gallery'}
				on:click|stopPropagation={() => focusWindow('gallery')}
			>
				<img
					loading="eager"
					width="24"
					height="24"
					src="/windows-95-icons/paint.png"
					alt="Icône pour Galerie"
				/>
				<span class="taskbar-item-text"> Galerie </span>
			</button>
		{/if}
		{#if aboutWindowState !== 'closed'}
			<button
				class="btn-95 taskbar-item"
				data-active={aboutWindowState === 'opened' && focusedWindow === 'about'}
				on:click|stopPropagation={() => focusWindow('about')}
			>
				<img
					loading="eager"
					width="24"
					height="24"
					src="/windows-95-icons/about-windows.png"
					alt="Icône pour À propos"
				/>
				<span class="taskbar-item-text"> À propos </span>
			</button>
		{/if}
	</div>
</section>

<style lang="scss">
	@import '../styles/utils.scss';

	#gallery {
		background-color: var(--color-win95-green);
		image-rendering: pixelated;

		height: 800px;
		position: relative;
		font-family: var(--font-retro);
		display: flex;
		flex-direction: column;

		#desktop {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			gap: 1rem;
			width: fit-content;

			.shortcut button {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.25rem;
				color: white;
				width: 100%;

				.shortcut-icon {
					position: relative;
				}

				.shortcut-icon::after {
					content: '';
					width: 42px;
					height: 42px;
					display: block;
					inset: 0;
					position: absolute;
					background-image: url('/windows-95-icons/shortcut.png');
					background-size: 100% 100%;
				}

				.shortcut-text {
					padding: 0 0.125rem;
				}

				&:focus {
					.shortcut-icon {
						filter: hue-rotate(180deg) saturate(200%);
					}

					.shortcut-text {
						background: #0000a8;
						outline: 1px dotted white;
					}
				}
			}
		}

		#gallery-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			gap: 0.5rem;
			width: fit-content;
			height: 100%;

			#gallery-bottom {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5rem;
				width: 100%;

				#gallery-progress {
					display: flex;
					gap: 0.25rem;
					width: 100%;

					.gallery-progress-block {
						width: 100%;
						height: 0.75rem;
						border: 1px solid black;
						background-color: var(--color-rock-gray);
						&.filled {
							background-color: #000085;
						}
					}
				}

				#buttons {
					display: flex;
					gap: 0.5rem;
					width: 100%;

					a {
						display: flex;
						justify-content: center;
						width: 100%;
					}
				}
			}

			img {
				@include windowBorder;
				width: auto;
				max-height: 50vh;
				height: 100%;
			}
		}

		#about-content {
			#about-content-split {
				display: flex;
				gap: 1rem;
			}
			#about-image {
				flex-shrink: 0;
			}

			ul {
				list-style: square;
				padding: 0 1rem;
			}

			#bottom-actions {
				display: flex;
				justify-content: flex-end;
				margin-top: 1rem;
			}
		}

		#taskbar {
			@include windowBorder;
			margin-top: auto;
			z-index: 2;
			padding: 0.375rem;

			.taskbar-item {
				text-align: left;
				padding: 0.25rem 0.5rem;
				display: inline-flex;
				align-items: center;
				gap: 0.25rem;

				&-text {
					margin-top: 2px;
					font-size: 1.1rem;
				}

				&#start,
				&[data-active='true'] {
					font-weight: bold;
				}

				&[data-active='true'] {
					background-image: linear-gradient(
							45deg,
							#fff 25%,
							transparent 25%,
							transparent 75%,
							#fff 75%,
							#fff
						),
						linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
					background-size: 6px 6px;
					background-position:
						0 0,
						3px 3px;
					background-repeat: repeat;
				}

				&:not(#start) {
					width: 200px;
				}
			}
		}
	}
</style>
