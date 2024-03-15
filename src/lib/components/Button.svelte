<script context="module" lang="ts">
	export const styles = ['default', 'win95', 'osx', 'md1', 'gnome3', 'visionos'] as const;
	export type Styles = (typeof styles)[number];
</script>

<script lang="ts">
	export let href = '';
	export let variant: 'filled' | 'outlined' = 'filled';
	export let active: undefined | boolean = undefined;
	export let inline = true;
	export let style: Styles = 'default';
</script>

<a
	{href}
	target={href.startsWith('http') ? '_blank' : '_self'}
	class="button {variant} {style}"
	class:active
	class:inline
>
	<!-- {style} -->
	<slot />
</a>

<style lang="scss">
	.button {
		position: relative;
		display: inline-block;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		text-align: center;
		font-size: 1.125rem;
		user-select: none;
		white-space: nowrap;

		&.inline {
			width: fit-content;
		}

		&.default {
			font-family: var(--font-modern);
			padding: 0 1.25rem;
			height: 3rem;
			cursor: pointer;
			border-radius: 99px;
			transition:
				background-color 100ms,
				transform 200ms;

			&.filled {
				border: transparent;
				background-color: var(--color-shell-black);
				color: white;
			}

			&.outlined {
				background-color: transparent;
				border: 1px solid var(--color-shell-black);
				color: var(--color-shell-black);
			}
		}

		&.win95 {
			font-family: var(--font-retro);
			padding: 0.125rem 0.75rem;
			border-top: 2px solid white;
			border-left: 2px solid white;
			border-right: 2px solid #393939;
			border-bottom: 2px solid #393939;
			background-color: hsl(0, 0%, 75%);
			cursor: default;

			&:hover {
				background-color: hsl(0, 0%, 65%);
			}
			&:active,
			&.active {
				border-bottom: 2px solid white;
				border-right: 2px solid white;
				border-top: 2px solid #393939;
				border-left: 2px solid #393939;
				background-color: hsl(0, 0%, 75%);
			}
		}

		&.osx {
			font-family: var(--font-modern);
			height: 2.5rem;
			border-radius: 99px;
			padding: 0 1rem;
			backdrop-filter: blur(4px);
			text-transform: uppercase;
			cursor: default;
			text-shadow: 0 4px 4px rgb(0 0 0 / 0.25);

			box-shadow:
				inset 0 0 20px 0 rgba(0, 77, 227, 0.8),
				0 10px 16px -5px rgba(153, 237, 255, 0.55),
				0 10px 5px -10px rgba(0, 134, 232, 0.27);
			background: linear-gradient(
				180deg,
				rgba(0, 134, 232, 0.85) 0%,
				rgba(153, 237, 255, 0.85) 100%
			);

			&::before {
				position: absolute;
				content: '';
				top: 2px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 99px;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0.85) 0%,
					rgba(255, 255, 255, 0.7) 15%,
					rgba(255, 255, 255, 0) 100%
				);
				width: calc(100% - 1.5rem);
				height: 30%;
			}

			&:hover {
				background: linear-gradient(
					180deg,
					rgba(0, 134, 232, 0.95) 0%,
					rgba(153, 237, 255, 0.95) 100%
				);
			}
		}

		&.md1 {
			font-family: var(--font-modern);
			// font-size: 1rem;
			padding: 0.75rem 1rem;
			// height: 2.25rem;
			cursor: pointer;
			text-transform: uppercase;
			border-radius: 2px;
			background-color: hsl(207, 90%, 54%);
			color: white;
			box-shadow: none;
			transition:
				box-shadow 300ms,
				background-color 300ms;

			&:hover {
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
			}

			&:active {
				background-color: hsl(207, 90%, 64%);
			}
		}

		&.gnome3 {
			font-family: var(--font-modern);
			padding: 0.75rem 1.25rem;
			border-radius: 0.5rem;
			font-weight: bold;
			cursor: default;
			font-size: 1rem;
			background-color: hsl(0, 0%, 92%);
			color: black;
			transition: background-color 100ms;

			&:hover {
				background-color: hsl(0, 0%, 88%);
			}

			&:active {
				background-color: hsl(0, 0%, 76%);
			}
		}

		&.visionos {
			font-family: var(--font-modern);
			// background-color: white;
			background: rgba(94, 94, 94, 0.18);
			backdrop-filter: blur(4px);
			color: black;
			padding: 12px 20px;
			border-radius: 99px;
			cursor: url('/visionos-pointer.png'), auto;
			overflow: hidden;
			transition: scale 200ms;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				width: 100%;
				height: 100%;
				bottom: -10px;
				opacity: 0;
				transition:
					opacity 200ms,
					bottom 200ms;
				border-radius: 99px;
				background: radial-gradient(
					100% 100% at 50.54% 100%,
					rgba(255, 255, 255, 0.75) 0%,
					rgba(255, 255, 255, 0) 75%
				);
			}

			&:hover {
				scale: 1.05;

				&::before {
					opacity: 0.5;
					bottom: 0;
					transition:
						opacity 200ms,
						bottom 200ms;
				}
			}
		}
	}
</style>
