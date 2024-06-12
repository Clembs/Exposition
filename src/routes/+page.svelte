<script lang="ts">
	import Hero from './Hero.svelte';
	import Presentation from './Presentation.svelte';
	import InfosPratiques from './InfosPratiques.svelte';
	import Gallery from './Gallery.svelte';

	export let name: string;
</script>

<svelte:head>
	<title>De la mécanique au numérique - Accueil</title>
</svelte:head>

<main>
	<Hero />
	<Presentation />
	<InfosPratiques />
	<Gallery {name} />
	<!-- <FindUs /> -->
	<!-- <Billetterie bind:name /> -->
</main>
