import type { Image } from '..';

export default {
	id: 'newgrounds',
	src: '/images/internet/newgrounds.png',
	alt: "Capture d'écran de Newgrounds en 2007.",
	description: `Newgrounds, fondé en 1995, a joué un rôle pionnier dans la création de contenu en ligne avec une forte communauté d'artistes indépendants. Newgrounds s'est fait connaître grâce à la technologie Flash, permettant à des artistes de créer facilement des jeux interactifs et des animations. Newgrounds a notamment permis l'émergence de nombreux artistes et de jeux comme <i>Hollow Knight</i>, <i>Super Smash Flash</i> ou plus récemment <i>Friday Night Funkin'</i>.`,
	title: 'Newgrounds',
	sources: [
		{
			title: 'Newgrounds',
			url: 'https://www.newgrounds.com',
			iconUrl: 'https://www.newgrounds.com/favicon.ico'
		},
		{
			title: 'Wikipedia Anglais',
			url: 'https://en.wikipedia.org/wiki/Newgrounds',
			iconUrl: 'https://en.wikipedia.org/static/favicon/wikipedia.ico'
		}
	]
} satisfies Image;
