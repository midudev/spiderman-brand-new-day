export const VIDEOS = [
	{
		id: 'nuevo-trailer',
		title: 'Nuevo Tráiler',
		base: 'galeria-ninjas-01',
		alt: 'Fotograma del nuevo tráiler de Spider-Man: Brand New Day'
	},
	{
		id: 'trailer-oficial',
		title: 'Tráiler Oficial',
		base: 'galeria-reflection',
		alt: 'Fotograma del tráiler oficial de Spider-Man: Brand New Day'
	},
	{
		id: 'trailer-final',
		title: 'Tráiler Final',
		base: 'galeria-ninjas-02',
		alt: 'Fotograma del tráiler final de Spider-Man: Brand New Day'
	}
] as const;

export const GALLERY_IMAGES = [
	{
		id: 'ninjas-01',
		base: 'galeria-ninjas-01',
		alt: 'Spider-Man salta sobre un grupo de ninjas vestidos de rojo en los tejados de Nueva York'
	},
	{
		id: 'reflection',
		base: 'galeria-reflection',
		alt: 'Primer plano de la máscara de Spider-Man con el skyline de Nueva York reflejado en sus ojos'
	},
	{
		id: 'ninjas-02',
		base: 'galeria-ninjas-02',
		alt: 'Spider-Man se lanza entre rascacielos al atardecer con el título Brand New Day'
	}
] as const;

export const SINOPSIS = `Tras el gran éxito global de Spider-Man: No Way Home, Spider-Man: Brand New Day marca una etapa completamente nueva para Peter Parker y Spider-Man. Han pasado cuatro años desde los acontecimientos de No Way Home, y Peter Parker ahora es un adulto que vive completamente solo, ha desaparecido voluntariamente de las vidas y recuerdos de quienes ama. Combatiendo el crimen en una Nueva York que ya no conoce su nombre, se ha dedicado por completo a proteger su ciudad—un Spider-Man a tiempo completo—, pero a medida que aumentan las exigencias sobre él, la presión desencadena una sorprendente evolución física que amenaza su existencia, al mismo tiempo que un extraño nuevo patrón de crímenes da lugar a una de las amenazas más poderosas a las que se ha enfrentado.`;

export const FICHA = [
	{ titulo: 'Directed by', valor: 'Destin Daniel Cretton' },
	{ titulo: 'Written by', valor: 'Destin Daniel Cretton' }
] as const;

/**
 * Reparto y equipo técnico. Los datos son estáticos y las fotos están servidas
 * desde `src/assets/images/reparto/` (`slug`.jpg + `slug`.webp), sin llamadas a la API.
 */
export const CAST = [
	{ name: 'Tom Holland', role: 'Peter Parker / Spider-Man', slug: 'tom-holland' },
	{ name: 'Zendaya', role: 'MJ', slug: 'zendaya' },
	{ name: 'Mark Ruffalo', role: 'Bruce Banner / Hulk', slug: 'mark-ruffalo' },
	{ name: 'Jon Bernthal', role: 'Frank Castle / Punisher', slug: 'jon-bernthal' },
	{ name: 'Jacob Batalon', role: 'Ned Leeds', slug: 'jacob-batalon' },
	{ name: 'Sadie Sink', role: 'Jean Grey', slug: 'sadie-sink' },
	{ name: 'Florence Pugh', role: 'Yelena Belova / Black Widow', slug: 'florence-pugh' },
	{ name: 'Liza Colón-Zayas', role: 'Detective Jean DeWolff', slug: 'liza-colon-zayas' },
	{ name: 'Tramell Tillman', role: "William 'Bill' Metzger", slug: 'tramell-tillman' },
	{ name: 'Marisa Tomei', role: 'May Parker', slug: 'marisa-tomei' },
	{ name: 'Naomi Watts', role: 'E.V. (voz)', slug: 'naomi-watts' },
	{ name: 'Michael Mando', role: 'Mac Gargan / Scorpion', slug: 'michael-mando' }
] as const;

export const CREW = [
	{ name: 'Destin Daniel Cretton', role: 'Director', slug: 'destin-daniel-cretton' },
	{ name: 'Erik Sommers', role: 'Guionista', slug: 'erik-sommers' },
	{ name: 'Chris McKenna', role: 'Guionista', slug: 'chris-mckenna' },
	{ name: 'Kevin Feige', role: 'Productor', slug: 'kevin-feige' },
	{ name: 'Amy Pascal', role: 'Productora', slug: 'amy-pascal' },
	{ name: 'Avi Arad', role: 'Productor', slug: 'avi-arad' },
	{ name: 'Brett Pawlak', role: 'Director de fotografía', slug: 'brett-pawlak' },
	{ name: 'Michael Giacchino', role: 'Compositor', slug: 'michael-giacchino' },
	{ name: 'Nat Sanders', role: 'Montador', slug: 'nat-sanders' },
	{ name: 'Charles Wood', role: 'Diseño de producción', slug: 'charles-wood' },
	{ name: 'Sanja Milkovic Hays', role: 'Diseño de vestuario', slug: 'sanja-milkovic-hays' },
	{ name: 'Jerome Chen', role: 'Supervisor de efectos visuales', slug: 'jerome-chen' }
] as const;
