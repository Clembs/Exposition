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

	let sectionEl: HTMLElement;
	let galleryWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';
</script>

<section id="gallery" bind:this={sectionEl}>
	<Window95 bind:windowState={galleryWindowState} {sectionEl} title="Galerie">
		<div id="gallery-content">
			<img src={images[currentImageIndex]} alt="" />

			<div id="buttons">
				<button
					class="btn-95"
					on:click={() =>
						(currentImageIndex = (currentImageIndex - 1 + images.length) % images.length)}
				>
					Précédent
				</button>
				<button
					class="btn-95"
					on:click={() => (currentImageIndex = (currentImageIndex + 1) % images.length)}
				>
					Suivant
				</button>
			</div>
		</div>
	</Window95>

	<div id="taskbar">
		<button class="btn-95" id="start">Start</button>
		{#if galleryWindowState !== 'closed'}
			<button
				class="btn-95"
				data-active={galleryWindowState === 'opened'}
				on:click={() =>
					(galleryWindowState = galleryWindowState === 'minimized' ? 'opened' : 'minimized')}
			>
				Galerie
			</button>
		{/if}
	</div>
</section>

<style lang="scss">
	@import '../styles/utils.scss';

	#gallery {
		background-color: var(--color-win95-green);

		height: 80vh;
		position: relative;
		font-family: var(--font-retro);
		display: flex;
		flex-direction: column;

		#gallery-content {
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
