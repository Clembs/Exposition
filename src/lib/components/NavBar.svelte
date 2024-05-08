<nav>
	<a href="/">Equipe</a>
	<ul>
		<li>
			<a href="#à-propos">À propos</a>
		</li>
		<li>
			<a href="#galerie">Galerie</a>
		</li>
		<li>
			<a href="#contact">Contact</a>
		</li>
		<li>
			<a id="billets" href="#billeterie">Billets</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		font-family: var(--font-modern);
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		position: sticky;
		inset: 0;
		align-items: center;
		z-index: 99;
		background-color: white;

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
