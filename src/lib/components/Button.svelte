<script lang="ts">
	export let href = '';
	export let variant: 'filled' | 'outlined' = 'filled';
	export let inline = false;
</script>

{#if href}
	<a
		{href}
		target={href.startsWith('http') ? '_blank' : '_self'}
		class="button {variant}"
		class:inline
	>
		<slot />
	</a>
{/if}

<style lang="scss">
	.button {
		display: inline-block;
		padding: 0 1.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		height: 3rem;
		border-radius: 99px;
		text-align: center;
		cursor: pointer;
		user-select: none;
		font-size: 1.125rem;
		white-space: nowrap;

		.inline {
			width: fit-content;
		}

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
</style>
