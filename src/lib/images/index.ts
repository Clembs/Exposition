export type Image = {
	id: string;
	src: string;
	alt: string;
	title: string;
	description: string;
	attribution?: {
		author: string;
		url?: string;
		license: string;
	};
	sources: {
		title: string;
		url: string;
		iconUrl: string;
	}[];
};
