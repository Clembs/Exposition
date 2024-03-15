import { error } from '@sveltejs/kit';
import { randomUUID } from 'node:crypto';

export async function POST({ request, url }) {
	const body = await request.json();

	if (!body) {
		throw error(400, 'Missing body');
	}

	const { name, time, date } = body;

	const eventStart = new Date(`${date}T${time}`);
	const eventLength = 45 * 60 * 1000;
	const eventEnd = new Date(eventStart.getTime() + eventLength);

	return new Response(
		`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EQUIPE20OURIEN//EN
BEGIN:VEVENT
UID:${randomUUID()}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '')}Z
DTSTART:${eventStart
			.toISOString()
			.replace(/[-:]/g, '')
			.replace(/\.\d+Z$/, 'Z')}
DTEND:${eventEnd
			.toISOString()
			.replace(/[-:]/g, '')
			.replace(/\.\d+Z$/, 'Z')}
SUMMARY:Exposition - De la mécanique au numérique
DESCRIPTION:Votre billet pour l'exposition "De la mécanique au numérique"\\n\\nNom: ${name}\\nDate: ${date}\\nHeure: ${time} (durée approx. : 45 minutes)\\n\\nCe billet n'a aucune valeur et ne sert qu'en guise de rappel pour votre visite.
LOCATION:CRDoc, 1er étage de l'IUT Paul Sabatier (site de Rangueil)\\n\\n133 Av. de Rangueil, 31400 Toulouse
GEO:43.57047614876578;1.4645851798065272
URL: ${url.origin}

END:VEVENT
END:VCALENDAR
`,
		{
			headers: {
				'Content-Type': 'text/calendar',
				'Content-Disposition': `attachment; filename="De la mécanique au numérique - ${date}.ics"`
			}
		}
	);
}
