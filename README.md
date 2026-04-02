# Orbisite Website

Ce repository contient le site client Orbisite.

## Edition client

Le client modifie le repo `api` (contenu), pas la structure du site.

Chemins cibles dans `api`:

- `content.json`
- `theme.json`
- `site.json`
- `img/*`

### Ce qui est autorise

- Textes et contenus de sections dans `content.json`
- Couleurs dans `theme.json` (format hex `#RRGGBB` ou `#RGB`)
- Meta du site dans `site.json` (`title`, `description`, `og`, `twitter`, `favicon`)
- Pied de page : `footer` (`linkHrefs`, `socials`, `links` optionnel)
- CTA et liens : `navbar.ctaHref`, `hero.ctaHref`, `pricing.planCtaHref` (et `ctaHref` par plan si besoin), ancres du menu et liens bento dans `content.json`
- Images dans `img/`

### Ce qui est interdit

- Modifier la structure des blocs
- Ajouter/reordonner des blocs
- Modifier `src/data/page.config.js`
- Modifier le package `blocks/*`

La structure du site est verrouillee cote Orbisite et reste une prestation.

### CNAME

`CNAME` reste dans le repo du site (`public/CNAME`) et est gere par Orbisite.

### Notes sur les images

- Dans les JSON, utilisez soit une URL absolue (`https://...`), soit un nom de fichier place dans `img/`.
- Exemple: `"favicon": "logo.png"` resout vers l'image du repo `api/img/logo.png`.

## Documentation detaillee

Guide cote contenu: repo `Orbisite/api` (`README.md`).
