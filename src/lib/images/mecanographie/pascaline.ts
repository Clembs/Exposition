import type { Image } from '..';

export default {
	id: 'pascaline',
	src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Arts_et_Metiers_Pascaline_dsc03869.jpg',
	alt: 'La Pascaline, une calculatrice mécanique inventée par Blaise Pascal',
	title: 'Pascaline',
	description: `La Pascaline, inventée par Blaise Pascal en 1642, est l'une des premières calculatrices mécaniques. Conçue pour simplifier les calculs fiscaux, elle pouvait effectuer des additions et des soustractions, marquant une avancée significative dans le développement des outils de calcul.`,
	attribution: {
		author: 'David Monniaux',
		license: 'CC BY-SA 3.0'
	},
	sources: [
		{
			url: 'https://enseignants.lumni.fr/fiche-media/00000005461/la-pascaline-la-machine-a-calculer-inventee-par-blaisepascal.html',
			title: "Lumni. Vidéo de l'INA",
			iconUrl: 'https://enseignants.lumni.fr/assets/favicon_lumni/favicon.ico'
		}
	]
} satisfies Image;
