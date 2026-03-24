import { useMemo, useState } from 'react'
import PageRenderer from './blocks/PageRenderer'
import { buildPageConfig } from './data/page.config'

function App() {
  const [locale, setLocale] = useState('fr')
  const page = useMemo(
    () => buildPageConfig(locale, () => setLocale((current) => (current === 'fr' ? 'en' : 'fr'))),
    [locale],
  )

  return (
    <main className="min-h-screen">
      <PageRenderer page={page} />
    </main>
  )
}

export default App
