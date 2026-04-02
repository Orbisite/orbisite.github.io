import { CLIENT_IMG_BASE, THEME_URL } from '../config/remoteData'
import { resolveMediaUrl } from '../utils/siteImages'

/**
 * Thèmes couleur (hex + sémantique) et palette résolue pour les blocs.
 * Les classes Tailwind sont dérivées dans getColorVariant (vars CSS + utilitaires).
 */

function hexToRgb(hex) {
  const raw = hex.replace('#', '')
  const h = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw
  const n = parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function withAlpha(hex, alpha) {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r},${g},${b},${alpha})`
}

/** Opacités par nom de variante (les thèmes ne contiennent que du hex). */
const blend = {
  primary: {
    badgeBorder: 0.5,
    badgeBg: 0.7,
    subtleBorder: 0.5,
    subtleBg: 0.8,
    ring: 0.4,
  },
  secondary: {
    badgeBorder: 0.6,
    badgeBg: 0.9,
    subtleBorder: 0.6,
    subtleBg: 1,
    ring: 0.4,
  },
  neutral: {
    badgeBorder: 0.5,
    badgeBg: 0.7,
    subtleBorder: 0.5,
    subtleBg: 0.7,
    ring: 0.4,
  },
}

/** Valeurs par défaut (merge avec l’API si des clés manquent). */
const fallbackThemes = {
  primary: {
    surface: '#0a0a0a',
    accent: '#f5f5f5',
    badgeBorder: '#525252',
    badgeBg: '#262626',
    badgeText: '#f5f5f5',
    buttonBg: '#ffffff',
    buttonText: '#0a0a0a',
    buttonHover: '#e5e5e5',
    subtleBorder: '#525252',
    subtleBg: '#262626',
    subtleText: '#f5f5f5',
    subtleHover: '#404040',
    ring: '#d4d4d4',
  },
  secondary: {
    surface: '#0a0a0a',
    accent: '#e5e5e5',
    badgeBorder: '#525252',
    badgeBg: '#171717',
    badgeText: '#e5e5e5',
    buttonBg: '#e5e5e5',
    buttonText: '#0a0a0a',
    buttonHover: '#ffffff',
    subtleBorder: '#525252',
    subtleBg: '#171717',
    subtleText: '#e5e5e5',
    subtleHover: '#262626',
    ring: '#a3a3a3',
  },
  neutral: {
    surface: '#0a0a0a',
    accent: '#e5e5e5',
    badgeBorder: '#525252',
    badgeBg: '#262626',
    badgeText: '#e5e5e5',
    buttonBg: '#f5f5f5',
    buttonText: '#171717',
    buttonHover: '#ffffff',
    subtleBorder: '#525252',
    subtleBg: '#262626',
    subtleText: '#e5e5e5',
    subtleHover: '#404040',
    ring: '#737373',
  },
}

let remoteThemes = null

/** URLs médias livrées avec `theme.json` (logo, hero, bento, avatars). */
let remoteImages = null

/**
 * Apres fetch de `theme.json` (API client). Fusionne les palettes ; ignore `images` (gere a part).
 */
export function setRemoteThemes(next) {
  if (!next) {
    remoteThemes = null
    remoteImages = null
    return
  }
  remoteThemes = {
    primary: { ...fallbackThemes.primary, ...next.primary },
    secondary: { ...fallbackThemes.secondary, ...next.secondary },
    neutral: { ...fallbackThemes.neutral, ...next.neutral },
  }
}

/**
 * @returns {{ logo?: string, hero?: string, favicon?: string, ogImage?: string, bento?: string[], testimonialAvatars?: string[] }}
 * Complété ou remplacé par `content.images` côté app (voir siteImages.mergeContentAndThemeImages).
 */
export function getRemoteImages() {
  return remoteImages ?? {}
}

function setRemoteImagesFromPayload(images) {
  if (!images || typeof images !== 'object') {
    remoteImages = null
    return
  }
  const r = (v) => resolveMediaUrl(CLIENT_IMG_BASE, v)
  remoteImages = {
    logo: r(images.logo),
    hero: r(images.hero),
    favicon: r(images.favicon),
    ogImage: r(images.ogImage),
    bento: Array.isArray(images.bento) ? images.bento.map((u) => r(u)).filter(Boolean) : undefined,
    testimonialAvatars: Array.isArray(images.testimonialAvatars)
      ? images.testimonialAvatars.map((u) => r(u)).filter(Boolean)
      : undefined,
  }
}

function getThemeRegistry() {
  return remoteThemes ?? fallbackThemes
}

const defaultThemeName = 'primary'

function resolveThemeInput(color) {
  const themes = getThemeRegistry()
  if (color && typeof color === 'object') {
    return { theme: { ...themes[defaultThemeName], ...color }, blend: blend[defaultThemeName] }
  }
  const name = typeof color === 'string' && themes[color] ? color : defaultThemeName
  return { theme: themes[name], blend: blend[name] ?? blend[defaultThemeName] }
}

function buildCssVars(theme, b) {
  return {
    '--p-surface': theme.surface,
    '--p-surface-sticky': withAlpha(theme.surface, 0.8),
    '--p-accent': theme.accent,
    '--p-badge-border': withAlpha(theme.badgeBorder, b.badgeBorder),
    '--p-badge-bg': withAlpha(theme.badgeBg, b.badgeBg),
    '--p-badge-text': theme.badgeText,
    '--p-button-bg': theme.buttonBg,
    '--p-button-text': theme.buttonText,
    '--p-button-hover': theme.buttonHover,
    '--p-subtle-border': withAlpha(theme.subtleBorder, b.subtleBorder),
    '--p-subtle-bg': withAlpha(theme.subtleBg, b.subtleBg),
    '--p-subtle-text': theme.subtleText,
    '--p-subtle-hover': theme.subtleHover,
    '--p-ring': withAlpha(theme.ring, b.ring),
  }
}

const classNames = {
  section: 'bg-[var(--p-surface)]',
  accent: 'text-[var(--p-accent)]',
  badge:
    'border border-[color:var(--p-badge-border)] bg-[var(--p-badge-bg)] text-[var(--p-badge-text)]',
  button: 'bg-[var(--p-button-bg)] text-[var(--p-button-text)] hover:bg-[var(--p-button-hover)]',
  subtleButton:
    'border border-[color:var(--p-subtle-border)] bg-[var(--p-subtle-bg)] text-[var(--p-subtle-text)] hover:bg-[var(--p-subtle-hover)]',
  cardRing: 'ring-[color:var(--p-ring)]',
}

/**
 * @param {string | Record<string, string>} [color] — nom de thème ('primary' | 'secondary' | 'neutral') ou objet partiel { surface: '#…', … }
 */
export function getColorVariant(color = defaultThemeName) {
  const { theme, blend: b } = resolveThemeInput(color)

  return {
    vars: buildCssVars(theme, b),
    ...classNames,
  }
}

/**
 * Charge `theme.json` depuis l'API client.
 */
export async function loadRemoteTheme() {
  const res = await fetch(THEME_URL)
  if (!res.ok) {
    throw new Error(`theme.json (${res.status})`)
  }
  const json = await res.json()
  setRemoteThemes(json)
  setRemoteImagesFromPayload(json.images)
}
