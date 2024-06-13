<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import appleIi from '$lib/images/pc/apple-ii';
	import cga from '$lib/images/pc/cga';
	import commodore64 from '$lib/images/pc/commodore-64';
	import ibmPc from '$lib/images/pc/ibm-pc';
	import ibmPcDos from '$lib/images/pc/ibm-pc-dos';
	import system1 from '$lib/images/pc/system-1';
	import trs80 from '$lib/images/pc/trs-80';
	import unix from '$lib/images/pc/unix';
	import windows95 from '$lib/images/pc/windows-95';
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

		<p>
			Ces machines sont venues accompagnées de systèmes d'exploitation, des interfaces textuelles
			rudimentaires de
			<abbr title="Disk Operating System">DOS</abbr>
			dans les années 1980, jusqu'aux environnements graphiques intuitifs de Windows 95 ou encore Mac
			OS 7. Cette période a été marquée par une course à la performance et à la raffinement, avec l'apparition
			de systèmes comme
			<abbr title="Free Berkeley Software Distribution">FreeBSD</abbr>
			et <abbr title="GNU's Not Unix!">GNU</abbr>/Linux, venus contester l'hégémonie de Microsoft.

			<br />
			<br />
			Windows dominait alors le marché des ordinateurs personnels, Mac OS s'était imposé comme le choix
			privilégié des créatifs, tandis que les systèmes Unix, ancêtres de FreeBSD et GNU/Linux, régnaient
			sur les serveurs et les environnements professionnels. Cette diversification s'est accompagnée
			d'une explosion des usages, avec l'arrivée d'Internet et l'essor des navigateurs web comme Netscape
			et Internet Explorer, qui ont bouleversé le paysage numérique et posé les bases de notre ère connectée.
		</p>

		<p>
			<mark>Info : Images de Windows 95 et Système 1 d'Apple vers la fin de cette galerie.</mark>
		</p>

		<ImageGallery images={[ibmPcDos, unix, windows95, system1]} />
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
