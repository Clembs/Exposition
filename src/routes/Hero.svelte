<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { readable } from 'svelte/store';
	import { dragscroll } from '@svelte-put/dragscroll';

	const startDate = new Date('2024-06-17T00:00:00');

	function timeDistanceFromNow(date: Date) {
		const distance = date.getTime() - Date.now();

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		return `${days}j ${hours}h ${minutes}m ${seconds}s`;
	}

	const timeRemaining = readable(timeDistanceFromNow(startDate), (set) => {
		const interval = setInterval(() => {
			set(timeDistanceFromNow(startDate));
		}, 1000);

		return () => clearInterval(interval);
	});

	let showHint = true;
</script>

<header>
	<div id="hero-text">
		<span class="chip">Exposition</span>
		<h1>
			De la
			<span id="mecanique"> mécanique </span><br />
			au
			<span id="numerique"> numerique </span>
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
		<div id="dates-location">
			<p class="small-text">
				Du <time datetime="2024-06-17">17</time>
				au <time datetime="2024-06-21">21 juin</time>
				2024
			</p>

			<div id="countdown">
				{#each $timeRemaining as time}
					{time}
				{/each}
			</div>

			<a href="#ou-aller" class="small-text">
				CRDoc, IUT Rangueil <br />
				31400 Toulouse
			</a>
		</div>

		<div id="buttons">
			<Button inline={false} href="#ou-aller">Où nous trouver</Button>
			<Button inline={false} variant="outlined" href="#billeterie">Billetterie</Button>
		</div>
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
		margin: 2rem 0;

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
			display: flex;
			align-items: center;
			margin: 0 2rem;
			box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);

			#dates-location {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
				padding: 1rem 2rem;
				min-width: 290px;

				.small-text {
					color: var(--color-space-gray);
					margin: 0;

					&:link:hover {
						text-decoration: underline;
					}
				}

				#countdown {
					font-size: 2rem;
					font-weight: bold;
				}
			}

			#buttons {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;
				justify-content: center;
				border-left: 2px solid var(--color-rock-gray);
				height: 100%;
			}

			@media screen and (max-width: 768px) {
				flex-direction: column;

				#dates-location {
					min-width: none;
				}

				#buttons {
					border-left: none;
					border-top: 1px solid var(--color-rock-gray);
					width: 100%;
				}
			}
		}
	}
</style>
