<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { dragscroll } from '@svelte-put/dragscroll';

	let showHint = true;
</script>

<header>
	<div id="hero-text">
		<span class="chip">Exposition</span>
		<h1>
			De la
			<span id="mecanique"> mécanique </span><br />
			au
			<span id="numerique"> numérique </span>
		</h1>

		<p>Présentée par des étudiant•es en BUT Informatique de l'IUT Paul Sabatier</p>
	</div>

	<div id="hero-image">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div id="scroll-zone" use:dragscroll on:scroll={() => (showHint = false)}>
			<img
				draggable="false"
				src="/hero-image.png"
				alt="Plusieurs appareils et applications sont montrés côte à côte, dans un ordre chronologique, partant de la machine à écrire à l'Apple Vision Pro."
			/>
		</div>
		<div id="hint" class:show={showHint}>
			Défilez vers la droite
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 9L15 9M15 9L9 3.75M15 9L9 14.25"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</div>

	<article>
		<Button inline={false} href="/exposition">Visiter l'exposition virtuelle</Button>
		<Button inline={false} variant="outlined" href="/#à-propos">En savoir plus</Button>
	</article>
</header>

<style lang="scss">
	header {
		font-family: var(--font-modern);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 2rem;
		margin: 5rem 0;
		margin-top: 7rem;

		#hero-text {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			align-items: center;
			margin: 0 2rem;

			h1 {
				font-size: clamp(2.5rem, 5vw, 3rem);

				br {
					display: none;
				}

				#mecanique {
					font-family: var(--font-old-school);
					font-size: 1.15em;
				}

				#numerique {
					font-size: 1.075em;
					font-family: var(--font-retro);
				}

				@media screen and (max-width: 768px) {
					br {
						display: block;
					}
				}
			}

			.chip {
				border: 1px solid hsl(39, 34%, 62%);
				background-color: hsl(39, 58%, 88%);
				padding: 0.5rem 0.75rem;
				border-radius: 99px;
				width: fit-content;
			}
		}

		#hero-image {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;

			#scroll-zone {
				position: relative;
				overflow-x: scroll;
				user-select: none;
				scrollbar-width: none;
				width: 100%;
				display: grid;
				place-items: center;

				&::-webkit-scrollbar {
					display: none;
				}

				img {
					position: relative;
					z-index: 2;
					height: 100%;
					max-width: none;
					display: block;
				}

				&::after {
					content: '';
					position: sticky;
					bottom: 1.25rem;
					left: 0;
					width: 100%;
					height: 2px;
					background-color: var(--color-rock-gray);
					display: block;
				}
			}

			#hint {
				font-size: 0.75rem;
				color: var(--color-space-gray);
				display: flex;
				opacity: 0;
				gap: 0.25rem;
				position: absolute;
				align-items: center;
				bottom: -1rem;
				right: 2rem;
				transition: opacity 500ms ease;

				svg {
					position: relative;
					top: -1px;
					animation: moveArrow 1s infinite;
				}

				@keyframes moveArrow {
					0% {
						transform: translateX(0);
					}
					50% {
						transform: translateX(0.125rem);
					}
					100% {
						transform: translateX(0);
					}
				}

				@media screen and (max-width: 1350px) {
					&.show {
						opacity: 1;
					}
				}
			}
		}

		article {
			border: 2px solid var(--color-rock-gray);
			border-radius: 2.5rem;
			padding: 1rem;
			display: flex;
			gap: 1rem;
			margin: 0 2rem;
			box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 0.5rem;
				width: calc(100% - 2rem);
			}
		}
	}
</style>
