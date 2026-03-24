export const colorVariants = {
  primary: {
    section: 'bg-neutral-950',
    accent: 'text-neutral-100',
    badge: 'border border-neutral-600/50 bg-neutral-800/70 text-neutral-100',
    button: 'bg-white text-neutral-950 hover:bg-neutral-200',
    subtleButton: 'border border-neutral-600/50 bg-neutral-800/80 text-neutral-100 hover:bg-neutral-700/90',
    cardRing: 'ring-neutral-300/40',
  },
  secondary: {
    section: 'bg-neutral-950',
    accent: 'text-neutral-200',
    badge: 'border border-neutral-700/60 bg-neutral-900/90 text-neutral-200',
    button: 'bg-neutral-200 text-neutral-950 hover:bg-white',
    subtleButton: 'border border-neutral-700/60 bg-neutral-900 text-neutral-200 hover:bg-neutral-800',
    cardRing: 'ring-neutral-400/40',
  },
  neutral: {
    section: 'bg-neutral-950',
    accent: 'text-neutral-200',
    badge: 'border border-neutral-700/50 bg-neutral-800/70 text-neutral-200',
    button: 'bg-neutral-100 text-neutral-900 hover:bg-white',
    subtleButton: 'border border-neutral-700/50 bg-neutral-800/70 text-neutral-200 hover:bg-neutral-700/80',
    cardRing: 'ring-neutral-500/40',
  },
}

export function getColorVariant(color = 'primary') {
  return colorVariants[color] ?? colorVariants.primary
}
