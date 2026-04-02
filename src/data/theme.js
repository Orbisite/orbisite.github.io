import { THEME_URL } from '../config/remoteData'

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

/**
 * Apres fetch de `theme.json` (API client). Fusionne les palettes (couleurs uniquement).
 */
export function setRemoteThemes(next) {
  if (!next) {
    remoteThemes = null
    return
  }
  remoteThemes = {
    primary: { ...fallbackThemes.primary, ...next.primary },
    secondary: { ...fallbackThemes.secondary, ...next.secondary },
    neutral: { ...fallbackThemes.neutral, ...next.neutral },
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

/** Voir leo-giraud-site/src/data/theme.js — mêmes clés optionnelles dans theme.json */
function buildSemanticVars(theme) {
  const contentEmphasis = theme.contentEmphasis ?? '#fafafa'
  const contentHeading = theme.contentHeading ?? '#f5f5f5'
  const contentBody = theme.contentBody ?? '#d4d4d4'
  const contentMuted = theme.contentMuted ?? '#a3a3a3'
  const contentSoft = theme.contentSoft ?? '#737373'
  const contentBorder = theme.contentBorder ?? '#404040'

  return {
    '--p-content-emphasis': contentEmphasis,
    '--p-content-heading': contentHeading,
    '--p-content-body': contentBody,
    '--p-content-muted': contentMuted,
    '--p-content-soft': contentSoft,
    '--p-content-border': contentBorder,
    '--p-on-dark-emphasis': theme.onDarkEmphasis ?? contentEmphasis,
    '--p-on-dark-heading': theme.onDarkHeading ?? contentHeading,
    '--p-on-dark-body': theme.onDarkBody ?? contentBody,
    '--p-on-dark-muted': theme.onDarkMuted ?? contentMuted,
    '--p-on-dark-soft': theme.onDarkSoft ?? contentSoft,
    '--p-elevated-bg': theme.elevatedBg ?? '#171717',
    '--p-elevated-border': theme.elevatedBorder ?? '#404040',
    '--p-elevated-bg-soft': theme.elevatedBgSoft ?? 'rgba(23, 23, 23, 0.55)',
    '--p-elevated-bg-mid': theme.elevatedBgMid ?? 'rgba(38, 38, 38, 0.4)',
    '--p-elevated-bg-flat': theme.elevatedBgFlat ?? 'rgba(23, 23, 23, 0.7)',
    '--p-elevated-bg-inset': theme.elevatedBgInset ?? 'rgba(23, 23, 23, 0.8)',
    '--p-elevated-bg-notice': theme.elevatedBgNotice ?? 'rgba(23, 23, 23, 0.6)',
    '--p-elevated-bg-band':
      theme.elevatedBgBand ?? 'linear-gradient(to bottom right, #171717, #0a0a0a, #171717)',
    '--p-elevated-shadow': theme.elevatedShadow ?? '0 10px 15px -3px rgb(0 0 0 / 0.25)',
    '--p-elevated-shadow-lg': theme.elevatedShadowLg ?? '0 25px 50px -12px rgb(0 0 0 / 0.35)',
    '--p-elevated-shadow-xl': theme.elevatedShadowXl ?? '0 25px 50px -12px rgb(0 0 0 / 0.45)',
    '--p-elevated-shadow-2xl': theme.elevatedShadow2xl ?? '0 25px 50px -12px rgb(0 0 0 / 0.5)',
  }
}

function buildCssVars(theme, b) {
  return {
    ...buildSemanticVars(theme),
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
}
