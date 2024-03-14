<script>
	import Button from '$lib/components/Button.svelte';
</script>

<header>
	<div id="hero-text">
		<span class="chip">Exposition</span>
		<h1>De la mécanique<br />au numérique</h1>
	</div>

	<article>
		<div id="dates-location">
			<p class="small-text">
				Du <time datetime="2024-06-17">17 juin</time>
				au <time datetime="2024-06-21">21 juin</time>
				2024
			</p>

			<div id="countdown">
				<span>90j</span>
				<span>12h</span>
				<span>34m</span>
				<span>56s</span>
			</div>

			<a href="#ou-aller" class="small-text"> IUT Rangueil, CRDoc </a>
		</div>

		<div id="buttons">
			<Button href="#ou-aller">Où nous trouver</Button>
			<Button variant="outlined" href="#billeterie">Billeterie</Button>
		</div>
	</article>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
		padding: 0 1rem;
		text-align: center;
		gap: 2rem;

		#hero-text {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			align-items: center;

			h1 {
				font-size: clamp(2rem, 5vw, 3rem);
			}

			.chip {
				border: 1px solid var(--color-shell-black);
				font-weight: bold;
				padding: 0.25rem 0.75rem;
				border-radius: 99px;
				font-size: 0.875rem;
				width: fit-content;
			}
		}

		article {
			border: 1px solid var(--color-rock-gray);
			border-radius: 2.5rem;
			display: flex;

			#dates-location {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
				padding: 1rem 2rem;

				.small-text {
					color: var(--color-space-gray);
					margin: 0;

					&:link:hover {
						text-decoration: underline;
					}
				}

				#countdown {
					font-size: 2rem;
				}
			}

			#buttons {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;
				justify-content: center;
				border-left: 1px solid var(--color-rock-gray);
			}

			@media screen and (max-width: 768px) {
				flex-direction: column;
				max-width: 400px;
				width: 100%;

				#buttons {
					border-left: none;
					border-top: 1px solid var(--color-rock-gray);
				}
			}
		}
	}
</style>
