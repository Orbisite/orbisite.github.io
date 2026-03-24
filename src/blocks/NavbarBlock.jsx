import { useState } from 'react'
import { getColorVariant } from './shared'

function NavbarBlock({
  logo = 'Orbisite',
  logoSrc,
  links = [],
  ctaText = 'Contact',
  ctaHref = '#',
  sticky = false,
  color = 'primary',
  locale = 'fr',
  menuLabel = 'Menu',
  closeLabel = 'Close',
  onLocaleChange,
}) {
  const palette = getColorVariant(color)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`${sticky ? 'sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md' : 'bg-slate-950'} border-b border-slate-800`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center">
          {logoSrc ? (
            <img src={logoSrc} alt={logo} className="h-9 w-auto object-contain" />
          ) : (
            <span className="text-lg font-semibold tracking-tight text-slate-100">{logo}</span>
          )}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-300 hover:text-slate-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onLocaleChange}
            className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            {locale === 'fr' ? 'FR | EN' : 'EN | FR'}
          </button>
          <a href={ctaHref} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${palette.button}`}>
            {ctaText}
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800 md:hidden"
        >
          {isMenuOpen ? closeLabel : menuLabel}
        </button>
      </nav>
      {isMenuOpen ? (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onLocaleChange}
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                {locale === 'fr' ? 'FR | EN' : 'EN | FR'}
              </button>
              <a
                href={ctaHref}
                onClick={() => setIsMenuOpen(false)}
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${palette.button}`}
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default NavbarBlock
