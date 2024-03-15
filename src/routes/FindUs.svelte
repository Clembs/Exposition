<section id="find-us">
	<img src="https://w.wallhaven.cc/full/l8/wallhaven-l8vp7y.jpg" alt="" />
	<div class="aero-card">
		<div>
			<h1>Où nous trouver ?</h1>
			<p>Au 1er étage de l'IUT Informatique de Toulouse, 133b Av de Rangueil</p>

			<iframe
				title="map to crdoc"
				src="https://www.openstreetmap.org/export/embed.html?bbox=1.4628499746322634%2C43.5695478655846%2C1.4663904905319216%2C43.57131630006121&amp;layer=mapnik&amp;marker=43.57043208931348%2C1.4646202325820923"
				style="border: 1px solid black"
			></iframe>
		</div>
	</div>
</section>

<style lang="scss">
	#find-us {
		height: 60vh;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.aero-card {
		background-color: hsla(202, 63%, 60%, 0.25);
		border-radius: 4px;
		padding: 8px;
		border: 2px solid black;
		backdrop-filter: blur(5px);
		box-shadow: 0 0 20px 1px hsl(0, 0, 0, 0.25);

		div {
			background-color: white;
			height: 100%;
			padding: 8px;

			p {
				margin-top: 0.5rem;
			}

			iframe {
				width: 100%;
				height: 300px;
			}
		}
	}
</style>
