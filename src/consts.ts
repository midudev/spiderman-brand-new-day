export const SITE_URL = 'https://www.spidermanbrandnewday.es';

/** Compra de entradas (Sony Pictures España). */
export const TICKETS_URL = 'https://sonypictures.es/pelicula/spiderman-brand-new-day';

/** Tráiler oficial en YouTube (embed nocookie). */
export const TRAILER_YOUTUBE = {
	id: 'owfWVJoxXR4',
	start: 25
} as const;

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
	actors: [
		'Tom Holland',
		'Zendaya',
		'Sadie Sink',
		'Jacob Batalon',
		'Jon Bernthal',
		'Tramell Tillman',
		'Michael Mando',
		'Mark Ruffalo'
	]
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
	{ id: 'partners', label: 'Partners' }
];

/** Clases compartidas por las píldoras y los botones redondos de la UI fija. */
export const PILL =
	'bg-neutral-dark/60 backdrop-blur-md text-neutral-white transition-colors hover:bg-neutral-dark/80';
