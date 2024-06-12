import type { Image } from '..';

export default {
	id: 'apple-ii',
	src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apple_II_at_Mus%C3%A9e_Bolo.jpg',
	alt: "L'Apple II, un des premiers ordinateurs personnels commercialisés par Apple",
	title: 'Apple II',
	description: `Stephen Wozniak développe l'Apple II en s'inspirant de son travail sur le jeu Breakout d'Atari, en y ajoutant des fonctionnalités comme la couleur, le son et les manettes. L'Apple II, lancé en 1977, est équipé de 4 Ko de RAM extensible à 48 Ko, et il devient un succès grâce à son design abordable et ses performances. Apple diversifie ensuite ses produits avec l'Apple III pour les professionnels et plusieurs versions de l'Apple II pour les particuliers, qui connaît une grande popularité jusqu'à l'arrêt de sa production en 1993.`,
	attribution: {
		author: 'Rama',
		license: 'CC BY-SA 2.0 France'
	},
	sources: [
		{
			url: 'https://www.aventure-apple.com/apple-ii/',
			title: 'Aventure Apple',
			iconUrl:
				'https://i0.wp.com/www.aventure-apple.com/wp-content/uploads/2019/06/android-chrome-384x384.png?fit=32%2C32&ssl=1'
		}
	]
} satisfies Image;
