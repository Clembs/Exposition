import type { Image } from '..';

export default {
	id: 'carte-perforee',
	title: 'Carte perforée',
	alt: 'Carte perforée à 80 colonnes',
	description:
		"Une carte perforée est un support de données inventé au 18ème siècle, utilisé pour automatiser les processus dans les métiers à tisser, puis pour stocker et traiter des informations dans des machines et calculateurs avant l'avènement des ordinateurs modernes.",
	src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Punched_card.jpg',
	attribution: {
		author: 'Mutatis mutandis',
		license: 'CC BY 2.5'
	},
	sources: [
		{
			iconUrl:
				'https://www.cigref.fr/wp/wp-content/uploads/2017/12/logo_Cigref_rond_bleu_300px-150x150.png',
			title: 'CIGREF',
			url: 'https://www.cigref.fr/archives/histoire-cigref/blog/a-lorigine-de-linformatique-une-carte-perforee/'
		}
	]
} satisfies Image;
