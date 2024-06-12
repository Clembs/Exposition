import type { Image } from '..';

export default {
	id: 'chad-jawed-steve',
	src: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/17675142/image/0a1f313790a054df11d6a74a78d7444c',
	alt: 'Chad Hurley, Jawed Karim et Steve Chen, les fondateurs de YouTube, en 2005.',
	description: `YouTube, lancé en 2005 par Steve Chen, Chad Hurley et Jawed Karim, a rapidement transformé le partage de vidéos en ligne. Aujourd'hui, appartenant à Google, YouTube est le 2ème site web le plus consulté au monde grâce à une énorme bibliothèque de contenu. C'est un monopole incontestable, car un projet de cette échelle avec autant de contenu est aujourd'hui irréalisable. Seul le format de vidéo courte réussit à concurrencer YouTube, notamment par le géant chinois TikTok, mais cela reste encore loin de la versatilité qu'offre YouTube.`,
	title: 'Fondateurs de YouTube',
	sources: [
		{
			title: 'Wikipédia',
			url: 'https://fr.wikipedia.org/wiki/YouTube',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		},
		{
			title: "L'histoire de YouTube - Google France",
			url: 'https://youtu.be/fPB1QkNCrnw',
			iconUrl:
				'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=32'
		},
		{
			title: 'Invidious (client alternatif à YouTube)',
			url: 'https://invidious.io/',
			iconUrl: 'https://invidious.io/favicon.ico'
		}
	]
} satisfies Image;
