import { CAST } from '@/data/content';

export const SITE_URL = 'https://www.spidermanbrandnewday.es';

/** Compra de entradas (Sony Pictures España). */
export const TICKETS_URL =
	'https://sonypictures.es/pelicula/spiderman-brand-new-day';

/**
 * Tráilers en YouTube (embed nocookie), uno por vídeo de la sección #videos.
 * Las claves coinciden con los `id` de `VIDEOS` en `data/content.ts`.
 */
export const TRAILERS_YOUTUBE = {
	'nuevo-trailer': { id: 'o8EccyRIwQQ', start: 0 },
	'trailer-oficial': {
		id: 'owfWVJoxXR4',
		start: 25,
		/** Fecha de publicación en YouTube. La usa el `VideoObject` del JSON-LD. */
		uploadDate: '2026-03-18',
	},
	'trailer-final': { id: '02c9Lp5EN6c', start: 0 },
} as const;

export const TRAILER_OFICIAL = TRAILERS_YOUTUBE['trailer-oficial'];

export const SEO = {
	siteName: 'Spider-Man: Brand New Day',
	movieTitle: 'Spider-Man: Brand New Day',
	title: 'Spider-Man: Brand New Day — Exclusivamente en cines el 29 de julio',
	description:
		'Spider-Man: Brand New Day llega exclusivamente a cines el 29 de julio. Una nueva etapa para Peter Parker. Descubre el tráiler, la sinopsis y reserva tus entradas.',
	author: 'Sony Pictures',
	keywords:
		'Spider-Man, Brand New Day, Tom Holland, Zendaya, Marvel, cine, estreno, tráiler, entradas, Destin Daniel Cretton',
	image: '/images/poster-870.webp',
	imageAlt: 'Cartel oficial de Spider-Man: Brand New Day',
	imageWidth: 870,
	imageHeight: 1088,
	releaseDateISO: '2026-07-29',
	director: 'Destin Daniel Cretton',
	actors: CAST.map((actor) => actor.name),
} as const;

export interface Section {
	id: string;
	label: string;
}

/** Secciones de la página, en orden. El indicador del menú se apoya en esta lista. */
export const SECTIONS: Section[] = [
	{ id: 'trailer', label: 'Trailer' },
	{ id: 'estreno', label: 'Estreno' },
	{ id: 'sinopsis', label: 'Sinopsis' },
	{ id: 'videos', label: 'Videos' },
	{ id: 'galeria', label: 'Galería' },
	{ id: 'partners', label: 'Partners' },
];

/** Clases compartidas por las píldoras y los botones redondos de la UI fija; se ordena de forma manual, prettier-plugin-tailwindcss no toca constantes de string. */
export const PILL =
	'bg-neutral-dark/60 text-neutral-white backdrop-blur-md transition-colors hover:bg-neutral-dark/80';
