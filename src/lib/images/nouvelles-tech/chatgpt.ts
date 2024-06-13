import type { Image } from '..';

export default {
	id: 'chatgpt',
	src: '/images/nouvelles-tech/chatgpt.png',
	alt: "L'interface de ChatGPT",
	title: 'ChatGPT',
	description: `ChatGPT, un assistant conversationnel lancé fin 2022, a gagné en popularité pour ses conversations réalistes, sa fluidité et ses applications dans une multitude de domaines. Il remplace pour beaucoup les moteurs de recherche traditionnels et est devenu incontournable. Malgré cela, une IA générative peut halluciner, c'est-à-dire générer des informations de toutes pièces. Le modèle de ChatGPT est également privé, et nous ne connaissons pas ses sources d'information. Le fait que cette IA récupère des milliards de données de plus petits sites pose aussi un problème sur leur visibilité, si ces IA génératives venaient à complètement remplacer les moteurs de recherche.`,
	sources: [
		{
			url: 'https://fr.wikipedia.org/wiki/ChatGPT',
			title: 'Wikipédia',
			iconUrl: 'https://fr.wikipedia.org/static/favicon/wikipedia.ico'
		},
		{
			url: 'https://openai.com/chatgpt/',
			title: 'OpenAI',
			iconUrl: 'https://openai.com/favicon.ico'
		}
	]
} satisfies Image;
