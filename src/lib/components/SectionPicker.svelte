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
					<div class="section-text">
						<div class="title">Les machines électromécaniques, avant l'informatique</div>
						<div class="period">1920-1970</div>
					</div>
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
					<div class="section-text">
						<div class="title">L'ordinateur devient grand public</div>
						<div class="period">1970-1990</div>
					</div>
				</a>
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
					<div class="section-text">
						<div class="title">Le phénomène Internet</div>
						<div class="period">1990-2010</div>
					</div></a
				>
			</li>
			<li in:fly={{ x: -25, duration: 300, delay: 500 }}>
				<a href="#nouvelles-technologies" on:click={() => dispatch('close')}>
					<div class="icon" style="--color: var(--gradient-vision-pro);">
						<img
							width="48"
							height="48"
							alt="📣"
							src="https://em-content.zobj.net/source/google/387/megaphone_1f4e3.png"
						/>
					</div>
					<div class="section-text">
						<div class="title">Des nouvelles technologies au service de l'humanité ?</div>
						<div class="period">2015-Présent</div>
					</div></a
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
						background: var(--color);
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

					.period {
						font-size: 0.75em;
						opacity: 0.75;
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
