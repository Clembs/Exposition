<script lang="ts">
	import ImageModal from '$lib/components/ImageModal.svelte';
	import tabulatrice from '$lib/images/mecanographie/tabulatrice';
</script>

<section id="mécanographie">
	<div class="contents">
		<h2>Partie 1 : la mécanographie</h2>
		<p>
			Après la Première Guerre mondiale, l'importation de machines statistiques américaines en
			Europe marque le début de la mécanographie, principalement utilisée dans les domaines de
			l'assurance, des statistiques et de l'actuariat. La société qui produisait les machines
			HOLLERITH, devenue IBM aux États-Unis, était représentée par la Compagnie Electro-Comptable,
			qui est devenue IBM France en 1947.
		</p>

		<ImageModal image={tabulatrice} />
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
