import { useEffect, useMemo, useState } from 'react'
import { BlocksThemeProvider, PageRenderer } from 'blocks'
import { getColorVariant } from './data/theme'
import { loadContent } from './data/content'
import { buildPageConfig } from './data/page.config'
import { getRemoteImages, loadRemoteTheme, setRemoteThemes } from './data/theme'
import { extractContentImages, mergeContentAndThemeImages } from './utils/siteImages'

function App() {
  const [locale, setLocale] = useState('fr')
  const [content, setContent] = useState(null)
  const [status, setStatus] = useState({ loading: true, error: null })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [contentJson] = await Promise.all([loadContent(), loadRemoteTheme()])
        if (cancelled) {
          return
        }
        setContent(contentJson)
        setStatus({ loading: false, error: null })
      } catch (e) {
        if (cancelled) {
          return
        }
        setRemoteThemes(null)
        setStatus({ loading: false, error: e instanceof Error ? e.message : 'Échec du chargement' })
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!content) {
      return
    }
    const { favicon, ogImage } = mergeContentAndThemeImages(extractContentImages(content), getRemoteImages())
    if (favicon) {
      let link = document.querySelector('link[rel="icon"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        link.type = 'image/png'
        document.head.appendChild(link)
      }
      link.href = favicon
    }
    if (ogImage) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage)
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', ogImage)
    }
  }, [content])

  const page = useMemo(
    () =>
      content
        ? buildPageConfig(content, locale, () => setLocale((current) => (current === 'fr' ? 'en' : 'fr')))
        : [],
    [content, locale],
  )

  if (status.loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-400">
        Chargement…
      </main>
    )
  }

  if (status.error || !content) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-neutral-950 px-6 text-center text-neutral-300">
        <p>Impossible de charger le contenu ou le thème.</p>
        <p className="max-w-md text-sm text-neutral-500">{status.error}</p>
      </main>
    )
  }

  return (
    <BlocksThemeProvider getColorVariant={getColorVariant}>
      <main className="min-h-screen">
        <PageRenderer page={page} />
      </main>
    </BlocksThemeProvider>
  )
}

export default App
