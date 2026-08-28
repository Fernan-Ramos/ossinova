# Ossinova — web corporativa

Landing corporativa de **Ossinova Surgical Group S.L.** (implantes, tornillos,
instrumental y motores quirúrgicos veterinarios), hecha con
[Astro](https://astro.build). Diseño limpio, moderno y serio, con la paleta de
marca y tipografía Montserrat.

## Puesta en marcha

```bash
npm install      # instala dependencias
npm run dev      # arranca en http://localhost:4321
npm run build    # genera la web estática en /dist
npm run preview  # previsualiza el build
```

## Estructura

```
src/
  content/products/*.json  ← ⭐ el CATÁLOGO: un fichero por producto
  content/config.ts        ← esquema (contrato) de los productos
  data/site.ts             ← textos del sitio (hero, quiénes somos, modalidades, FAQ, contacto)
  components/              ← Nav, Hero, TrustBar, About, Modes, Catalog, ProductCard, Faq, Contact, Footer
  pages/
    index.astro           ← ensambla la home
    catalogo/[slug].astro ← ficha de detalle de cada producto (generada automáticamente)
  styles/global.css        ← paleta de marca y estilos base
public/images/             ← logos y fotos de producto
google-apps-script/        ← backend del formulario de contacto (Google Sheets)
```

## Cómo se gestiona el contenido

- **Productos:** cada producto es un `.json` en `src/content/products/`. Los
  campos están definidos en `src/content/config.ts` (nombre, categoría,
  material, medidas, descripción, imagen, modalidades, etc.). Las fichas de
  detalle en `/catalogo/<slug>` se generan solas.
- **Panel de edición ([Keystatic](https://keystatic.com)):** en `/keystatic`
  (con `npm run dev`, abre http://localhost:4321/keystatic). Permite
  añadir/editar/borrar productos con formularios, sin tocar código. El esquema
  del panel vive en `keystatic.config.ts` y replica el de
  `src/content/config.ts`: si cambias un campo en uno, cámbialo en el otro.
  - Ahora funciona en modo `local` (edita los ficheros del disco durante
    `npm run dev`). Para que los dueños lo usen en producción hay que pasarlo a
    modo GitHub (gratis): ver el comentario en `keystatic.config.ts`.
- **Textos del sitio:** en `src/data/site.ts` (secciones, modalidades, FAQ,
  datos de contacto). Todo el código está en inglés; los textos visibles, en
  español.

### Imágenes de producto

Cada producto guarda su foto en una subcarpeta con su propio slug:
`public/images/products/<slug>/<archivo>.jpg`, y el campo `image` lleva la ruta
completa (p. ej. `"image": "/images/products/opb/opb.jpg"`). Es la convención
que usa Keystatic al subir imágenes desde el panel, así que al añadir una foto
desde `/keystatic` esto sale solo. Si `image` queda vacío (`null`), se muestra
el icono de marca como marcador.

## Formulario de contacto

Las consultas se guardan en una hoja de Google Sheets (gratis). Configúralo
siguiendo [`google-apps-script/README.md`](./google-apps-script/README.md) y
pega la URL en `src/data/site.ts` → `contact.formUrl`. Hasta entonces, el
formulario aparece con un aviso y deshabilitado.

## Datos pendientes de rellenar

En `src/data/site.ts` → `contact`: email real, teléfono/WhatsApp real y (más
tarde) `formUrl`.

## Desplegar en Vercel

Al ser estática, se despliega gratis:

1. Sube el proyecto a un repo (privado) de GitHub.
2. Conéctalo en [Vercel](https://vercel.com) (detecta Astro automáticamente).
3. Build command: `npm run build` · Output: `dist`.
4. Actualiza el campo `site` en `astro.config.mjs` con la URL final.

## Paleta de marca

- Verde Ossinova `#01737D` · Gris `#505050` · Dorado catálogo `#E8BD61` · Azul
  Instagram `#8DD4EA` · Tipografía **Montserrat**.

Están como variables CSS en `src/styles/global.css` (`:root`). Cámbialas ahí
para reestilizar toda la web.
