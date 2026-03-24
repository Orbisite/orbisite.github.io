import { getColorVariant } from './shared'

function PricingBlock({ sectionId, title, subtitle, plans = [], highlightedPlan = 1, color = 'primary' }) {
  const palette = getColorVariant(color)

  return (
    <section id={sectionId} className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${palette.badge}`}>Pricing</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const highlighted = index === highlightedPlan

            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border bg-slate-900 p-6 shadow-lg shadow-black/10 ${
                  highlighted ? `ring-2 ${palette.cardRing} border-transparent` : 'border-slate-700'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-100">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold text-slate-100">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href={plan.ctaHref ?? '#'}
                    className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      highlighted ? palette.button : palette.subtleButton
                    }`}
                  >
                    {plan.ctaText ?? 'Choose plan'}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingBlock
