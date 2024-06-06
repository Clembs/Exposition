<script lang="ts">
	import AboutWindow from '$lib/components/Gallery/AboutWindow.svelte';
	import GalleryWindow from '$lib/components/Gallery/GalleryWindow.svelte';
	import Taskbar from '$lib/components/Gallery/Taskbar.svelte';
	import type { AppId } from '$lib/components/Gallery/apps';

	let sectionEl: HTMLElement;

	let galleryWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';
	let aboutWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';

	let focusedWindow: AppId | null = 'gallery';

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

	export let name: string;
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

	<GalleryWindow {sectionEl} bind:windowState={galleryWindowState} bind:focusedWindow />

	<AboutWindow {sectionEl} bind:windowState={aboutWindowState} bind:focusedWindow bind:name />

	<Taskbar
		bind:aboutWindowState
		bind:galleryWindowState
		bind:focusedWindow
		on:windowfocus={(e) => focusWindow(e.detail)}
	/>
</section>

<style lang="scss">
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
	}
</style>
