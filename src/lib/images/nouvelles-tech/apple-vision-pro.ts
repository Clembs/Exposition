import type { Image } from '..';

export default {
	id: 'apple-vision-pro',
	src: 'https://www.01net.com/app/uploads/2023/06/vision-pro-1.jpg',
	alt: 'Un homme portant le casque Apple Vision Pro, avec une interface de réalité augmentée affichée devant lui',
	title: 'Apple Vision Pro',
	description: `L'Apple Vision Pro, sorti en février 2024 en Amérique du Nord, est un casque de réalité mixte qui a fait sensation par ses capacités techniques avancées et son design épuré. Il est victime de nombreuses critiques, notamment concernant son prix élevé de 3500 dollars, son manque de contenu et d'applications disponibles et son ergonomie non-idéale pour une utilisation prolongée.`,
	sources: [
		{
			url: 'https://www.lesnumeriques.com/casque-realite-virtuelle/apple-vision-pro-p73655/test.html',
			title: 'Test du casque des Numériques',
			iconUrl: 'https://www.lesnumeriques.com/favicon.ico'
		},
		{
			url: 'https://www.apple.com/fr/vision-pro/',
			title: 'Apple',
			iconUrl: 'https://www.apple.com/favicon.ico'
		},
		{
			url: 'https://youtu.be/c1tZ22ThbrE',
			title: 'Vidéo critique de Léo Duff',
			iconUrl:
				'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=32'
		}
	]
} satisfies Image;
