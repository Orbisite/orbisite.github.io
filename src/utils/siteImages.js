/**
 * Résolution des URLs médias (base GitHub raw + nom de fichier, ou URL absolue).
 */

export function resolveMediaUrl(base, value) {
  if (!value || typeof value !== 'string') {
    return undefined
  }
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  if (base && typeof base === 'string') {
    const b = base.replace(/\/$/, '')
    const p = value.replace(/^\//, '')
    return `${b}/${p}`
  }
  return value
}

/**
 * Lit `content.images` depuis content.json (API).
 * @returns {object | null}
 */
export function extractContentImages(content) {
  const img = content?.images
  if (!img || typeof img !== 'object') {
    return null
  }
  const base = typeof img.base === 'string' ? img.base : ''
  const r = (v) => resolveMediaUrl(base, v)
  return {
    logo: r(img.logoSrc ?? img.logo),
    hero: r(img.hero),
    favicon: r(img.favicon),
    ogImage: r(img.ogImage),
    bento: Array.isArray(img.bento) ? img.bento.map((u) => r(u)).filter(Boolean) : undefined,
    testimonialAvatars: Array.isArray(img.testimonialAvatars)
      ? img.testimonialAvatars.map((u) => r(u)).filter(Boolean)
      : undefined,
  }
}

function mergeArrays(a, b) {
  if (!a?.length && !b?.length) {
    return undefined
  }
  const len = Math.max(a?.length ?? 0, b?.length ?? 0)
  return Array.from({ length: len }, (_, i) => a?.[i] ?? b?.[i])
}

/** Contenu prioritaire, thème en secours (couleurs restent dans theme.json). */
export function mergeContentAndThemeImages(contentLayer, themeLayer) {
  const c = contentLayer
  const t = themeLayer ?? {}
  return {
    logo: c?.logo ?? t.logo,
    hero: c?.hero ?? t.hero,
    favicon: c?.favicon ?? t.favicon,
    ogImage: c?.ogImage ?? t.ogImage,
    bento: mergeArrays(c?.bento, t?.bento),
    testimonialAvatars: mergeArrays(c?.testimonialAvatars, t?.testimonialAvatars),
  }
}
