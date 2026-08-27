// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

// Config del sitio, desplegado en Vercel bajo el dominio final.
//
// El panel de edicion (Keystatic) vive en /keystatic: necesita las rutas
// de servidor que aportan react() + keystatic(), por eso el output es
// "hybrid" (todas las paginas siguen siendo estaticas; solo el panel y su
// API se sirven bajo demanda) con el adapter de Vercel.
export default defineConfig({
  site: 'https://ossinovasurgical.com',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), keystatic()],
});
