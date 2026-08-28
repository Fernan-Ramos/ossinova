// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// Config del sitio, desplegado en Vercel bajo el dominio final.
//
// El panel de edicion (Keystatic) vive en /keystatic: sus rutas se sirven
// bajo demanda (por eso el adapter de Vercel); el resto de paginas siguen
// siendo estaticas.
export default defineConfig({
  site: 'https://ossinovasurgical.com',
  adapter: vercel(),
  integrations: [react(), keystatic()],
});
