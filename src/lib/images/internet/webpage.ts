import type { Image } from '..';

export default {
	id: 'webpage',
	src: '/images/internet/cern.png',
	alt: "Capture d'écran de la première page web créée par Tim Berners-Lee.",
	description: `Ce document est la première page web créée par Tim Berners-Lee en 1990. Il s'agit d'une description du projet World Wide Web, expliquant ce qu'est le Web, comment l'utiliser et comment contribuer.
  
  Le World Wide Web est un système de navigation et de consultation d'informations sur Internet, basé sur des liens hypertextes. Il a révolutionné la manière dont nous accédons à l'information et a ouvert de nouvelles possibilités de communication et de collaboration à travers le monde.`,
	title: 'World Wide Web',
	sources: [
		{
			title: 'CERN',
			url: 'https://info.cern.ch/hypertext/WWW/TheProject.html',
			iconUrl: 'https://info.cern.ch/favicon.ico'
		}
	]
} satisfies Image;
