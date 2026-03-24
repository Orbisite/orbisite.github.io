import { translations } from '../i18n/translations'

export function buildPageConfig(locale = 'fr', onLocaleChange = () => {}) {
  const t = translations[locale] ?? translations.fr

  return [
    {
      type: 'navbar',
      props: {
        logo: 'Orbisite',
        logoSrc: '/logo_full_no_background.png',
        links: [
          { label: t.navbar.services, href: '#services' },
          { label: t.navbar.showcase, href: '#showcase' },
          { label: t.navbar.pricing, href: '#pricing' },
          { label: t.navbar.testimonials, href: '#testimonials' },
        ],
        ctaText: t.navbar.cta,
        ctaHref: '#contact',
        sticky: true,
        color: 'primary',
        locale,
        menuLabel: t.navbar.menu,
        closeLabel: t.navbar.close,
        onLocaleChange,
      },
    },
    {
      type: 'hero',
      props: {
        sectionId: 'hero',
        title: t.hero.title,
        subtitle: t.hero.subtitle,
        ctaText: t.hero.cta,
        ctaHref: '#pricing',
        variant: 'split',
        color: 'primary',
        imageUrl: 'https://placehold.co/900x640/e5e5e5/171717?text=Hero+Preview',
        imageAlt: t.hero.imageAlt,
      },
    },
    {
      type: 'features',
      props: {
        sectionId: 'services',
        title: t.features.title,
        subtitle: t.features.subtitle,
        color: 'secondary',
        items: t.features.items,
      },
    },
    {
      type: 'bento',
      props: {
        sectionId: 'showcase',
        title: t.bento.title,
        subtitle: t.bento.subtitle,
        note: t.bento.note,
        color: 'secondary',
        items: t.bento.items,
      },
    },
    {
      type: 'pricing',
      props: {
        sectionId: 'pricing',
        title: t.pricing.title,
        subtitle: t.pricing.subtitle,
        color: 'primary',
        highlightedPlan: 1,
        plans: t.pricing.plans.map((plan) => ({ ...plan, ctaHref: '#contact' })),
      },
    },
    {
      type: 'testimonials',
      props: {
        sectionId: 'testimonials',
        title: t.testimonials.title,
        subtitle: t.testimonials.subtitle,
        color: 'secondary',
        items: t.testimonials.items.map((item, index) => ({
          ...item,
          avatarUrl: `https://placehold.co/80x80/e5e5e5/171717?text=${index + 1}`,
        })),
      },
    },
    {
      type: 'footer',
      props: {
        sectionId: 'contact',
        links: [
          { label: t.footer.privacy, href: '#' },
          { label: t.footer.terms, href: '#' },
          { label: t.footer.contact, href: '#contact' },
        ],
        socials: [
          { label: 'X', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'GitHub', href: '#' },
        ],
        color: 'neutral',
        copyright: t.footer.copyright,
      },
    },
  ]
}
