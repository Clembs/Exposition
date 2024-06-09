import type { Image } from '..';

export default {
	id: 'trs-80',
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Radioshack_TRS80-IMG_7206.jpg/2880px-Radioshack_TRS80-IMG_7206.jpg',
	alt: 'Un ordinateur TRS-80 de RadioShack, un des premiers ordinateurs personnels commercialisés',
	title: 'TRS-80',
	description: `Le TRS-80 de Tandy, introduit en 1977, a été l'un des premiers micro-ordinateurs disponibles en grande distribution, démocratisant l'accès à l'informatique personnelle. Son prix abordable et sa simplicité d'utilisation ont fait de lui un choix populaire parmi les amateurs et les petites entreprises.`,
	attribution: {
		author: 'Rama',
		license: 'CC BY-SA 2.0 France'
	},
	sources: [
		{
			url: 'https://en.wikipedia.org/wiki/TRS-80',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		}
	]
} satisfies Image;
