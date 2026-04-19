import { Link } from 'react-router-dom'

function formatInline(text) {
  const parts = String(text).split(/(\*\*.+?\*\*)/g)
  return parts.map((chunk, i) => {
    const m = chunk.match(/^\*\*(.+)\*\*$/)
    if (m) {
      return (
        <strong key={i} className="font-semibold text-neutral-100">
          {m[1]}
        </strong>
      )
    }
    return <span key={i}>{chunk}</span>
  })
}

/**
 * @param {{
 *   doc: { title: string, updated: string, sections: { h: string, p: string[] }[] },
 *   locale: string,
 *   setLocale: (v: string) => void,
 * }} props
 */
export default function LegalDocumentPage({ doc, locale, setLocale }) {
  const back = locale === 'fr' ? 'Accueil' : 'Home'

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      <header className="border-b border-neutral-800/80 bg-neutral-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="text-sm font-medium text-white transition hover:text-neutral-200">
            ← {back}
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/80 p-0.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setLocale('fr')}
              className={
                locale === 'fr' ?
                  'rounded-full bg-neutral-700 px-3 py-1.5 text-neutral-100'
                : 'rounded-full px-3 py-1.5 text-neutral-500 hover:text-neutral-300'
              }
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={
                locale === 'en' ?
                  'rounded-full bg-neutral-700 px-3 py-1.5 text-neutral-100'
                : 'rounded-full px-3 py-1.5 text-neutral-500 hover:text-neutral-300'
              }
            >
              EN
            </button>
          </div>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-100 md:text-3xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-neutral-500">{doc.updated}</p>
        <div className="mt-10 space-y-10">
          {doc.sections.map((sec) => (
            <section key={sec.h}>
              <h2 className="text-lg font-semibold text-neutral-100">{sec.h}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-400">
                {sec.p.map((para, j) => (
                  <p key={j}>{formatInline(para)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
