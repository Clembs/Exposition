<script lang="ts">
	import type { Image } from '$lib/images';
	import ImageModal from './ImageModal.svelte';

	export let images: Image[];

	let gallery: HTMLUListElement;

	function previous() {
		gallery.scrollBy({
			left: -100,
			behavior: 'smooth'
		});

		// if we're at the beginning, go back to the end
		if (gallery.scrollLeft <= 0) {
			gallery.scrollTo({
				left: gallery.scrollWidth,
				behavior: 'smooth'
			});
		}
	}

	function next() {
		gallery.scrollBy({
			left: 100,
			behavior: 'smooth'
		});

		// if we're at the end, go back to the beginning
		if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
			gallery.scrollTo({
				left: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="gallery-wrapper">
	<ul class="image-gallery" bind:this={gallery}>
		{#each images as image}
			<li>
				<ImageModal {image} />
			</li>
		{/each}
	</ul>
	{#if images.length > 1}
		<nav class="buttons">
			<button on:click={previous} id="previous" aria-label="Image précédente">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
				>
			</button>
			<button on:click={next} id="next" aria-label="Image suivante">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
			</button>
		</nav>
	{/if}
</div>

<style lang="scss">
	.gallery-wrapper {
		position: relative;

		.buttons {
			button {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);

				&:first-child {
					left: -0.5rem;
				}

				&:last-child {
					right: -0.5rem;
				}

				background-color: rgba(255, 255, 255, 0.75);
				color: black;
				cursor: pointer;
				padding: 0.5rem;
				border-radius: 99rem;
				height: 2.5rem;
				width: 2.5rem;
				display: grid;

				svg {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}
	}

	.image-gallery {
		--section-width: min(100%, 800px);

		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		padding: 0;
		list-style: none;

		align-items: center;

		gap: 1rem;

		width: 100vw;
		margin: 2rem auto;
		margin-left: 50%;
		transform: translateX(-50%);

		scrollbar-width: none;
		-webkit-overflow-scrolling: touch;

		&::-webkit-scrollbar {
			display: none;
		}

		li {
			scroll-snap-align: center;
			box-sizing: content-box;
			width: var(--section-width);
			flex: 0 0 var(--section-width);

			&:first-child {
				margin-left: calc(50vw - (var(--section-width) / 2));
			}

			&:last-child {
				margin-right: calc(50vw - (var(--section-width) / 2));
			}
		}
	}
</style>
