<script lang="ts">
	import Billetterie from './Billetterie/Billetterie.svelte';
	import Hero from './Hero.svelte';
	import Presentation from './Presentation.svelte';
	import InfosPratiques from './InfosPratiques.svelte';
	import FindUs from './FindUs.svelte';
	import Gallery from './Gallery.svelte';

	export let name: string;
</script>

<main>
	<Hero />
	<Presentation />
	<InfosPratiques />
	<Gallery {name} />
	<FindUs />
	<Billetterie bind:name />
</main>
