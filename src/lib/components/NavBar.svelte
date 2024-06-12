<nav>
	<a href="/">
		<img
			loading="eager"
			height="32"
			width="32"
			src="/windows-95-icons/globe.png"
			alt="Logo de l'exposition : De la mécanique au numérique"
		/></a
	>
	<ul>
		<li>
			<a href="/#à-propos">Présentation</a>
		</li>
		<li>
			<a href="/#galerie">Galerie</a>
		</li>
		<li>
			<a href="/exposition" id="billets">Exposition</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		font-family: var(--font-modern);
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		position: fixed;
		top: 0;
		left: 0;
		align-items: center;
		z-index: 99;
		background-color: white;
		width: 100%;

		img {
			image-rendering: pixelated;
		}

		ul {
			display: flex;
			gap: 0.25rem;
			align-items: center;

			a {
				display: block;
				padding: 0.875rem 1.5rem;
				border-radius: 99rem;
				&#billets {
					background-color: var(--color-shell-black);
					color: white;
				}
			}
		}
	}
</style>
