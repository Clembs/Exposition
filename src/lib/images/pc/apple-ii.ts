import type { Image } from '..';

export default {
	id: 'apple-ii',
	src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apple_II_at_Mus%C3%A9e_Bolo.jpg',
	alt: "L'Apple II, un des premiers ordinateurs personnels commercialisés par Apple",
	title: 'Apple II',
	description: `L'Apple II est un des premiers ordinateurs personnels à avoir rencontré un succès commercial, lancé par Apple en 1977. Il est apprécié pour sa convivialité et ses capacités graphiques, ouvrant la voie à l'informatique grand public.`,
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
