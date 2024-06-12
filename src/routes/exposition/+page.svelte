<script lang="ts">
	import { intersect } from '@svelte-put/intersect';
	import Mecanographie from './Mecanographie.svelte';
	import OrdinateursPersonnels from './OrdinateursPersonnels.svelte';
	import { changePeriod } from '$lib/intersection-helpers';
	import Internet from './Internet.svelte';

	const featuredImages = [
		// Idk what this is
		'https://wieland200years.com/files/timeline/1929_Warmwalze.png',
		// Typewriter
		'https://www.pngall.com/wp-content/uploads/2/Typewriter-PNG-File-Download-Free-180x180.png',
		// Pascaline
		'https://www.historybit.it/wp-content/uploads/2018/01/D0776-218x146.png',
		// Phone
		'https://www.jackspacks.com/images/OldPhone.png',
		// Floppy disk
		'https://www.computerhope.com/issues/pictures/floppy.png',
		// Walkman
		'http://corridor0108.main.jp/2019/11/24/walkman.png',
		// Apple II
		'https://e-student.org/wp-content/uploads/2019/07/apple-ii.png',
		// Commodore 64
		'https://www.vintageisthenewold.com/wp-content/uploads/2014/08/C64_Transparent-300x160.png',
		// PlayStation
		'https://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17552.png',
		// iMac G3
		'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/IMac_G3_Bondi_Blue%2C_three-quarters_view.png/198px-IMac_G3_Bondi_Blue%2C_three-quarters_view.png',
		// Nokia 3310
		'https://static-mpm-optimized.s3.eu-west-2.amazonaws.com/aa906073-15d3-4eba-9528-d075b09bf725_thumbnail.png',
		// Wii
		'https://wiki.dolphin-emu.org/images/f/f3/Wii-Console.png',
		// Supercomputer
		'https://images.vectorhq.com/images/previews/4bb/supercomputers-psd-461609.png',
		// iPhone
		'https://www.phonecopy.com/dynamic/phone_images/apple_iphone_2g.png',
		// Amazon Echo Dot
		'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80514917/fee_194_131_png',
		// Meta Quest 3
		'https://vr-compare.com/img/headsets/metaquest3.png'
	];
</script>

<svelte:head>
	<title>De la mécanique au numérique - Exposition virtuelle</title>
</svelte:head>

<article>
	<header
		id="hero"
		use:intersect={{
			root: null,
			rootMargin: '0px',
			threshold: 1
		}}
		on:intersect={(e) => changePeriod(e, undefined)}
	>
		<div class="text">
			<h1>
				De la<br /><span class="old-school">mécanique</span> au<br />
				<span class="retro">numérique</span>
			</h1>

			<div class="bottom-info">
				<p>
					Exposition virtuelle présentée par<br /> Ellisa Ee, Gérald Leban, Kylian Pawilowski et Clément
					Voisin
				</p>

				<p>© 2024 Team 20</p>
			</div>
		</div>

		<ul
			class="product-grid"
			aria-label="Grille de différents appareils électroniques qui ont marqué les dernières générations"
		>
			<ul class="column">
				{#each featuredImages.slice(0, featuredImages.length / 3) as image}
					<li class="grid-item">
						<img loading="lazy" alt="" src={image} />
					</li>
				{/each}
			</ul>
			<ul class="column">
				{#each featuredImages.slice(featuredImages.length / 3, (featuredImages.length / 3) * 2) as image}
					<li class="grid-item">
						<img loading="lazy" alt="" src={image} />
					</li>
				{/each}
			</ul>
			<ul class="column">
				{#each featuredImages.slice((featuredImages.length / 3) * 2) as image}
					<li class="grid-item">
						<img loading="lazy" alt="" src={image} />
					</li>
				{/each}
			</ul>
		</ul>
	</header>

	<Mecanographie />
	<OrdinateursPersonnels />
	<Internet />
</article>

<style lang="scss">
	header {
		color: var(--color-shell-black);
		font-family: var(--font-modern);
		font-size: 1.1em;
		display: flex;
		padding: 3rem clamp(1.5rem, 5vw, 3rem);
		margin: 0 auto;
		padding-top: 5rem;
		height: 100vh;
		position: relative;

		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			flex: 1;
		}

		h1 {
			text-align: left;
			font-size: clamp(3rem, 5vw, 5rem);
			line-height: initial;

			.old-school {
				font-size: 1.2em;
			}

			.retro {
				font-size: 1.1em;
			}
		}

		.bottom-info {
			position: absolute;
			bottom: 0;
			left: 0;
			padding: clamp(1.5rem, 5vw, 3rem);
			max-width: 75ch;
			line-height: 1.5;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			background-image: url('/front-exposition-hero.png');
			background-size: cover;
			width: 50%;
			aspect-ratio: 2.11;
			min-width: 400px;
			max-width: 700px;

			@media (max-width: 800px) {
				display: none;
			}
		}
	}

	.product-grid {
		display: flex;
		gap: 1rem;
		align-items: center;
		transform: perspective(800px) rotateX(6deg) rotateY(-20deg) rotateZ(5deg);
		transform-style: preserve-3d;
		overflow: hidden;
		margin-top: -5rem;
		z-index: -1;

		.column {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;

			&:nth-child(2) {
				transform: translateY(-5%);
			}
		}

		.grid-item {
			width: 175px;
			height: 175px;
			overflow: hidden;
			background-color: #d9d9d9;
			border-radius: 1.25rem;
			display: grid;
			place-items: center;

			img {
				height: 75%;
				width: auto;
				object-fit: cover;
			}
		}

		@media (max-width: 800px) {
			display: none;
		}
	}
</style>
