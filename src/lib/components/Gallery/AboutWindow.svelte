<script lang="ts">
	import Window95 from './Window95.svelte';

	export let sectionEl: HTMLElement;
	export let name = 'Vous';
	export let windowState: 'minimized' | 'maximized' | 'opened' | 'closed';
	export let focusedWindow: 'gallery' | 'about' | null;
</script>

<Window95
	title="À propos"
	iconPath="/windows-95-icons/about-windows.png"
	bind:sectionEl
	x={200}
	y={80}
	bind:windowState
	focused={focusedWindow === 'about'}
	on:focus={() => (focusedWindow = 'about')}
>
	<div id="about-content">
		<div id="about-content-split">
			<div id="about-image">
				<img
					loading="eager"
					src="/windows-95-icons/globe.png"
					alt="À propos"
					width="48"
					height="48"
					draggable="false"
				/>
			</div>

			<div id="about-text">
				De la mécanique au numérique<br />
				Copyright © 2024-2024 Team 20.<br />
				<br />
				Produit par :
				<ul>
					<li>Ellisa Ee</li>
					<li>Gérald Leban</li>
					<li>Kylian Pawilowski</li>
					<li>Clément Voisin</li>
				</ul>
				<br />
				Ce produit est licencié pour :<br />
				{name}

				<hr />

				Windows, Microsoft et le logo Windows sont des marques déposées de Microsoft Corporation.
			</div>
		</div>

		<div id="bottom-actions">
			<button class="btn-95" on:click={() => (windowState = 'closed')}>OK</button>
		</div>
	</div>
</Window95>

<style lang="scss">
	@import '../../../styles/utils.scss';

	#about-content {
		#about-content-split {
			display: flex;
			gap: 1rem;
		}
		#about-image {
			flex-shrink: 0;
		}

		ul {
			list-style: square;
			padding: 0 1rem;
		}

		#bottom-actions {
			display: flex;
			justify-content: flex-end;
			margin-top: 1rem;
		}
	}
</style>
