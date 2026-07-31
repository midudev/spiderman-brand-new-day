# Guía de contribución

## Bienvenido a Spider-Man: Brand New Day 🕷️

¡Gracias por interesarte en contribuir! Este documento te guía paso a paso para aportar tu trabajo a la web promocional de *Spider-Man: Brand New Day*, un proyecto hecho con [Astro](https://astro.build). Queremos que el proceso sea sencillo y transparente.

### Primeros pasos 🚀

1. **Familiarízate con Astro**: si aún no lo has hecho, echa un vistazo a [la documentación oficial](https://docs.astro.build). La web es estática: componentes `.astro`, [Tailwind CSS 4](https://tailwindcss.com) y [GSAP](https://gsap.com) para las animaciones.

2. **Configura tu entorno**: usamos `pnpm` como gestor de paquetes. Si no lo tienes, instálalo con `npm install -g pnpm`.

### Cómo contribuir 🛠

#### 1. Configura tu entorno

- **Haz un fork del repositorio**: pulsa el botón "Fork" en la parte superior derecha de la página del repositorio en GitHub. Esto crea una copia del proyecto en tu cuenta.

- **Clona tu fork**: copia la URL desde el botón verde "Code" de tu fork y ejecuta `git clone <URL del fork>`.

- **Añade el repositorio original como remoto**: así podrás mantener tu fork al día. Ejecuta `git remote add upstream https://github.com/midudev/spiderman-brand-new-day.git`.

- **Asegúrate de usar la versión de Node correcta**: `nvm use` (o `nvm use <version>`). Si no usas `nvm`, instala la versión que indica el archivo [`.nvmrc`](.nvmrc).

- **Instala las dependencias**: entra en el directorio del proyecto y ejecuta `pnpm install`.

#### 2. Trabaja en tus cambios

- **Sincroniza tu fork**: desde `github.com/tu-usuario/spiderman-brand-new-day` con el botón `Sync fork`, o desde la terminal con `gh repo sync -b main` o `git switch main && git fetch upstream && git merge upstream/main`. Más información en la [documentación oficial de GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
- **Crea una rama nueva**: `git switch -c nombre-de-tu-rama`. Prefijos habituales en el repo: `feat/`, `fix/`, `docs/`.
- **Desarrolla tus cambios**: sigue las convenciones del proyecto (ver más abajo).
- **Prueba tus cambios**: `pnpm dev` levanta el servidor de desarrollo en `localhost:4321`. Antes de abrir la PR, comprueba también que `pnpm build` termina sin errores.

#### 3. Envía tus cambios

- **Haz commit**: mensajes claros siguiendo [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/), que es el formato que usa el repo (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`…).
- **Haz push a tu fork**: `git push origin nombre-de-tu-rama`.
- **Abre un Pull Request**: describe qué has cambiado y por qué. Si el cambio es visual, adjunta una captura o un vídeo corto.

### Convenciones del proyecto 📐

- **Contenido y comentarios en español**: la web y su documentación están en español; los comentarios del código también.
- **Textos y datos editoriales**: van en [`src/data/content.ts`](src/data/content.ts). URLs, SEO y las secciones del menú, en [`src/consts.ts`](src/consts.ts). No hardcodees estos valores dentro de los componentes.
- **Imports con alias**: usa `@/` en lugar de rutas relativas largas (`import { PILL } from '@/consts'`).
- **TypeScript en modo estricto**: el proyecto extiende `astro/tsconfigs/strict`; evita `any`.
- **Estilos**: Tailwind 4 con los tokens definidos en [`src/styles/global.css`](src/styles/global.css) (`@theme`). Reutiliza los tokens en vez de valores sueltos.
- **Imágenes y vídeos**: formatos `avif`/`webp` con varias resoluciones, servidos por `ResponsiveImage`. Indica siempre `width`, `height` y un `alt` descriptivo.
- **Animaciones**: los helpers de GSAP viven en [`src/lib/gsap.ts`](src/lib/gsap.ts). Anima solo `transform`, `opacity`, `clip-path` o `filter`.
- **Accesibilidad**: respeta `prefers-reduced-motion` (hay ejemplos en varios componentes), mantén el HTML semántico y las etiquetas `aria-label` de los controles.

### Buenas prácticas 🌟

- **Revisa los issues abiertos** antes de abrir una PR. Si vas a resolver uno, menciónalo con `#numero-de-la-issue` en el commit o en la descripción, y deja un comentario para que se sepa que estás en ello.
- **Revisa las PRs abiertas** para no duplicar trabajo. Siempre puedes ayudar en una PR ajena con comentarios o revisiones.
- **Mantén tus commits limpios y descriptivos**, una PR por cambio.
- **Actualiza tu rama con frecuencia** para evitar conflictos.
- **Participa en las discusiones** de tu PR si hay comentarios o sugerencias.

### ¿Necesitas ayuda? 🆘

Si tienes cualquier duda, abre un [issue](https://github.com/midudev/spiderman-brand-new-day/issues). El equipo y la comunidad estarán encantados de echarte una mano.

¡Gracias por contribuir! 🚀
