import { gsap } from '@/lib/gsap';

/**
 * Cascada solapada de tarjetas: la animación que comparten Vídeos y Galería en
 * móvil vertical.
 *
 * Las tarjetas caen una a una desde abajo y todas se quedan a la vista, cada
 * una tapando el 40% inferior de la anterior. Fuera de móvil cada sección se
 * queda con lo suyo (el mazo en Vídeos, el abanico en Galería): esto cubre sólo
 * el tramo de la cascada.
 *
 * Vive aquí y no en cada sección porque las dos tienen que moverse igual: con
 * el código duplicado, tocar una dejaba a la otra atrás.
 */

/** Alto de tarjeta que baja cada peldaño; 0.6 deja un 40% de solape. */
const STEP = 0.6;
/**
 * Desplazamiento lateral alterno, en anchos de tarjeta. Es lo único que cada
 * sección puede afinar: en el Figma las tarjetas de Galería van casi centradas
 * y las de Vídeos escalonan más. Todo lo demás —solape, inclinación, entrada y
 * curva— es común y no se toca desde fuera, que es el sentido de este módulo.
 */
const DEFAULT_SHIFT = 0.05;
/** Inclinación alterna, en grados. */
const TILT = 2;
/** Pantallas de scroll que dura la llegada de cada tarjeta. */
const PER_CARD = 0.85;

/**
 * En móvil y en vertical se hace cascada. La consulta se crea una vez y se lee
 * `.matches`, que es vivo: se consulta varias veces por frame y sigue al girar
 * el dispositivo sin volver a montar nada. ScrollTrigger recalcula su distancia
 * en el refresh del resize, así que el cambio de modo no necesita más aviso.
 */
export const cascadeQuery = window.matchMedia(
	'(max-width: 767px) and (orientation: portrait)'
);

/** Distancia de scroll (px) que ocupa la cascada entera. */
export const cascadeDistance = (count: number) =>
	Math.max(1, (count - 1) * window.innerHeight * PER_CARD);

export type Arrival = {
	/** Índice de la última tarjeta que ya ha llegado del todo. */
	settled: number;
	/** Progreso 0–1 dentro del tramo de la que está llegando. */
	frac: number;
	/** Índice de la tarjeta que corona el grupo, la que manda en el encuadre. */
	top: number;
};

/** Reparte el progreso del pin entre las tarjetas. */
export const arrivalAt = (progress: number, count: number): Arrival => {
	const arriving = progress * (count - 1);
	const settled = Math.floor(arriving);
	const frac = arriving - settled;

	return {
		settled,
		frac,
		top: Math.min(count - 1, settled + (frac > 0 ? 1 : 0))
	};
};

/* El tramo de cada tarjeta se recorre con una curva suave en vez de a ritmo
   plano, para que aterrice en su sitio. `power1.out` y no algo de grado mayor:
   aplana poco al final, así no parece que se detenga antes de que termine su
   tramo de scroll. */
const settle = gsap.parseEase('power1.out');

/* El grupo va centrado en los dos ejes contra el punto medio de las que ya han
   llegado. En vertical eso es `top / 2`; en horizontal hay que restar además la
   media de los signos alternos, que sólo vale cero cuando son pares: sin esta
   corrección una sola tarjeta nace desplazada un `SHIFT` entero y con tres el
   conjunto se escora. */
const shiftMean = (top: number) => {
	const arrived = top + 1;
	return arrived % 2 === 0 ? 0 : -1 / arrived;
};

/* `offsetWidth/Height` y no `getBoundingClientRect`: las tarjetas ya llevan
   transform encima y hacen falta las medidas de maquetación, no las pintadas.
   Se leen en cada frame porque el pin sobrevive al resize. */
const poseAt = (
	reference: HTMLElement,
	index: number,
	top: number,
	shift: number
) => {
	const sign = index % 2 === 0 ? -1 : 1;

	return {
		x: (sign - shiftMean(top)) * shift * reference.offsetWidth,
		y: (index - top / 2) * STEP * reference.offsetHeight,
		rotate: sign * TILT,
		scale: 1,
		autoAlpha: 1
	};
};

/** Pose de la que aún no ha entrado: abajo, algo encogida y transparente. */
const incomingPose = () => ({
	x: 0,
	y: Math.min(420, window.innerHeight * 0.45),
	rotate: 0,
	scale: 0.96,
	autoAlpha: 0
});

type CascadeRender = {
	cards: HTMLElement[];
	arrival: Arrival;
	/** Selector del distintivo que cada tarjeta muestra al llegar (play, «+»…). */
	badge: string;
	/**
	 * Props extra por tarjeta. Las secciones lo usan para lo suyo: deshacer lo
	 * que dejó su otra animación al cruzar el breakpoint (la cascada no toca esas
	 * propiedades y se quedarían pegadas) y, en Galería, el corte diagonal.
	 */
	extra?: (index: number) => gsap.TweenVars;
	/** Cuánto escalona en lateral. Por defecto, lo de Vídeos. */
	shift?: number;
};

export function renderCascade({
	cards,
	arrival,
	badge,
	extra,
	shift = DEFAULT_SHIFT
}: CascadeRender) {
	const { settled, frac, top } = arrival;
	const reference = cards[0];
	// Mismo valor suavizado para todas: las que ya están y la que entra se
	// recolocan en bloque, así el grupo no se descuadra a mitad del tramo.
	const eased = settle(frac);

	cards.forEach((card, index) => {
		const mark = card.querySelector<HTMLElement>(badge);
		const own = extra?.(index);
		const arrived = index <= settled;

		if (!arrived && index !== settled + 1) {
			gsap.set(card, { ...own, ...incomingPose(), zIndex: index + 1 });
			if (mark) gsap.set(mark, { autoAlpha: 0 });
			return;
		}

		const from = arrived
			? poseAt(reference, index, settled, shift)
			: incomingPose();
		const to = poseAt(reference, index, arrived ? top : index, shift);

		gsap.set(card, {
			...own,
			x: gsap.utils.interpolate(from.x, to.x, eased),
			y: gsap.utils.interpolate(from.y, to.y, eased),
			rotate: gsap.utils.interpolate(from.rotate, to.rotate, eased),
			scale: gsap.utils.interpolate(from.scale, to.scale, eased),
			autoAlpha: gsap.utils.interpolate(from.autoAlpha, to.autoAlpha, eased),
			zIndex: index + 1
		});

		// Todas las tarjetas quedan a la vista, así que cada una conserva el suyo.
		if (mark) gsap.set(mark, { autoAlpha: arrived || frac > 0.55 ? 1 : 0 });
	});
}
