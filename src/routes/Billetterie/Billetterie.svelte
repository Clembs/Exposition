<script>
	import Button from '$lib/components/Button.svelte';
	import VisionWindow from './VisionWindow.svelte';

	export let name = '';
	let date = '';
	let time = '';

	let errors = {
		date: '',
		time: ''
	};
</script>

<section id="billetterie">
	<VisionWindow>
		<h2>Billetterie</h2>

		<p>
			L'exposition est gratuite en accès libre, mais vous pouvez directement importer votre ticket
			pour votre calendrier numérique (ex : Google Agenda, Apple Calendar, etc.).

			<!-- TODO: À faire -->
			<!-- ticket de collection si vous le souhaitez. -->
		</p>

		<form
			on:submit={async () => {
				if (new Date(date) < new Date('2024-06-17') || new Date(date) > new Date('2024-06-24')) {
					errors.date = 'La date doit être comprise entre le 17 et le 24 juin 2024';
				} else {
					errors.date = '';
				}
				if (time < '08:00' || time > '18:00') {
					errors.time = "L'heure doit être comprise entre 08:00 et 18:00";
				} else {
					errors.time = '';
				}

				if (errors.date || errors.time) {
					return;
				}

				const req = await fetch('/api/cal', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ name, date, time })
				});

				if (!req.ok) {
					console.error('Failed to add event to calendar');
				}

				const res = await req.blob();
				const url = URL.createObjectURL(res);
				const a = document.createElement('a');
				a.href = url;
				a.download =
					req.headers.get('Content-Disposition')?.split('filename=')[1] ||
					`De la mécanique au numérique - ${date}.ics`;
				a.click();
				URL.revokeObjectURL(url);
				a.remove();
			}}
		>
			<input
				bind:value={name}
				name="name"
				type="text"
				placeholder="Votre nom"
				required
				maxlength="32"
			/>
			<div id="datetime">
				<label for="date">
					<span>Date (17/06 au 24/06)</span>
					<input bind:value={date} name="date" type="date" required />
					{#if errors.date}
						<span class="error">{errors.date}</span>
					{/if}
				</label>
				<label for="time">
					<span>Heure (08:00 - 18:00)</span>
					<input bind:value={time} name="time" type="time" required />
					{#if errors.time}
						<span class="error">{errors.time}</span>
					{/if}
				</label>
			</div>

			<Button style="visionos">Ajouter au calendrier</Button>
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

		p {
			mix-blend-mode: color-burn;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: flex-end;

			#datetime {
				display: flex;
				gap: 1rem;
				width: 100%;

				@media (max-width: 768px) {
					flex-direction: column;
				}
			}

			label {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				width: 100%;

				span {
					font-size: 0.75em;
					margin-left: 0.5rem;
					mix-blend-mode: color-burn;

					&.error {
						color: var(--color-youtube-red);
					}
				}
			}

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
