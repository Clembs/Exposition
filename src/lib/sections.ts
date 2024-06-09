import { writable } from 'svelte/store';

export type Section = {
	id: string;
	title: string;
	style: {
		backgroundColor: string;
		color: string;
		font: 'modern' | 'old-school' | 'retro';
	};
};

export const sections: Section[] = [
	{
		id: 'mecanographie',
		title: 'Mécanographie',
		style: {
			backgroundColor: '#f5f5f5',
			color: '#333',
			font: 'old-school'
		}
	},

	{
		id: 'ordinateurs-personnels',
		title: 'Ordinateurs personnels',
		style: {
			backgroundColor: '#333',
			color: '#f5f5f5',
			font: 'modern'
		}
	}
];

export const currentSection = writable<Section | undefined>();

export const currentYear = writable<number>(new Date().getFullYear());
