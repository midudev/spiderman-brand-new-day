import { CAST } from "@/data/content";

export const SITE_URL = "https://www.spidermanbrandnewday.es";

/** Compra de entradas (Sony Pictures España). */
export const TICKETS_URL =
  "https://sonypictures.es/pelicula/spiderman-brand-new-day";

/** Tráiler oficial en YouTube (embed nocookie). */
export const TRAILER_YOUTUBE = {
  id: "owfWVJoxXR4",
  start: 25,
  /** Fecha de publicación en YouTube. La usa el `VideoObject` del JSON-LD. */
  uploadDate: "2026-03-18",
} as const;

export const SEO = {
  siteName: "Spider-Man: Brand New Day",
  movieTitle: "Spider-Man: Brand New Day",
  title: "Spider-Man: Brand New Day — Exclusivamente en cines el 29 de julio",
  description:
    "Spider-Man: Brand New Day llega exclusivamente a cines el 29 de julio. Una nueva etapa para Peter Parker. Descubre el tráiler, la sinopsis y reserva tus entradas.",
  author: "Sony Pictures",
  keywords:
    "Spider-Man, Brand New Day, Tom Holland, Zendaya, Marvel, cine, estreno, tráiler, entradas, Destin Daniel Cretton",
  image: "/images/poster-870.webp",
  imageAlt: "Cartel oficial de Spider-Man: Brand New Day",
  imageWidth: 870,
  imageHeight: 1088,
  releaseDateISO: "2026-07-29",
  director: "Destin Daniel Cretton",
  actors: CAST.map((actor) => actor.name),
} as const;

export interface Section {
  id: string;
  label: string;
}

/** Secciones de la página, en orden. El indicador del menú se apoya en esta lista. */
export const SECTIONS: Section[] = [
  { id: "trailer", label: "Trailer" },
  { id: "estreno", label: "Estreno" },
  { id: "sinopsis", label: "Sinopsis" },
  { id: "videos", label: "Videos" },
  { id: "galeria", label: "Galería" },
  { id: "partners", label: "Partners" },
];
