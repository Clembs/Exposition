<script>
	import Button from '$lib/components/Button.svelte';
	import VisionWindow from './VisionWindow.svelte';
</script>

<section id="billetterie">
	<VisionWindow>
		<h2>Billetterie</h2>

		<p>
			L'exposition est gratuite en accès libre, mais vous pouvez obtenir un ticket de collection si
			vous le souhaitez.
		</p>

		<form>
			<input type="text" placeholder="Votre nom" id="name" />
			<input type="date" placeholder="La date et le mois" id="date" />

			<Button style="visionos">Réserver sa place</Button>
		</form>
	</VisionWindow>
</section>

<style lang="scss">
	section {
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

		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: flex-end;

			input {
				border-radius: 0.75rem;
				height: 2.75rem;
				padding: 0 1.25rem;
				font-size: 1em;
				font-family: var(--font-modern);
				mix-blend-mode: luminosity;
				color: white;
				width: 100%;
				border: none;

				box-shadow:
					inset 1px 1px 4px 0 rgba(0, 0, 0, 0.1),
					inset 1px 1px 4px 0 rgba(0, 0, 0, 0.08),
					inset 0 -0px 1px 0 rgba(255, 255, 255, 0.25),
					inset 0 -0px 1px 0 rgba(255, 255, 255, 0.3);

				background: rgba(85, 85, 85, 0.5);
			}
		}
	}
</style>
