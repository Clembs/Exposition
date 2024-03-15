<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section id="contact">
	<h2>Contact</h2>
	<form>
		<label>
			<span>Email</span>
			<input type="email" placeholder="Email" />
		</label>
		<label>
			<span>Message</span>
			<textarea placeholder="Message" />
		</label>
		<Button href="#" inline>Envoyer</Button>
	</form>
</section>

<style lang="scss">
	#contact {
		max-width: 1440px;
		margin-top: 3rem;
		margin-bottom: 1rem;
		margin-left: auto;
		margin-right: auto;

		h2 {
			margin-bottom: 1.5rem;
		}

		form {
			display: flex;
			flex-direction: column;

			label {
				span {
					display: block;
				}

				input,
				textarea {
					width: 100%;
					margin-top: 0.5rem;
					margin-bottom: 1rem;
					padding: 0.5rem;
					border: 2px solid var(--color-rock-gray);
					border-radius: 0.5rem;
				}

				input {
					height: 3rem;
				}

				textarea {
					resize: vertical;
					min-height: 10rem;
				}
			}
		}
	}
</style>
