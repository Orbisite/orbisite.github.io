export const colorVariants = {
  primary: {
    section: 'bg-slate-950',
    accent: 'text-slate-100',
    badge: 'border border-slate-600/50 bg-slate-800/70 text-slate-100',
    button: 'bg-white text-slate-950 hover:bg-slate-200',
    subtleButton: 'border border-slate-600/50 bg-slate-800/80 text-slate-100 hover:bg-slate-700/90',
    cardRing: 'ring-slate-300/40',
  },
  secondary: {
    section: 'bg-slate-950',
    accent: 'text-slate-200',
    badge: 'border border-slate-700/60 bg-slate-900/90 text-slate-200',
    button: 'bg-slate-200 text-slate-950 hover:bg-white',
    subtleButton: 'border border-slate-700/60 bg-slate-900 text-slate-200 hover:bg-slate-800',
    cardRing: 'ring-slate-400/40',
  },
  neutral: {
    section: 'bg-slate-950',
    accent: 'text-slate-200',
    badge: 'border border-slate-700/50 bg-slate-800/70 text-slate-200',
    button: 'bg-slate-100 text-slate-900 hover:bg-white',
    subtleButton: 'border border-slate-700/50 bg-slate-800/70 text-slate-200 hover:bg-slate-700/80',
    cardRing: 'ring-slate-500/40',
  },
}

export function getColorVariant(color = 'primary') {
  return colorVariants[color] ?? colorVariants.primary
}
