import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Fade/slide al entrar en viewport — mismo `start` en Sinopsis, Partners, etc. */
export function revealOnScroll(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars = {}
) {
  const { scrollTrigger, ...rest } = vars
  return gsap.from(targets, {
    ease: 'power2.out',
    ...rest,
    scrollTrigger: {
      start: 'top 70%',
      ...(typeof scrollTrigger === 'object' ? scrollTrigger : {})
    }
  })
}