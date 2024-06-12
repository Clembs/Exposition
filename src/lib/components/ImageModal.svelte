<script lang="ts">
	import type { Image } from '$lib/images';

	export let image: Image;

	let dialog: HTMLDialogElement;
</script>

<button class="image-with-modal" on:click={() => dialog.showModal()}>
	<figure>
		<img src={image.src} alt={image.alt} />
		<figcaption>
			{image.title}
		</figcaption>
	</figure>
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} class="image-modal" on:click|self={() => dialog.close()}>
	<div class="image-modal-contents">
		<a
			href={image.src}
			aria-label="Ouvrir l'image en grand"
			target="_blank"
			rel="noopener noreferrer"
			class="open-image"
		>
			<img loading="lazy" src={image.src} alt={image.alt} />
		</a>
		<div class="image-info">
			<div class="image-info-text">
				<div class="image-title">{image.title}</div>
				<p class="image-description">{image.description}</p>
			</div>

			<div class="image-info-sources">
				<h3>En savoir plus</h3>

				<ul>
					{#each image.sources as source}
						<li>
							<a href={source.url} target="_blank" rel="noopener noreferrer">
								<img
									loading="lazy"
									width="32"
									height="32"
									src={source.iconUrl}
									alt="Icône du site {source.title}"
								/>
								<div class="source-text">
									<div class="source-title">
										{source.title}
									</div>
									<div class="source-url">
										{source.url}
									</div>
								</div>
							</a>
						</li>
					{/each}
				</ul>

				{#if image.attribution}
					<div class="image-attribution">
						Attribution:
						{#if image.attribution.url}
							<a
								class="link"
								href={image.attribution.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{image.attribution.author}
							</a>
						{:else}
							{image.attribution.author}
						{/if}
						{#if image.attribution.license}
							(License {image.attribution.license})
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</dialog>

<style lang="scss">
	.image-with-modal {
		cursor: zoom-in;
		border: 0;
		padding: 0;
		width: 100%;

		figure {
			margin: 1rem;
		}
	}

	.image-modal {
		border: 0;
		padding: 0;
		border-radius: 50px;
		font: initial;
		font-family: var(--font-modern);
		box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.3);
		cursor: zoom-out;

		.image-modal-contents {
			max-width: 1000px;
			display: flex;
			cursor: initial;

			@media (max-width: 900px) {
				flex-direction: column;
			}
		}

		a.open-image {
			cursor: zoom-in;
			display: contents;
		}
		img {
			max-width: 50%;
			object-fit: cover;

			@media (max-width: 900px) {
				max-width: 100%;
				position: sticky;
				top: 0;
				left: 0;
				z-index: 1;
			}
		}

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(5px);
		}

		.image-info {
			padding: 2rem 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			justify-content: space-between;

			.image-title {
				font-size: 2.5rem;
				font-weight: bold;
				color: var(--color-shell-black);
			}

			.image-description {
				line-height: 1.5;
				text-align: justify;
			}

			.image-info-sources {
				ul {
					display: flex;
					flex-wrap: wrap;
					gap: 1rem;
					margin-top: 0.5rem;

					li a {
						display: inline-flex;
						align-items: center;
						gap: 0.75rem;
						padding: 0.75rem;
						padding-right: 1rem;
						background-color: hsl(0, 0%, 90%);
						border-radius: 0.75rem;

						img {
							border-radius: 0.25rem;
						}

						.source-url {
							font-size: 0.75rem;
							margin-top: 0.315rem;
							color: var(--color-space-gray);
							max-width: 45ch;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}

			.image-attribution {
				margin-top: 1rem;
			}
		}
	}
</style>
