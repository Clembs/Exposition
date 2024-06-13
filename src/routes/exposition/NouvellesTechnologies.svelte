<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import appleVisionPro from '$lib/images/nouvelles-tech/apple-vision-pro';
	import chatgpt from '$lib/images/nouvelles-tech/chatgpt';
	import midjourney from '$lib/images/nouvelles-tech/midjourney';
	import oculusRift from '$lib/images/nouvelles-tech/oculus-rift';
	import { currentSection } from '$lib/sections';
	import { intersect } from '@svelte-put/intersect';
</script>

<section
	id="nouvelles-technologies"
	class="retro"
	use:intersect={{
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.25
	}}
	on:intersect={(e) => currentSection.set('Nouvelles technologies')}
>
	<div class="contents">
		<h2>Partie 4 :<br />Des nouvelles technologies au service de l'humanité ?</h2>
		<p>
			Le milieu des années 2010 a été marquée par une évolution fulgurante des gadgets connectés et
			de la réalité virtuelle. Les objets connectés ont envahi nos foyers, devenant des assistants
			intelligents pour nos besoins quotidiens. La réalité virtuelle, quant à elle, a fait ses
			premiers pas dans le grand public, promettant une immersion totale dans des mondes virtuels.
			Des appareils comme l'Oculus Rift de Facebook/Meta ou l'Apple Vision Pro ont ouvert la voie à
			une communication plus intuitive et immersive, laissant entrevoir un futur où la réalité
			virtuelle pourrait devenir le mode d'interaction dominant.
		</p>

		<ImageGallery images={[oculusRift, appleVisionPro]} />

		<p>
			L'intelligence artificielle (IA) a connu un essor considérable durant cette période. D'abord
			cantonnée à des utilisations contrôlées et fermées, comme les algorithmes de recommandation et
			les suggestions prédictives, l'IA a évolué vers des applications plus sophistiquées. L'IA
			générative a notamment permis l'émergence de nouvelles formes d'expression artistique et de
			création de contenu.
		</p>

		<ImageGallery images={[chatgpt, midjourney]} />

		<p>
			Néanmoins, cette évolution rapide n'est pas sans risque. L'absence de régulation adéquate
			soulève des inquiétudes quant aux impacts environnementaux et sociaux de l'IA, notamment en ce
			qui concerne la consommation énergétique des IA génératives et la collecte massive de données
			sans consentement. La question de l'éthique et de la responsabilité dans le développement et
			l'utilisation de l'IA devient de plus en plus cruciale.
		</p>

		<p>
			La technologie a connu une transformation profonde entre 2015 et 2020, et son évolution ne
			cesse de s'accélérer. La réalité virtuelle, l'intelligence artificielle et d'autres
			innovations promettent de révolutionner notre façon de vivre, de travailler et de communiquer.
			Cependant, il est essentiel de rester vigilant quant aux risques potentiels de ces
			technologies et de mettre en place des garde-fous pour garantir un développement responsable
			et éthique de l'IA et des autres innovations technologiques.
		</p>
	</div>
</section>

<style lang="scss">
	#nouvelles-technologies {
		padding: 5rem 1.5rem;

		color: var(--color-mica-light);
		font-size: 1.25rem;
		background: var(--gradient-vision-pro);
		font-family: var(--font-modern);

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
