<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section id="ou-aller">
	<div id="window">
		<h2>Où nous trouver ?</h2>
		<p>Au 1er étage de l'IUT Informatique de Toulouse, 133b Av de Rangueil</p>

		<iframe
			title="Carte "
			src="https://www.openstreetmap.org/export/embed.html?bbox=1.4628499746322634%2C43.5695478655846%2C1.4663904905319216%2C43.57131630006121&amp;layer=mapnik&amp;marker=43.57043208931348%2C1.4646202325820923"
			style="border: 1px solid black"
		></iframe>

		<Button
			style="osx"
			href="https://www.openstreetmap.org/node/9769380628#map=19/43.57044/1.46428"
		>
			Ouvrir dans OpenStreetMap
		</Button>
	</div>
	<img src="https://wallpapercave.com/wp/VHL2DbC.jpg" alt="Fond d'écran de Mac OS X" />
</section>

<style lang="scss">
	#ou-aller {
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
		display: flex;
		flex-direction: column;

		iframe {
			width: 100%;
			height: 300px;
			margin-bottom: 1rem;
		}
	}
</style>
