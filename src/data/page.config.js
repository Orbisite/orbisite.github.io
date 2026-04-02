import { resolveForLocale } from '../utils/localeUtils'
import { extractContentImages } from '../utils/siteImages'

export function buildPageConfig(content, locale = 'fr', onLocaleChange = () => {}) {
  const images = extractContentImages(content) ?? {}
  const nav = resolveForLocale(locale, content.navbar)
  const hero = resolveForLocale(locale, content.hero)
  const features = resolveForLocale(locale, content.features)
  const bento = resolveForLocale(locale, content.bento)
  const pricing = resolveForLocale(locale, content.pricing)
  const testimonials = resolveForLocale(locale, content.testimonials)
  const footer = resolveForLocale(locale, content.footer)

  // Structure verrouillee: l'ordre et les types de blocs restent definis ici.
  return [
    {
      type: 'navbar',
      props: {
        logo: nav.logo,
        logoSrc: images.logo,
        links: nav.links,
        ctaText: nav.cta,
        ctaHref: '#contact',
        sticky: true,
        color: 'primary',
        locale,
        menuLabel: nav.menu,
        closeLabel: nav.close,
        onLocaleChange,
      },
    },
    {
      type: 'hero',
      props: {
        sectionId: 'hero',
        title: hero.title,
        subtitle: hero.subtitle,
        ctaText: hero.cta,
        ctaHref: '#pricing',
        variant: 'split',
        color: 'primary',
        imageUrl: images.hero,
        imageAlt: hero.imageAlt,
      },
    },
    {
      type: 'features',
      props: {
        sectionId: features.sectionId,
        title: features.title,
        subtitle: features.subtitle,
        color: 'secondary',
        items: features.items,
      },
    },
    {
      type: 'bento',
      props: {
        sectionId: 'showcase',
        title: bento.title,
        subtitle: bento.subtitle,
        note: bento.note,
        color: 'secondary',
        items: bento.items.map((item, index) => ({
          ...item,
          imageUrl: images.bento?.[index],
        })),
      },
    },
    {
      type: 'pricing',
      props: {
        sectionId: 'pricing',
        title: pricing.title,
        subtitle: pricing.subtitle,
        color: 'primary',
        highlightedPlan: 1,
        plans: pricing.plans.map((plan) => ({ ...plan, ctaHref: '#contact' })),
      },
    },
    {
      type: 'testimonials',
      props: {
        sectionId: 'testimonials',
        title: testimonials.title,
        subtitle: testimonials.subtitle,
        color: 'secondary',
        items: testimonials.items.map((item, index) => ({
          ...item,
          avatarUrl: images.testimonialAvatars?.[index],
        })),
      },
    },
    {
      type: 'footer',
      props: {
        sectionId: 'contact',
        links: [
          { label: footer.privacy, href: '#' },
          { label: footer.terms, href: '#' },
          { label: footer.contact, href: '#contact' },
        ],
        socials: [
          { label: 'X', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'GitHub', href: '#' },
        ],
        color: 'neutral',
        copyright: footer.copyright,
      },
    },
  ]
}
