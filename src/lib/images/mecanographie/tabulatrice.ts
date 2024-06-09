import type { Image } from '..';

export default {
	id: 'tabulatrice',
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IBM_401_in_1948_%281%29.jpg/2560px-IBM_401_in_1948_%281%29.jpg',
	alt: 'Tabulatrice IBM 401 à cartes perforées',
	title: 'Tabulatrice',
	description: `
La tabulatrice, aussi appelée tabulateur, est l'appareil central d'un atelier de mécanographie. Lisant les cartes perforées venant en général de l'atelier de saisie (perfo/vérif), il en traitait le contenu en suivant un programme matérialisé par un tableau de connexion. Ce programme spécifiait les calculs à effectuer et la disposition des résultats sur l'imprimante de sortie. La tabulatrice pouvait également donner des ordres à une perforatrice de carte connectée en sortie pour produire des cartes récapitulatives utilisées dans de nouveaux traitements.

La lecture des cartes dans la tabulatrice était effectuée ligne par ligne. Les opérations de lecture d'une carte et d'impression d'une ligne étaient effectuées cent-cinquante fois par minute.`,
	attribution: {
		author: 'IISG',
		license: 'CC BY-SA 2.0',
		url: 'https://www.flickr.com/photos/iisg/4092591986/'
	},
	sources: [
		{
			url: 'https://fr.wikipedia.org/wiki/Tabulatrice',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		}
	]
} satisfies Image;
