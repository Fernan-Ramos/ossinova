import { defineCollection, z } from 'astro:content';

// ─────────────────────────────────────────────────────────────
//  PRODUCT CATALOG SCHEMA
//  Each product is a .json file in src/content/products/.
//  This is the data "contract": it defines the fields every
//  product has. It is what the admin panel (Keystatic) edits and
//  what lets us migrate the content to another CMS without
//  rebuilding the site.
// ─────────────────────────────────────────────────────────────

export const CATEGORIES = [
  'implants',
  'screws',
  'neurosurgery',
  'motors',
  'accessories',
] as const;

// Commercial options available per product.
export const MODES = ['rental-long', 'rental-short', 'sale'] as const;

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    material: z.string().default('Titanio Ti-6Al-4V ELI (grado 23)'),
    reference: z.string().optional(),
    dimensions: z.string().optional(),
    description: z.string(),
    // Longer description shown on the product detail page (optional).
    longDescription: z.string().optional(),
    // Key selling points shown as a bullet list on the detail page.
    highlights: z.array(z.string()).default([]),
    // Path or file name of the image (in /public/images/products/).
    image: z.string().optional(),
    // Optional datasheet/PDF path (in /public/), for future downloads.
    datasheet: z.string().optional(),
    // Reference "from" price (EUR, no VAT). Stored but NOT shown publicly;
    // kept so it can be surfaced later if the owners decide to.
    priceFrom: z.number().optional(),
    modes: z.array(z.enum(MODES)).default(['sale']),
    // Free-form tags used to filter within a category (e.g. "Corticales",
    // "Bloqueados", "TPLO"). Owners can define their own.
    tags: z.array(z.string()).default([]),
    // Show at the top of the catalog.
    featured: z.boolean().default(false),
    // Display order (lower first). Leave 0 if it does not matter.
    order: z.number().default(0),
  }),
});

export const collections = { products };
