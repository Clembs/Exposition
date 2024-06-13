<script lang="ts">
	import { currentSection } from '$lib/sections';
	import { intersect } from '@svelte-put/intersect';
	import VisionWindow from '../Billetterie/VisionWindow.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	id="credits"
	use:intersect={{
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	}}
	on:intersect={(e) => currentSection.set('')}
>
	<VisionWindow>
		<div class="content">
			<h2>Crédits</h2>

			<p>Réalisé dans le cadre de première année de BUT Informatique.</p>

			<p>
				Les images, icônes et autres éléments graphiques sont la propriété de leurs auteurs
				respectifs.
			</p>

			<h3>Équipe</h3>
			<ul>
				<li>Chef de projet : Clément VOISIN</li>
				<li>Réalisation du site web : Clément VOISIN, Gérald LEBAN, Kylian PAWILOWSKI</li>
				<li>Éléments graphiques : Clément VOISIN</li>
				<li>Écriture : Ellisa EE, Clément VOISIN, Gérald LEBAN, Kylian PAWILOWSKI</li>
				<li>Recherche : Clément VOISIN, Ellisa EE</li>
			</ul>

			<div class="buttons">
				<Button href="https://github.com/Clembs/Exposition" style="visionos">
					Voir le code source du projet
				</Button>

				<Button href="/" style="visionos">Retour à l'accueil</Button>
			</div>
		</div>
	</VisionWindow>
</section>

<style lang="scss">
	#credits {
		cursor: url('visionos-pointer.png'), auto;
		font-family: var(--font-modern);
		color: white;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		background-image: url('/visionos-background.png');
		background-size: cover;
		background-position: center;
	}

	.content {
		display: flex;
		flex-direction: column;

		h2 {
			text-align: center;
			font-size: 2rem;
		}

		ul {
			list-style: initial;
			padding: 0 1rem;
		}

		.buttons {
			display: flex;
			gap: 0.75rem;
			justify-content: flex-end;
			margin-top: 2rem;
			width: 100%;
		}
	}
</style>
