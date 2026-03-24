/**
 * Textes du site par bloc (`{ fr, en }` pour les chaînes traduisibles).
 * Champs non traduits (href, icon, rating, etc.) : valeurs simples.
 */

export const content = {
  navbar: {
    logo: { fr: 'Orbisite', en: 'Orbisite' },
    logoSrc: '/logo_full_no_background.png',
    links: [
      { label: { fr: 'Services', en: 'Services' }, href: '#services' },
      { label: { fr: 'Réalisations', en: 'Showcase' }, href: '#showcase' },
      { label: { fr: 'Tarifs', en: 'Pricing' }, href: '#pricing' },
      { label: { fr: 'Témoignages', en: 'Testimonials' }, href: '#testimonials' },
    ],
    cta: { fr: 'Démarrer un projet', en: 'Start project' },
    menu: { fr: 'Menu', en: 'Menu' },
    close: { fr: 'Fermer', en: 'Close' },
  },

  hero: {
    title: {
      fr: 'Des sites clients livrés avec un système maîtrisé',
      en: 'Client websites delivered with a controlled system',
    },
    subtitle: {
      fr:
        'Nous concevons et livrons votre site avec un cadre fiable, puis vous mettez à jour les contenus essentiels en toute simplicité.',
      en: 'We design and deliver your site with a reliable framework, then your team updates key content without friction.',
    },
    cta: { fr: 'Voir le tarif', en: 'View pricing' },
    imageAlt: {
      fr: 'Aperçu de maquette de site web',
      en: 'Website preview mockup',
    },
    imageUrl: 'https://placehold.co/900x640/e5e5e5/171717?text=Hero+Preview',
  },

  features: {
    sectionId: 'services',
    title: {
      fr: 'Un cadre clair, des mises à jour simples',
      en: 'A clear framework, simple updates',
    },
    subtitle: {
      fr: 'Votre équipe peut modifier l’essentiel via API, pendant que nous gardons la maîtrise technique du site.',
      en: 'Your team can update core content through API access while we keep structure and quality under control.',
    },
    items: [
      {
        icon: 'flash',
        title: { fr: 'Livraison cadrée', en: 'Managed delivery' },
        text: {
          fr: 'Nous concevons et livrons le site avec un process fiable.',
          en: 'We design, build, and deliver your website with a reliable production flow.',
        },
      },
      {
        icon: 'target',
        title: { fr: 'Accès API client', en: 'API editing access' },
        text: {
          fr: 'Vous modifiez les textes, les couleurs primary/secondary/neutral et le contenu des blocs en autonomie.',
          en: 'Edit text strings, primary/secondary/neutral colors, and block content without waiting on us.',
        },
      },
      {
        icon: 'puzzle',
        title: { fr: 'Périmètre maîtrisé', en: 'Scope control' },
        text: {
          fr: 'Pour ajouter des blocs ou créer de nouvelles pages, notre équipe intervient directement.',
          en: 'Need new pages or additional block types? We handle these requests directly to keep consistency.',
        },
      },
    ],
  },

  bento: {
    title: {
      fr: 'Sites réalisés avec notre système',
      en: 'Sites built with our system',
    },
    subtitle: {
      fr: 'Quelques exemples de sites livrés avec notre framework de production.',
      en: 'A few examples of websites delivered with our production framework.',
    },
    note: {
      fr: 'Ce site est lui aussi construit avec ce même système.',
      en: 'This current website is also built with the same system.',
    },
    items: [
      {
        title: {
          fr: 'Landing page entreprise de services',
          en: 'Service business landing page',
        },
        text: {
          fr: 'Livraison rapide avec sections réutilisables et structure orientée conversion.',
          en: 'Fast delivery with reusable sections and clean conversion-focused structure.',
        },
        imageUrl: {
          fr: 'https://placehold.co/1200x800/0a0a0a/e5e5e5?text=Site+Client+01',
          en: 'https://placehold.co/1200x800/0a0a0a/e5e5e5?text=Client+Website+01',
        },
        href: '#',
        ctaText: { fr: 'Voir', en: 'Preview' },
      },
      {
        title: {
          fr: 'Site vitrine société locale',
          en: 'Local company showcase',
        },
        text: {
          fr: 'Structure simple, message clair, et modifications de contenu faciles.',
          en: 'Simple structure, clear messaging, and easy content updates.',
        },
        imageUrl: {
          fr: 'https://placehold.co/1200x800/171717/d4d4d4?text=Site+Client+02',
          en: 'https://placehold.co/1200x800/171717/d4d4d4?text=Client+Website+02',
        },
        href: '#',
        ctaText: { fr: 'Voir', en: 'Preview' },
      },
      {
        title: { fr: 'Portfolio one-page', en: 'Portfolio one-page site' },
        text: {
          fr: 'Mise en page compacte et modulaire adaptée aux activités visuelles.',
          en: 'Compact and modular layout adapted to visual-first businesses.',
        },
        imageUrl: {
          fr: 'https://placehold.co/1200x800/262626/f5f5f5?text=Site+Client+03',
          en: 'https://placehold.co/1200x800/262626/f5f5f5?text=Client+Website+03',
        },
        href: '#',
        ctaText: { fr: 'Voir', en: 'Preview' },
      },
    ],
  },

  pricing: {
    title: { fr: 'Tarification claire', en: 'Transparent pricing' },
    subtitle: {
      fr: 'Hébergement gratuit. Base à 99,99 EUR pour 5 sections.',
      en: 'Hosting is free. Build cost starts at 99.99 EUR for 5 sections.',
    },
    plans: [
      {
        name: { fr: 'Base', en: 'Base' },
        price: { fr: '99,99 EUR', en: '99.99 EUR' },
        description: {
          fr: 'Une page avec 5 sections',
          en: 'One page with up to 5 sections',
        },
        features: [
          {
            fr: 'Mise en place initiale incluse',
            en: 'Initial setup included',
          },
          {
            fr: 'Hébergement inclus (gratuit)',
            en: 'Hosting included (free)',
          },
          {
            fr: 'Accès API pour textes, couleurs et contenus de blocs',
            en: 'API access for text, colors, and block content updates',
          },
        ],
        ctaText: { fr: 'Démarrer avec la base', en: 'Start from Base' },
      },
      {
        name: { fr: 'Page supplémentaire', en: 'Additional page' },
        price: { fr: '+49,99 EUR / page', en: '+49.99 EUR / page' },
        description: {
          fr: 'Chaque page ajoutée inclut 3 sections',
          en: 'Each extra page includes 3 sections',
        },
        features: [
          {
            fr: '3 sections incluses par page en plus',
            en: '3 sections included per extra page',
          },
          { fr: 'Même système de design', en: 'Same design system' },
          { fr: 'Livrée par notre équipe', en: 'Delivered by our team' },
        ],
        ctaText: { fr: 'Ajouter une page', en: 'Add a page' },
      },
      {
        name: { fr: 'Section supplémentaire', en: 'Extra sections' },
        price: { fr: '+19,99 EUR / section', en: '+19.99 EUR / section' },
        description: {
          fr: 'Si vous voulez dépasser les sections incluses',
          en: 'When you need more sections',
        },
        features: [
          {
            fr: 'Valable sur la base et les pages ajoutées',
            en: 'Applies to base or additional pages',
          },
          { fr: 'Intégration rapide', en: 'Fast integration' },
          {
            fr: 'Aucun surcoût d’hébergement',
            en: 'No hosting surcharge',
          },
        ],
        ctaText: { fr: 'Ajouter des sections', en: 'Add sections' },
      },
    ],
  },

  testimonials: {
    title: { fr: 'Ce que disent les clients', en: 'What clients say' },
    subtitle: {
      fr: 'Les équipes qui utilisent cette approche modulaire livrent plus vite sans perdre en qualité.',
      en: 'Teams using this modular approach ship websites faster without sacrificing quality.',
    },
    items: [
      {
        name: { fr: 'Lina Moreau', en: 'Lina Moreau' },
        text: {
          fr: 'Les blocs prédéfinis nous ont permis de lancer en une semaine sans incohérence visuelle.',
          en: 'The predefined blocks helped us launch in one week with zero design inconsistencies.',
        },
        rating: 5,
      },
      {
        name: { fr: 'Armand Petit', en: 'Armand Petit' },
        text: {
          fr: 'On construit désormais des pages clients plus vite avec une structure fiable.',
          en: 'We now build client pages with a reliable structure and much faster production cycles.',
        },
        rating: 5,
      },
      {
        name: { fr: 'Salma R.', en: 'Salma R.' },
        text: {
          fr: 'Langage visuel propre, édition facile, et fini les demandes de layouts hors cadre.',
          en: 'Clean visual language, easy edits, and no scope creep from random layout requests.',
        },
        rating: 4,
      },
    ],
  },

  footer: {
    privacy: { fr: 'Confidentialité', en: 'Privacy' },
    terms: { fr: 'Conditions', en: 'Terms' },
    contact: { fr: 'Contact', en: 'Contact' },
    copyright: {
      fr: '© 2026 Orbisite. Tous droits réservés.',
      en: '© 2026 Orbisite. All rights reserved.',
    },
  },
}
