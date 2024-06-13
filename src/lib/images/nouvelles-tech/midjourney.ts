import type { Image } from '..';

export default {
	id: 'midjourney',
	src: 'https://cdn.midjourney.com/4655a3b1-c611-4a26-be6a-74826b82887c/0_0.jpeg',
	alt: 'Une des images pouvant être générée avec Midjourney',
	title: 'Midjourney',
	description: `Non, cette image n'a pas rien à faire dans cette exposition. En effet, elle a été générée artificiellement par Midjourney, une intelligence artificielle permettant de créer des images à partir de descriptions textuelles. Utilisé par divers médias, cette IA a suscité des controverses, notamment lorsqu'une œuvre générée avec a gagné un concours de beaux-arts en 2022. Midjourney utilise des millions d'images d'auteurs non-crédités sans leur accord pour pouvoir générer de nouvelles images. Enfin, la diffusion de fausses photos d'actualité créées avec Midjourney a exacerbé les inquiétudes concernant la manipulation de l'opinion publique, et le besoin urgent de régulation sur l'IA.`,
	attribution: {
		author: 'vassil7478 (Générée avec Midjourney)',
		url: 'https://www.midjourney.com/jobs/82ea666f-7528-461c-b9cc-94de565ce3cc?index=0'
	},
	sources: [
		{
			url: 'https://fr.wikipedia.org/wiki/Midjourney',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		},
		{
			url: 'https://docs.midjourney.com/docs/quick-start',
			title: 'Documentation de Midjourney (site en anglais)',
			iconUrl: 'https://www.midjourney.com/favicon.ico'
		}
	]
} satisfies Image;
