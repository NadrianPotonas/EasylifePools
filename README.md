# EasyLife Pools — Editable Vue Website

Vue 3 + Vite + Vue Router.

## Run
npm install
npm run dev

## Build
npm run build

## Where to edit the website
All main text/data is centralized in:
- `public/data/site.json` — navigation, contact details, hero, homepage copy, about, CTA and footer labels
- `public/data/pools.json` — every pool name, size, depth, tag and image path
- `public/data/services.json` — services
- `public/data/equipment.json` — equipment
- `public/data/gallery.json` — gallery captions/images

The Vue views consume those JSON files, so you don't need to hunt through every `.vue` file to change normal website text.

## Pool images
The pool cutouts are normalized to the same transparent 1200x760 canvas so the complete shape stays visible inside the card. They are stored in `public/images/pools/`.

Important: the supplied pool-cutout files had several filenames that did not match the pool name printed inside the image. The assets were mapped to the visible pool names before being placed in this project.

## Images not found
The two uploaded archives contained the Vue project and the 28 pool cutouts. They did not contain additional gallery/service/branding image files, so the gallery/hero/about sections still use temporary remote images until the real EasyLife images are supplied.
