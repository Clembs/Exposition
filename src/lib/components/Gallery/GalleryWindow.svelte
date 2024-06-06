<script lang="ts">
	import Window95 from './Window95.svelte';

	export let sectionEl: HTMLElement;
	export let name = 'Vous';
	export let windowState: 'minimized' | 'maximized' | 'opened' | 'closed';
	export let focusedWindow: 'gallery' | 'about' | null;

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
</script>

<Window95
	bind:windowState
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

<style lang="scss">
	@import '../../../styles/utils.scss';

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
</style>
