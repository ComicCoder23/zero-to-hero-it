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
    name: 'Mum PC Helper',
    blurb: 'Windows home-PC support kit',
    orbClass: 'orb-mum',
    url: 'https://github.com/ComicCoder23/mums-pc-helper',
    featured: true,
  },
  {
    name: 'Look Up',
    blurb: 'Eclipse PWA',
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
