// @ts-check
import { defineConfig } from 'astro/config';

// Config base del sitio. Cuando enlaces el repo y despliegues en Vercel,
// cambia "site" por la URL final (p. ej. https://ossinova.com).
//
// El panel de edicion (Keystatic) se anade en la fase 2: en ese momento
// aqui se agregan las integraciones react() y keystatic(), el output
// "hybrid" y el adapter de Vercel. Ver README.
export default defineConfig({
  site: 'https://ossinova.example.com',
});
