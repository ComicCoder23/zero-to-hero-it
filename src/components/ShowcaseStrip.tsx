import { ExtLink } from './ExtLink'

export type ShowcaseItem = {
  name: string
  blurb: string
  orbClass: string
  url?: string
  featured?: boolean
}

/** Public projects shown to employers. */
export const SHOWCASE: ShowcaseItem[] = [
  {
    name: 'PC Health Check Kit',
    blurb: 'Read-only PowerShell checks',
    orbClass: 'orb-mum',
    url: 'https://comiccoder23.github.io/pc-health-check-kit/',
    featured: true,
  },
  {
    name: 'Look Up',
    blurb: 'sky calendar',
    orbClass: 'orb-lookup',
    url: 'https://comiccoder23.github.io/lookup/',
  },
  {
    name: 'zero-to-hero-it',
    blurb: 'IT learning record',
    orbClass: 'orb-cc23',
    url: 'https://github.com/ComicCoder23/zero-to-hero-it',
  },
]

type Props = {
  items?: ShowcaseItem[]
}

export function ShowcaseStrip({ items }: Props) {
  const list = items ?? SHOWCASE

  return (
    <div className="showcase-strip">
      {list.map((item) => {
        const inner = (
          <>
            <div className={`orb ${item.orbClass}`} aria-hidden />
            <strong>
              {item.featured ? '★ ' : ''}
              {item.name}
            </strong>
            <span>{item.blurb}</span>
          </>
        )
        if (item.url) {
          return (
            <ExtLink
              key={item.name}
              href={item.url}
              className={
                item.featured ? 'showcase-card showcase-featured' : 'showcase-card'
              }
            >
              {inner}
            </ExtLink>
          )
        }
        return (
          <div key={item.name} className="showcase-card">
            {inner}
          </div>
        )
      })}
    </div>
  )
}
