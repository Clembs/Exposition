<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section id="a-propos">
	<div id="window">
		<h2>À propos</h2>

		<p>Réalisé dans le cadre de première année de BUT Informatique.</p>

		<h3>Équipe</h3>
		<ul>
			<li>Chef de projet : Clément VOISIN</li>
			<li>Réalisation du site web : Clément VOISIN, Gérald LEBAN, Kylian PAWILOWSKI</li>
			<li>Écriture : Ellisa EE, Clément VOISIN, Gérald LEBAN, Kylian PAWILOWSKI</li>
			<li>Recherche : Clément VOISIN, Ellisa EE</li>
		</ul>

		<Button style="osx" href="https://github.com/Clembs/Exposition/">
			Ouvrir le projet GitHub
		</Button>
	</div>
	<img src="https://wallpapercave.com/wp/VHL2DbC.jpg" alt="Fond d'écran de Mac OS X" />
</section>

<style lang="scss">
	#a-propos {
		font-family: var(--font-modern);
		height: 60vh;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#window {
		box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.25);
		z-index: 2;
		background: repeating-linear-gradient(
			0deg,
			hsl(0, 0%, 98%) 0,
			hsl(0, 0%, 98%) 3px,
			hsl(0, 0%, 93%) 3px,
			hsl(0, 0%, 93%) 6px
		);
		padding: 1rem;
		border-radius: 0.25rem;
		// display: flex;
		// flex-direction: column;
		// gap: 1rem;

		ul {
			list-style: initial;
			padding: 0 1rem;
			margin-bottom: 2rem;
		}
	}
</style>
