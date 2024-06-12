<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import { cubicInOut } from 'svelte/easing';

	const dispatch = createEventDispatcher();
</script>

<nav id="section-picker" transition:fade={{ duration: 300, easing: cubicInOut }}>
	<div id="picker-contents">
		<h2 in:fly={{ x: -25, duration: 300, delay: 200 }}>Sauter vers une époque</h2>
		<ul>
			<li in:fly={{ x: -25, duration: 300, delay: 300 }}>
				<a href="#mécanographie" on:click={() => dispatch('close')}>
					<div class="icon" style="--color: var(--color-famicom-cream);">
						<img
							class="retro"
							width="48"
							height="48"
							alt="💾"
							src="https://em-content.zobj.net/source/sharp/397/floppy-disk_1f4be.png"
						/>
					</div>
					Les machines électromécaniques, avant l'informatique
				</a>
			</li>
			<li in:fly={{ x: -25, duration: 300, delay: 400 }}>
				<a href="#ordinateurs-personnels" on:click={() => dispatch('close')}>
					<div class="icon" style="--color: var(--color-win95-green);">
						<img
							class="retro"
							width="48"
							height="48"
							alt="🖱️"
							src="https://em-content.zobj.net/source/serenityos/392/computer-mouse_1f5b1-fe0f.png"
						/>
					</div>
					L'ordinateur devient grand public</a
				>
			</li>
			<li in:fly={{ x: -25, duration: 300, delay: 500 }}>
				<a href="#internet" on:click={() => dispatch('close')}>
					<div class="icon" style="--color: var(--color-skype-blue);">
						<img
							class="retro"
							width="48"
							height="48"
							alt="😃"
							src="https://jvflux.fr/images/0/0e/18.gif"
						/>
					</div>
					La bascule du phénomène Internet</a
				>
			</li>
		</ul>
		<div in:fly={{ x: -25, duration: 300, delay: 600 }}>
			<Button style="gnome3" on:click={() => dispatch('close')}>Fermer (Échap)</Button>
		</div>
	</div>
</nav>

<style lang="scss">
	#section-picker {
		inset: 0;
		position: fixed;
		display: grid;
		place-items: center;
		background-color: rgba(0, 0, 0, 0.75);
		color: white;
		backdrop-filter: blur(5px);
		z-index: 99;
		font-family: var(--font-modern);

		#picker-contents {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			align-items: center;
			padding: 1rem;

			h2 {
				text-align: center;
				font-size: 2.5rem;
				text-wrap: balance;
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			font-size: 1.5rem;

			li {
				a {
					padding: 1rem;
					display: flex;
					align-items: center;
					gap: 1.5rem;
					transition: transform 0.2s ease;

					&:hover {
						transform: translateX(1rem);
					}

					.icon {
						padding: 1.5rem;
						border-radius: 50%;
						background-color: var(--color);
						display: grid;
						flex-shrink: 0;

						.retro {
							image-rendering: pixelated;
						}

						@media (max-width: 768px) {
							padding: 1rem;

							img {
								width: 32px;
								height: 32px;
							}
						}
					}
				}
			}

			@media (max-width: 768px) {
				font-size: 1.25rem;
			}
		}

		// li,
		// h2 {
		// }
	}
</style>
