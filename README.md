<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<a href="https://www.spidermanbrandnewday.es/" target="_blank" rel="noopener noreferrer">
  <img width="300px" src="./public/images/logo-600.webp" alt="Logo de Spider-Man: Brand New Day" />
</a>

## Web promocional de Spider-Man: Brand New Day

*Spider-Man: Brand New Day* llega exclusivamente a cines el 29 de julio. Esta es su web promocional: tráiler, sinopsis, vídeos y galería. [Reportar error](https://github.com/midudev/spiderman-brand-new-day/issues) · [Sugerir algo](https://github.com/midudev/spiderman-brand-new-day/issues)

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Web promocional de Spider-Man: Brand New Day](#web-promocional-de-spider-man-brand-new-day)
- [Características principales](#características-principales)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
  - [Comandos](#comandos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribuir al proyecto](#contribuir-al-proyecto)
  - [Contribuir desde Stackblitz](#contribuir-desde-stackblitz)
- [🛠️ Stack](#️-stack)

</details>

## Características principales

- **Tráiler oficial**: reproducción del tráiler en un modal, sin salir de la página.
- **Sinopsis y reparto**: la nueva etapa de Peter Parker, dirigida por Destin Daniel Cretton.
- **Vídeos y galería**: clips y fotogramas de la película con animaciones de scroll (GSAP).
- **Compra de entradas**: enlace directo a la venta de entradas de [Sony Pictures España](https://sonypictures.es/pelicula/spiderman-brand-new-day).
- **Redes sociales**: perfiles oficiales de la película en Instagram, X y Facebook.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar la versión de Node) — ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

  <details>
  <summary>Pequeño script de automatización</summary>

  - En Linux/MacOS:

    ```sh
    # .bashrc | .zshrc | cualquier archivo de configuración
    # pequeño script para cambiar de versión al entrar al directorio
    cd() {
      builtin cd "$@"
      if [[ -f .nvmrc ]]; then
        nvm use > /dev/null
        # Si quieres que te diga la versión
        nvm use
      fi
    }
    ```

  - En Windows:

    ```powershell
    # $PROFILE
    function Change-Node-Version {
      param($path)
      & Set-Location $path
      $pwd = pwd
      if ( Test-Path "$pwd\.nvmrc" ) {
        $version = Get-Content .nvmrc
        nvm use $version
      }
    }
    New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
    ```

  </details>

- PNPM (el gestor de paquetes del proyecto)

  ```sh
  npm install -g pnpm
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/midudev/spiderman-brand-new-day.git
   ```

2. Instala las dependencias

   ```sh
   pnpm install
   ```

3. Arranca el servidor de desarrollo en `localhost:4321`

   ```sh
   pnpm dev
   ```

### Comandos

| Comando | Acción |
| :------ | :----- |
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente |
| `pnpm deploy` | Build y despliegue en Cloudflare Workers |

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Estructura del proyecto

```text
/
├── public/            # Fuentes, imágenes (avif/webp), vídeos y favicon
├── src/
│   ├── assets/icons/  # Iconos SVG
│   ├── components/    # Hero, Sinopsis, Videos, Galería, UI fija…
│   ├── data/          # Contenido editorial
│   ├── layouts/       # Layout base y SEO
│   ├── lib/           # Helpers (DOM, GSAP, tilt, loading)
│   ├── pages/         # Rutas
│   ├── styles/        # Estilos globales
│   └── consts.ts      # URLs, SEO y secciones del menú
└── astro.config.mjs
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, haz un [_fork_](https://github.com/midudev/spiderman-brand-new-day/fork) del repositorio y crea una [_pull request_](https://github.com/midudev/spiderman-brand-new-day/pulls). También puedes simplemente abrir un [_issue_](https://github.com/midudev/spiderman-brand-new-day/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/midudev/spiderman-brand-new-day/fork) del proyecto
2. Clona tu _fork_ (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream https://github.com/midudev/spiderman-brand-new-day.git`)
4. Crea tu rama de funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus cambios (`git commit -m 'feat: alguna característica increíble'`)
6. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/midudev/spiderman-brand-new-day/pulls)

Consulta la [guía de contribución](CONTRIBUTING.md) para empezar de la mejor manera, incluidas las [convenciones del proyecto](CONTRIBUTING.md#convenciones-del-proyecto-) y las [buenas prácticas](CONTRIBUTING.md#buenas-prácticas-).

### Contribuir desde Stackblitz

Si quieres contribuir de una manera más sencilla, puedes iniciar este proyecto desde _Stackblitz_ usando tu cuenta de GitHub:

[![Abrir en Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/midudev/spiderman-brand-new-day)

**¡Gracias a todos los colaboradores que han hecho posible este proyecto!**

[![Contribuidores](https://contrib.rocks/image?repo=midudev/spiderman-brand-new-day&max=500&columns=20)](https://github.com/midudev/spiderman-brand-new-day/graphs/contributors)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - The web framework for content-driven websites.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - A utility-first CSS framework for rapidly building custom designs.
- [![GSAP][gsap-badge]][gsap-url] - Animaciones de scroll y texto (ScrollTrigger + SplitText).
- [![Cloudflare][cloudflare-badge]][cloudflare-url] - Despliegue de la web con Wrangler.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[gsap-url]: https://gsap.com/
[cloudflare-url]: https://developers.cloudflare.com/workers/
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[gsap-badge]: https://img.shields.io/badge/GSAP-000000?style=for-the-badge&logo=greensock&logoColor=88ce02
[cloudflare-badge]: https://img.shields.io/badge/Cloudflare-000000?style=for-the-badge&logo=cloudflare&logoColor=f38020
[contributors-shield]: https://img.shields.io/github/contributors/midudev/spiderman-brand-new-day.svg?style=for-the-badge
[contributors-url]: https://github.com/midudev/spiderman-brand-new-day/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/midudev/spiderman-brand-new-day.svg?style=for-the-badge
[forks-url]: https://github.com/midudev/spiderman-brand-new-day/network/members
[stars-shield]: https://img.shields.io/github/stars/midudev/spiderman-brand-new-day.svg?style=for-the-badge
[stars-url]: https://github.com/midudev/spiderman-brand-new-day/stargazers
[issues-shield]: https://img.shields.io/github/issues/midudev/spiderman-brand-new-day.svg?style=for-the-badge
[issues-url]: https://github.com/midudev/spiderman-brand-new-day/issues
