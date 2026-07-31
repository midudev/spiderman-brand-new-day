import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

/** Rectángulo a sangre. */
export const FLAT = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

/** Trapecio con el borde superior más estrecho (entrada desde abajo). */
export const TRAP_TOP = 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)';

/** Trapecio con el borde inferior más estrecho (salida por arriba). */
export const TRAP_BOTTOM = 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)';

export const PERSPECTIVE = 1400;
export const ANGLE_IN = 16;
export const ANGLE_OUT = 14;
/** Fracción de viewport usada al final del pin para el tilt de salida. */
export const EXIT_SCROLL = 0.3;

function flat(el: Element) {
	gsap.set(el, { clipPath: FLAT, rotateX: 0, clearProps: 'transform' });
}

/** Entrada trapecio → plano al pinnear (Galería, Vídeos). */
export function tiltSurfaceIn(section: Element, surface: Element) {
	gsap.fromTo(
		surface,
		{
			clipPath: TRAP_TOP,
			rotateX: ANGLE_IN,
			transformOrigin: '50% 0%',
			transformPerspective: PERSPECTIVE
		},
		{
			clipPath: FLAT,
			rotateX: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top bottom',
				end: 'top top',
				scrub: true,
				invalidateOnRefresh: true
			}
		}
	);
}

/** Solo entrada (última sección / Partners). */
export function tiltTrapezoidIn(target: string) {
	const el = document.querySelector(target);
	if (!el) return;

	if (prefersReducedMotion()) {
		flat(el);
		return;
	}

	gsap.set(el, {
		transformOrigin: '100% 0%',
		clipPath: TRAP_TOP,
		rotateX: ANGLE_IN,
		transformPerspective: PERSPECTIVE
	});

	gsap.to(el, {
		clipPath: FLAT,
		rotateX: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			end: 'top 30%',
			scrub: true,
			invalidateOnRefresh: true
		}
	});
}

type PinnedTiltOptions = {
	section: HTMLElement;
	surface: HTMLElement;
	/** Distancia de scroll (px) de la animación principal, sin la salida. */
	mainDistance: () => number;
	/** Progress 0–1 de la animación principal (carrusel / mazo). */
	onProgress: (progress: number) => void;
};

/** Pin + tilt de salida compartido por Galería y Vídeos. */
export function createPinnedTiltSection({
	section,
	surface,
	mainDistance,
	onProgress
}: PinnedTiltOptions) {
	const exitDistance = () => window.innerHeight * EXIT_SCROLL;
	const totalDistance = () => mainDistance() + exitDistance();

	const render = (progress: number) => {
		const scroll = progress * totalDistance();
		const mainProgress = gsap.utils.clamp(0, 1, scroll / mainDistance());
		const exitProgress = gsap.utils.clamp(
			0,
			1,
			(scroll - mainDistance()) / exitDistance()
		);

		onProgress(mainProgress);
		gsap.set(surface, {
			clipPath: gsap.utils.interpolate(FLAT, TRAP_BOTTOM, exitProgress),
			rotateX: -ANGLE_OUT * exitProgress,
			transformOrigin: '50% 100%',
			transformPerspective: PERSPECTIVE
		});
	};

	tiltSurfaceIn(section, surface);

	ScrollTrigger.create({
		trigger: section,
		start: 'top top',
		end: () => `+=${totalDistance()}`,
		pin: section,
		anticipatePin: 1,
		invalidateOnRefresh: true,
		onRefresh: (self) => render(self.progress),
		onUpdate: (self) => render(self.progress)
	});

	render(0);
}
