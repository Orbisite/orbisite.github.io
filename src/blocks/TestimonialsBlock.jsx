import { getColorVariant } from './shared'

function TestimonialsBlock({ sectionId, title, subtitle, items = [], color = 'primary' }) {
  const palette = getColorVariant(color)

  return (
    <section id={sectionId} className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${palette.badge}`}>Testimonials</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatarUrl ?? 'https://placehold.co/80x80?text=U'}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-100">{item.name}</p>
                  {item.rating ? <p className="text-xs text-amber-500">{'★'.repeat(item.rating)}</p> : null}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsBlock
