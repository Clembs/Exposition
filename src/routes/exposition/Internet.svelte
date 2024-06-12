<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import amazon1999 from '$lib/images/internet/amazon1999';
	import chadJawedSteve from '$lib/images/internet/chad-jawed-steve';
	import facebook2008 from '$lib/images/internet/facebook2008';
	import google1998 from '$lib/images/internet/google1998';
	import newgrounds from '$lib/images/internet/newgrounds';
	import rayTomlinson from '$lib/images/internet/ray-tomlinson';
	import skyblog from '$lib/images/internet/skyblog';
	import timBernersLee from '$lib/images/internet/tim-berners-lee';
	import webpage from '$lib/images/internet/webpage';
	import { currentSection } from '$lib/sections';
	import { intersect } from '@svelte-put/intersect';
</script>

<section
	id="internet"
	use:intersect={{
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.25
	}}
	on:intersect={(e) => currentSection.set('Internet')}
>
	<div class="contents">
		<h2>Partie 3 :<br /> Le phénomène Internet</h2>
		<p>
			Le développement d'Internet commence avec la création de la <abbr
				title="Defense Advanced Research Projects Agency"
			>
				DARPA
			</abbr>
			en 1958 et le lancement d'<abbr title="Advanced Research Projects Agency Network">
				ARPANET
			</abbr>
			en 1969. Des innovations clés incluent le protocole
			<abbr title="Transmission Control Protocol/Internet Protocol">TCP/IP</abbr>
			par Vint Cerf et Bob Kahn dans les années 1970, et l'invention de l'e-mail par Ray Tomlinson en
			1971. Le World Wide Web, créé par Tim Berners-Lee du
			<abbr title="Organisation européenne pour la recherche nucléaire">CERN</abbr>
			en 1989, révolutionne le partage de l'information, rendant Internet accessible au grand public
			dans les années 1990 grâce aux protocoles
			<abbr title="Hypertext Transfer Protocol">HTTP</abbr>
			et
			<abbr title="HyperText Markup Language">HTML</abbr>.
		</p>

		<ImageGallery images={[timBernersLee, webpage, rayTomlinson]} />

		<p>
			L'expansion du web dans les années 1990 et 2000 marque une nouvelle ère pour Internet. Google,
			fondé en 1998, devient rapidement le moteur de recherche dominant grâce à son algorithme
			innovant de classement des pages. Amazon, créé par Jeff Bezos en 1994, révolutionne le
			commerce en ligne avec son modèle de vente de livres puis d'une vaste gamme de produits.
		</p>

		<ImageGallery images={[google1998, amazon1999, skyblog]} />

		<p>
			Le Web 2.0 marque une évolution de l'Internet, où les utilisateurs peuvent non seulement
			consulter du contenu, mais aussi en créer et le partager facilement. Par exemple, des
			plateformes comme Facebook et YouTube permettent à chacun de publier des photos, des vidéos et
			des commentaires, transformant le web en un espace interactif, collaboratif et communautaire.
		</p>

		<ImageGallery images={[facebook2008, chadJawedSteve, newgrounds]} />

		<p>
			Les géants de l'informatique ne sont désormais plus seulement IBM, Microsoft ou Apple, mais
			aussi ces nouveaux joueurs du web comme Google, Amazon ou encore Facebook. Les anciens leaders
			du marché ont dû s'adapter : Apple offre désormais plusieurs services comme iCloud et Apple
			Music, tandis que Microsoft concentre ses efforts vers ses services professionnels avec
			Microsoft 365 et Azure. Cette transition a permis à ces entreprises de rester compétitives
			alors que le web a créé un paysage technologique en constante évolution.
		</p>
	</div>
</section>

<style lang="scss">
	#internet {
		padding: 5rem 1.5rem;

		color: var(--color-mica-dark);
		font-family: var(--font-modern);
		font-size: 1.25rem;
		background-color: #89b8e2;
		background-size: cover;
		background-position: center;
		-webkit-backdrop-filter: blur(10px) brightness(0.8);
		backdrop-filter: blur(10px) brightness(0.8);

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
