<script>
	import Mecanographie from './Mecanographie.svelte';
</script>

<article>
	<header>
		<h1>
			De la<br /><span class="old-school">mécanique</span> au<br />
			<span class="retro">numérique</span>
		</h1>

		<div class="bottom-info">
			<p>
				Exposition virtuelle présentée par<br /> Ellisa Ee, Gérald Leban, Kylian Pawilowski et Clément
				Voisin
			</p>

			<p>© 2024 Team 20</p>
		</div>
	</header>

	<Mecanographie />
</article>

<style lang="scss">
	header {
		color: var(--color-shell-black);
		font-family: var(--font-modern);
		font-size: 1.1em;
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: center;
		// gap: 1rem;
		padding: 3rem clamp(1.5rem, 5vw, 3rem);
		margin: 0 auto;
		height: 100vh;
		position: relative;

		h1 {
			text-align: left;
			font-size: clamp(3rem, 5vw, 5rem);
			line-height: initial;

			.old-school {
				font-size: 1.2em;
			}

			.retro {
				font-size: 1.1em;
			}
		}

		.bottom-info {
			position: absolute;
			bottom: 0;
			left: 0;
			padding: clamp(1.5rem, 5vw, 3rem);
			max-width: 75ch;
			line-height: 1.5;
		}
	}
</style>
