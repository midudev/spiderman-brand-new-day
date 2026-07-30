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
		transformOrigin: '50% 0%',
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
	/** Factor 0–1 de lerp por frame (a 60 fps). Por defecto 0.12; con 0, render 1:1 con el scroll. */
	smooth?: number;
};

/** Pin + tilt de salida compartido por Galería y Vídeos. */
export function createPinnedTiltSection({
	section,
	surface,
	mainDistance,
	onProgress,
	smooth = 0.12
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

	let current = 0;
	let target = 0;
	let ticking = false;

	const stopTicker = () => {
		gsap.ticker.remove(tick);
		ticking = false;
	};

	function tick() {
		const factor = 1 - Math.pow(1 - (smooth ?? 1), gsap.ticker.deltaRatio());
		current += (target - current) * factor;
		if (Math.abs(target - current) < 0.0005) {
			current = target;
			stopTicker();
		}
		render(current);
	}

	const update = (progress: number) => {
		if (!smooth) {
			render(progress);
			return;
		}
		target = progress;
		if (!ticking) {
			ticking = true;
			gsap.ticker.add(tick);
		}
	};

	ScrollTrigger.create({
		trigger: section,
		start: 'top top',
		end: () => `+=${totalDistance()}`,
		pin: section,
		anticipatePin: 1,
		invalidateOnRefresh: true,
		onRefresh: (self) => {
			// Sin lerp en refresh: evita drift al redimensionar.
			current = target = self.progress;
			if (ticking) stopTicker();
			render(self.progress);
		},
		onUpdate: (self) => update(self.progress)
	});

	render(0);
}
