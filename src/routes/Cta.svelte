<script>
	import Button from '$lib/components/Button.svelte';
	import VisionWindow from './Billetterie/VisionWindow.svelte';
</script>

<section id="cta">
	<VisionWindow>
		<div class="content">
			<h2>Plus qu'un pas vers l'évolution du milieu informatique.</h2>

			<Button href="/exposition" style="visionos">Visiter l'exposition virtuelle</Button>
		</div>
	</VisionWindow>
</section>

<style lang="scss">
	#cta {
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
		gap: 2rem;
		align-items: center;
		text-align: center;
	}
</style>
