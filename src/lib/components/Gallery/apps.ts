export type AppId = (typeof apps)[number]['id'];

export const apps = [
	{
		id: 'gallery',
		name: 'Galerie',
		iconUrl: '/windows-95-icons/paint_big.png',
		thumbnailUrl: '/windows-95-icons/paint.png'
	},
	{
		id: 'about',
		name: 'À propos',
		iconUrl: '/windows-95-icons/globe.png',
		thumbnailUrl: '/windows-95-icons/about.png'
	}
] as const;
