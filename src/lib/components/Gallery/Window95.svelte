<script lang="ts">
	import { movable } from '@svelte-put/movable';
	import { createEventDispatcher } from 'svelte';

	let windowTitlebarEl: HTMLDivElement;

	export let sectionEl: HTMLElement;
	export let windowState: 'minimized' | 'maximized' | 'opened' | 'closed' = 'opened';
	export let title: string;
	export let iconPath = '';
	export let x: number;
	export let y: number;
	export let width = '400px';
	export let height = '100px';
	export let resizable = false;
	export let focused = false;

	const dispatch = createEventDispatcher();

	function focus() {
		dispatch('focus');
	}

	function toggleMaximize() {
		windowState = windowState === 'maximized' ? 'opened' : 'maximized';

		dispatch('maximize', { maximized: windowState === 'maximized' });
	}

	function toggleMinimize() {
		windowState = windowState === 'minimized' ? 'opened' : 'minimized';

		dispatch('minimize', { minimized: windowState === 'minimized' });
	}

	function close() {
		windowState = 'closed';

		dispatch('close');
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="window"
	data-state={windowState}
	style="
	--x: {x}px;
	--y: {y}px;
	--width: {width};
	--height: {height};
	--resizable: {resizable ? 'both' : 'none'};
	"
	aria-selected={focused}
	on:focus={focus}
	on:click={focus}
	use:movable={{
		enabled: windowState !== 'maximized',
		handle: windowTitlebarEl,
		limit: {
			parent: sectionEl
		},
		ignore: 'button'
	}}
>
	<div id="window-titlebar" bind:this={windowTitlebarEl} on:dblclick={toggleMaximize}>
		<div aria-label="Titre de la fenêtre" class="window-titlebar-title">
			{#if iconPath}
				<img
					loading="eager"
					width="24"
					height="24"
					class="window-titlebar-icon"
					src={iconPath}
					alt="Icône pour {title}"
				/>
			{/if}
			<span class="window-titlebar-text">
				{title}
			</span>
		</div>
		<div id="window-titlebar-controls">
			<button
				class="btn-95"
				id="minimize"
				aria-label="Minimiser la fenêtre"
				on:click={toggleMinimize}
			>
				<img
					loading="eager"
					width="15"
					height="15"
					src="/windows-95-icons/minimize.png"
					alt=""
					aria-hidden
					draggable="false"
				/>
			</button>
			{#if resizable}
				<button
					class="btn-95"
					id="toggle-maximize"
					aria-label="{windowState === 'maximized' ? 'Restaurer' : 'Maximiser'} la fenêtre"
					on:click={toggleMaximize}
				>
					<img
						loading="eager"
						width="15"
						height="15"
						src="/windows-95-icons/maximize.png"
						alt=""
						aria-hidden
						draggable="false"
					/>
				</button>
			{/if}
			<button class="btn-95" id="close" aria-label="Fermer la fenêtre" on:click={close}>
				<img
					loading="eager"
					width="15"
					height="15"
					src="/windows-95-icons/close.png"
					alt=""
					aria-hidden
					draggable="false"
				/>
			</button>
		</div>
	</div>
	<article id="window-content">
		<slot />
	</article>
</div>

<style lang="scss">
	@import '../../../styles/utils.scss';

	#window {
		@include windowBorder;
		position: absolute;
		top: var(--y);
		left: var(--x);
		padding: 0.125rem;
		resize: var(--resizable);
		overflow: auto;
		min-width: 300px;
		min-height: var(--height);

		&[aria-selected='true'] {
			z-index: 1;

			#window-titlebar {
				background-color: hsl(240, 100%, 26%);
			}
		}
		&[aria-selected='false'] {
			z-index: 0;

			#window-titlebar {
				background-color: hsl(233, 3%, 55%);
			}
		}
		&[data-state='opened'] {
			width: var(--width);
		}
		&[data-state='closed'] {
			display: none;
		}
		&[data-state='minimized'] {
			display: none;
		}
		&[data-state='maximized'] {
			top: 0 !important;
			left: 0 !important;
			width: 100% !important;
			height: 100% !important;
			resize: none;
		}

		#window-titlebar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: white;
			font-weight: bold;
			padding: 0 0.25rem;
			position: sticky;
			inset: 0;
			height: 1.75rem;
			margin: 0.25rem;
			user-select: none;

			.window-titlebar-title {
				display: flex;
				align-items: center;
				image-rendering: pixelated;
				gap: 0.125rem;

				.window-titlebar-text {
					margin-top: 3px;
				}
			}

			#window-titlebar-controls {
				display: flex;
				gap: 0.25rem;
				align-items: center;
				user-select: none;

				button {
					display: grid;
					padding: 4px 5px;

					img {
						image-rendering: pixelated;
					}
				}
			}
		}

		#window-content {
			height: calc(100% - 1.75rem);
			padding: 1rem;
			user-select: none;
		}
	}
</style>
