<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import appleIi from '$lib/images/pc/apple-ii';
	import cga from '$lib/images/pc/cga';
	import commodore64 from '$lib/images/pc/commodore-64';
	import ibmPc from '$lib/images/pc/ibm-pc';
	import trs80 from '$lib/images/pc/trs-80';
	import { currentSection } from '$lib/sections';
	import { intersect } from '@svelte-put/intersect';
</script>

<section
	id="ordinateurs-personnels"
	class="retro"
	use:intersect={{
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.25
	}}
	on:intersect={(e) => currentSection.set('Ordinateurs personnels')}
>
	<div class="contents">
		<h2>Partie 2 :<br />L'ordinateur devient grand public</h2>
		<p>
			Les ordinateurs personnels grand public sont apparus à la fin des années 1970 lorsque le coût
			et les dimensions des ordinateurs ont suffisamment diminué pour les rendre abordables. Voici
			les premiers ordinateurs personnels populaires.
		</p>

		<ImageGallery images={[appleIi, trs80, commodore64]} />

		<p>
			Nous avons observé une multiplication des micro-ordinateurs dans les années 1980. Par exemple,
			IBM a produit l'IBM PC en 1981, qui était beaucoup plus cher que le prix du marché à cette
			époque et nécessitait son propre écran, alors que les micro-ordinateurs typiques pouvaient
			utiliser l'écran de télévision. La carte graphique CGA, sortie en 1981, était coûteuse et
			limitée à 4 couleurs. Trois ans plus tard, en 1984, IBM a lancé l'Enhanced Graphics Adapter,
			qui supportait 16 couleurs.
		</p>

		<ImageGallery images={[ibmPc, cga]} />
	</div>
</section>

<style lang="scss">
	#ordinateurs-personnels {
		padding: 5rem 1.5rem;

		color: var(--color-mica-dark);
		font-size: 1.25rem;
		background-color: var(--color-rock-gray);

		h2 {
			font-size: 2.5rem;
			text-wrap: balance;
		}

		.contents {
			max-width: 800px;
			margin: 0 auto;
		}
	}
</style>
