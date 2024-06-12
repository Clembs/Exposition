import type { Image } from '..';

export default {
	id: 'windows-95',
	src: 'https://guidebookgallery.org/pics/gui/desktop/firstrun/win95.png',
	alt: 'Le bureau de Windows 95 au premier démarrage',
	title: 'Windows 95',
	description: `Sorti en 1995, Windows 95 est un système d'exploitation marquant qui intègre des innovations majeures par rapport aux versions précédentes. Succès commercial, il devient rapidement le système d'exploitation le plus populaire au monde, contribuant à démocratiser l'accès à l'ordinateur personnel et à Internet. Son interface utilisateur intuitive, son intégration réussie du multitâche et sa prise en charge native du multimedia ont joué un rôle majeur dans son adoption massive.`,
	attribution: {
		author: 'GUIdebook: Graphical User Interface gallery',
		url: 'https://guidebookgallery.org/'
	},
	sources: [
		{
			url: 'https://fr.wikipedia.org/wiki/Windows_95',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		},
		{
			url: 'https://archive.org/details/win95_in_dosbox',
			title: 'Utiliser Windows 95 dans votre navigateur',
			iconUrl: 'https://archive.org/favicon.ico'
		}
	]
} satisfies Image;
