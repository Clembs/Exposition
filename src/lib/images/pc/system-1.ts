import type { Image } from '..';

export default {
	id: 'system-1',
	src: 'https://vignette.wikia.nocookie.net/ipod/images/9/95/System1.jpg/revision/latest?cb=20100819233845',
	alt: 'Le bureau de Système 1, avec deux fenêtres ouvertes',
	title: 'Système 1 (Mac OS)',
	description: `Système 1, sorti en 1984, était le premier système d'exploitation graphique pour ordinateur personnel d'Apple pour accompagner le <a class="link" href="https://apple.fandom.com/wiki/Macintosh_128K" target="_blank" rel="noopener">Macintosh</a>. Il se distinguait par son interface utilisateur intuitive, basée sur des métaphores visuelles comme les icônes et les menus déroulants, qui a révolutionné l'interaction homme-machine. Bien que techniquement limité par rapport aux systèmes ultérieurs, Système 1 a posé les bases du succès de Mac OS et a largement influencé le développement des interfaces graphiques modernes.`,
	sources: [
		{
			url: 'https://fr.wikipedia.org/wiki/Syst%C3%A8me_1',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		},
		{
			url: 'https://youtu.be/iwfoOlvo9_g',
			title: 'Démonstration de Système 1 (vidéo en anglais)',
			iconUrl:
				'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=32'
		}
	]
} satisfies Image;
