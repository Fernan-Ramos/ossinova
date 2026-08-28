// ─────────────────────────────────────────────────────────────
//  KEYSTATIC — panel de edición del catálogo (/keystatic)
//  Edita los .json de src/content/products/ con formularios,
//  sin tocar código. El esquema replica el contrato de
//  src/content/config.ts: si cambias un campo aquí, cámbialo
//  también allí.
//
//  storage 'github': los editores entran con una cuenta de GitHub
//  con acceso de escritura al repo, y cada "Save" es un commit.
//  Necesita la GitHub App de Keystatic instalada en el repo y sus
//  variables de entorno (KEYSTATIC_GITHUB_CLIENT_ID,
//  KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET) en .env en
//  local y en Vercel en producción. La primera vez, el propio
//  panel guía la creación de la app desde `npm run dev`.
//  (Para editar en local sin pasar por GitHub, cambiar
//  temporalmente a `storage: { kind: 'local' }`.)
// ─────────────────────────────────────────────────────────────
import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'Fernan-Ramos/ossinova' },

  ui: {
    brand: { name: 'Ossinova' },
  },

  collections: {
    products: collection({
      label: 'Productos',
      slugField: 'name',
      // Columnas del listado; clicando la cabecera se ordena (p. ej. por
      // categoría, para ver los productos agrupados).
      columns: ['name', 'category', 'order'],
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre',
            description: 'Nombre del producto tal y como se muestra en la web.',
            validation: { length: { min: 1 } },
          },
          slug: {
            label: 'Identificador (URL)',
            description:
              'Se genera solo a partir del nombre. Forma parte de la dirección de la ficha; no lo cambies en productos ya publicados.',
          },
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Implantes', value: 'implants' },
            { label: 'Tornillos', value: 'screws' },
            { label: 'Neurocirugía', value: 'neurosurgery' },
            { label: 'Motores', value: 'motors' },
            { label: 'Kits', value: 'kits' },
            { label: 'Accesorios', value: 'accessories' },
          ],
          defaultValue: 'implants',
        }),
        material: fields.text({
          label: 'Material',
          defaultValue: 'Titanio Ti-6Al-4V ELI (grado 23)',
        }),
        reference: fields.text({
          label: 'Referencia',
          description: 'Código interno del producto (p. ej. OPB). Opcional.',
        }),
        dimensions: fields.text({
          label: 'Medidas',
          description: 'P. ej. "1.5 a 3.5 mm · 140–175 mm". Opcional.',
        }),
        description: fields.text({
          label: 'Descripción corta',
          description: 'Una o dos frases; se muestra en la tarjeta del catálogo.',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        longDescription: fields.text({
          label: 'Descripción larga',
          description: 'Se muestra en la ficha del producto. Opcional.',
          multiline: true,
        }),
        highlights: fields.array(fields.text({ label: 'Punto clave' }), {
          label: 'Puntos clave',
          description: 'Lista de ventajas que aparece en la ficha del producto.',
          itemLabel: (props) => props.value || 'Punto clave',
        }),
        image: fields.image({
          label: 'Foto',
          description: 'Foto del producto, preferiblemente sobre fondo blanco.',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        priceFrom: fields.number({
          label: 'Precio desde (€, sin IVA)',
          description: 'Solo informativo: NO se muestra en la web.',
        }),
        modes: fields.multiselect({
          label: 'Modalidades',
          options: [
            { label: 'Renting larga duración', value: 'rental-long' },
            { label: 'Renting corta duración', value: 'rental-short' },
            { label: 'Venta', value: 'sale' },
          ],
          defaultValue: ['sale'],
        }),
        tags: fields.array(fields.text({ label: 'Etiqueta' }), {
          label: 'Etiquetas',
          description:
            'Para filtrar dentro de una categoría (p. ej. "Corticales", "TPLO"). Opcional.',
          itemLabel: (props) => props.value || 'Etiqueta',
        }),
        featured: fields.checkbox({
          label: 'Destacado',
          description: 'Mostrar arriba del todo en el catálogo.',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Orden',
          description: 'Posición en el catálogo: menor número, antes. 0 si da igual.',
          defaultValue: 0,
        }),
      },
    }),
  },
});
