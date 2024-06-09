<script lang="ts">
	import type { Image } from '$lib/images';
	import { dragscroll } from '@svelte-put/dragscroll';
	import ImageModal from './ImageModal.svelte';

	export let images: Image[];
</script>

<ul class="image-gallery" use:dragscroll>
	{#each images as image}
		<li>
			<ImageModal {image} />
		</li>
	{/each}
</ul>

<style lang="scss">
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
