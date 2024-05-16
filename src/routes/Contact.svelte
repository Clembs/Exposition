<script>
	import Button from '$lib/components/Button.svelte';

	let email = '';
	let message = '';
</script>

<section id="contact">
	<h2>Contactez-nous</h2>

	<form>
		<label>
			<input bind:value={email} type="email" placeholder="" />
			<span>Email</span>
		</label>
		<label>
			<textarea bind:value={message} placeholder=""></textarea>
			<span>Message</span>
		</label>

		<Button disabled={!message || !email} style="md1" inline>Envoyer</Button>
	</form>
</section>

<style lang="scss">
	#contact {
		margin: 5rem auto;
		max-width: 800px;
		font-family: var(--font-modern);
		box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.25);
		padding: 2rem;
		font-size: 1.1rem;

		h2 {
			margin-bottom: 1rem;
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			label {
				width: 100%;
				margin: 1rem 0;
				position: relative;

				span {
					position: absolute;

					left: 0;
					top: 50%;
					transform: translateY(-50%);

					color: #999999;
					font-size: 1em;

					user-select: none;

					transition:
						top 0.2s,
						font-size 0.2s;
				}

				input,
				textarea {
					font: inherit;
					width: 100%;
					height: 100%;
					padding: 0.5rem 0;
					padding-top: 1rem;
					border-bottom: 2px solid #999999;

					&:focus {
						border-color: var(--color-skype-blue);

						& + span {
							color: var(--color-skype-blue);
						}
					}

					&:focus,
					&:not(:placeholder-shown) {
						& + span {
							// top: 0;
							top: -0.25rem;
							transform: translateY(0);
							font-size: 0.75em;
						}
					}
				}

				textarea {
					resize: vertical;
					// min-height: 10rem;
				}
			}
		}
	}
</style>
