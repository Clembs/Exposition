<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import cartePerforee from '$lib/images/mecanographie/carte-perforee';
	import tabulatrice from '$lib/images/mecanographie/tabulatrice';
</script>

<section id="mécanographie">
	<div class="contents">
		<h2>Partie 1 : la mécanographie</h2>
		<p>
			Après la Première Guerre mondiale, l'importation de machines statistiques américaines en
			Europe marque le début de la mécanographie, principalement utilisée dans les domaines de
			l'assurance, des statistiques et de l'actuariat. La société qui produisait les machines
			HOLLERITH, devenue IBM aux États-Unis, était représentée par la Compagnie Electro-Mécanique,
			qui est devenue IBM France en 1947.
		</p>

		<ImageGallery images={[tabulatrice, cartePerforee]} />

		<p>
			À l'approche de la Seconde Guerre mondiale, les installations connaissaient une forte
			croissance, de l'ordre de 30 à 50 % annuels. Pendant la guerre, l'utilisation de circuits
			imprimés et de diodes au germanium a été introduite. L'après-guerre marque le début du succès
			de la mécanographie avec de nouvelles inventions comme les calculatrices et les premières
			mémoires de masse magnétiques, qui, en raison de leur capacité de programmation illimitée,
			deviennent centrales dans les systèmes de traitement de l'information.
		</p>
	</div>
</section>

<style lang="scss">
	#mécanographie {
		padding: 5rem 1.5rem;

		color: var(--color-mica-dark);
		font-family: var(--font-old-school);
		font-size: 1.25rem;
		background-color: var(--color-famicom-cream);

		h2 {
			font-size: 2.5rem;
		}

		.contents {
			max-width: 800px;
			margin: 0 auto;
		}
	}
</style>
