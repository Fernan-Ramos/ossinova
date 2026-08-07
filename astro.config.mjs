// @ts-check
import { defineConfig } from 'astro/config';

// Config base del sitio, desplegado en Vercel bajo el dominio final.
//
// El panel de edicion (Keystatic) se anade en la fase 2: en ese momento
// aqui se agregan las integraciones react() y keystatic(), el output
// "hybrid" y el adapter de Vercel. Ver README.
export default defineConfig({
  site: 'https://ossinovasurgical.com',
});
