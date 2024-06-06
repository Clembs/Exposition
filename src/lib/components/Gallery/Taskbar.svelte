<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type AppId } from './apps';

	export let focusedWindow: AppId | null = 'gallery';

	const dispatch = createEventDispatcher();

	export let galleryWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';
	export let aboutWindowState: 'minimized' | 'maximized' | 'opened' | 'closed';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="taskbar" on:click={() => (focusedWindow = null)} on:focus={() => (focusedWindow = null)}>
	<button class="btn-95 taskbar-item" id="start">
		<img
			loading="eager"
			width="24"
			height="24"
			src="/windows-95-icons/windows-logo.png"
			alt="Icône pour Démarrer"
		/>
		<span class="taskbar-item-text"> Démarrer </span>
	</button>
	{#if galleryWindowState !== 'closed'}
		<button
			class="btn-95 taskbar-item"
			data-active={galleryWindowState === 'opened' && focusedWindow === 'gallery'}
			on:click|stopPropagation={() => dispatch('windowfocus', 'gallery')}
		>
			<img
				loading="eager"
				width="24"
				height="24"
				src="/windows-95-icons/paint.png"
				alt="Icône pour Galerie"
			/>
			<span class="taskbar-item-text"> Galerie </span>
		</button>
	{/if}
	{#if aboutWindowState !== 'closed'}
		<button
			class="btn-95 taskbar-item"
			data-active={aboutWindowState === 'opened' && focusedWindow === 'about'}
			on:click|stopPropagation={() => dispatch('windowfocus', 'about')}
		>
			<img
				loading="eager"
				width="24"
				height="24"
				src="/windows-95-icons/about-windows.png"
				alt="Icône pour À propos"
			/>
			<span class="taskbar-item-text"> À propos </span>
		</button>
	{/if}
</div>

<style lang="scss">
	@import '../../../styles/utils.scss';

	#taskbar {
		@include windowBorder;
		margin-top: auto;
		z-index: 2;
		padding: 0.375rem;

		.taskbar-item {
			text-align: left;
			padding: 0.25rem 0.5rem;
			display: inline-flex;
			align-items: center;
			gap: 0.25rem;

			&-text {
				margin-top: 2px;
				font-size: 1.1rem;
			}

			&#start,
			&[data-active='true'] {
				font-weight: bold;
			}

			&[data-active='true'] {
				background-image: linear-gradient(
						45deg,
						#fff 25%,
						transparent 25%,
						transparent 75%,
						#fff 75%,
						#fff
					),
					linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
				background-size: 6px 6px;
				background-position:
					0 0,
					3px 3px;
				background-repeat: repeat;
			}

			&:not(#start) {
				width: 200px;
			}
		}
	}
</style>
