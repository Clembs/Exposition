<script lang="ts">
</script>

<section id="infos-pratiques">
	<div id="contents-wrapper">
		<div id="contents">
			<h2>Infos pratiques</h2>

			<ul>
				<li>
					<div class="label">
						<img
							loading="lazy"
							height="36"
							width="36"
							src="/system-7-icons/clock.png"
							alt="Icône reorésentant une horloge"
						/>
						Durée moyenne
					</div>
					<span>1h30</span>
				</li>
				<li>
					<div class="label">
						<img
							loading="lazy"
							height="36"
							width="36"
							src="/system-7-icons/people.png"
							alt="Icône représentant deux visages"
						/>
						Public
					</div>
					<span>Tous</span>
				</li>
				<li>
					<div class="label">
						<img
							loading="lazy"
							height="36"
							width="36"
							src="/system-7-icons/globe.png"
							alt="Icône représentant un globe terrestre"
						/>
						Langues
					</div>
					<span>Français, Anglais</span>
				</li>
			</ul>
		</div>
	</div>
	<img id="macintosh" draggable="false" src="/macintosh.png" alt="" aria-label="hidden" />
	<div id="stripes">
		<div class="stripe" style="background-color: var(--color-imac-green)" />
		<div class="stripe" style="background-color: var(--color-firefox-orange)" />
		<div class="stripe" style="background-color: var(--color-youtube-red)" />
		<div class="stripe" style="background-color: var(--color-gbc-purple)" />
		<div class="stripe" style="background-color: var(--color-skype-blue)" />
		<!-- <div class="stripe" style="background-color: var(--color-mac-cream)" /> -->
	</div>
</section>

<style lang="scss">
	#infos-pratiques {
		width: 100%;
		background-color: var(--color-mac-cream);
		height: 60vh;
		position: relative;
		overflow: hidden;

		@media screen and (max-width: 700px) {
			height: 55vh;
		}

		#contents-wrapper {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 100%;
			height: 100%;
			max-width: 900px;
			margin: 0 auto;
			z-index: 3;
			position: relative;

			@media screen and (max-width: 900px) {
				align-items: flex-start;
			}

			#contents {
				width: 100%;
				margin: 2rem;
				max-width: 380px;

				h2 {
					font-family: var(--font-old-school);
					font-weight: normal;
					text-transform: uppercase;
					font-size: clamp(2.5rem, 5vw, 3rem);
					text-align: end;
					margin-bottom: 1rem;
				}

				ul {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					li {
						font-family: var(--font-retro);
						font-size: 1.5rem;
						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 1rem;

						.label {
							display: flex;
							align-items: center;
							gap: 0.5rem;

							img {
								image-rendering: pixelated;
							}
						}
					}
				}
			}
		}

		#macintosh {
			position: absolute;
			z-index: 2;

			transform: translateY(-50%) scale(1.25);
			// transform-origin: left top;
			top: 50%;
			left: -100px;

			height: auto;
			width: auto;
			min-height: 100%;
			min-width: 40%;

			@media screen and (max-width: 800px) {
				transform: scale(1.25);
				transform-origin: left center;
				top: auto;
				left: -50px;
				bottom: -50px;

				height: 55%;
				max-height: 260px;
				min-width: auto;
				min-height: auto;
			}
		}

		#stripes {
			position: absolute;
			z-index: 1;
			bottom: -150px;
			right: -150px;

			.stripe {
				height: 3rem;
				width: 700px;
				rotate: -45deg;
			}

			@media screen and (max-width: 900px) {
				left: 0;
				right: auto;
				bottom: 0;
				width: 100%;

				.stripe {
					height: 1.5rem;
					width: 100%;
					rotate: 0deg;
				}
			}
		}
	}
</style>
