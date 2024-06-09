import type { IntersectDetail } from '@svelte-put/intersect';
import { currentSection, currentYear, sections } from './sections';

export function changeYear(
	e: CustomEvent<IntersectDetail>,
	{ year, previousYear }: { year: number; previousYear: number }
) {
	const entry = e.detail.entries[0];

	if (entry.isIntersecting) {
		currentYear.set(year);
	} else {
		console.log('h');
		currentYear.set(previousYear);
	}
}

export function changePeriod(e: CustomEvent<IntersectDetail>, index: undefined): void;
export function changePeriod(e: CustomEvent<IntersectDetail>, index: number, year: number): void;
export function changePeriod(
	e: CustomEvent<IntersectDetail>,
	index: number | undefined,
	year?: number
) {
	const entry = e.detail.entries[0];
	console.log(entry.target);

	if (entry.isIntersecting) {
		if (index === undefined) {
			currentSection.set(undefined);
			currentYear.set(new Date().getFullYear());
		} else {
			currentSection.set(sections[index]);
			currentYear.set(year!);
		}
	}
}
