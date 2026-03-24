import { getColorVariant } from './shared'

function FooterBlock({ sectionId, links = [], socials = [], copyright, color = 'neutral' }) {
  const palette = getColorVariant(color)

  return (
    <footer id={sectionId} className="border-t border-slate-800 bg-slate-950 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`text-sm font-medium transition ${palette.accent}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-400">{copyright}</p>
        </div>
        <ul className="flex items-center gap-3">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                aria-label={social.label}
                className={`inline-flex rounded-full px-3 py-2 text-xs font-semibold transition ${palette.subtleButton}`}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default FooterBlock
