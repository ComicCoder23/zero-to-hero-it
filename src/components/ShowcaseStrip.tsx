import { ExtLink } from './ExtLink'

export type ShowcaseItem = {
  name: string
  blurb: string
  orbClass: string
  url?: string
  featured?: boolean
}

/** Employer-facing Tier A only (JobOps lock). Full showcase kept out of public bundle. */
export const SHOWCASE_TIER_A: ShowcaseItem[] = [
  {
    name: 'Mum PC Helper',
    blurb: 'Windows field kit',
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
    blurb: 'Career leveling record',
    orbClass: 'orb-cc23',
    url: 'https://github.com/ComicCoder23/zero-to-hero-it',
  },
]

// Aliases so old imports/variants keep working without shipping non-Tier-A names
export const SHOWCASE_FULL = SHOWCASE_TIER_A
export const SHOWCASE_JOB_SAFE = SHOWCASE_TIER_A

type Props = {
  items?: ShowcaseItem[]
  variant?: 'full' | 'jobSafe' | 'tierA'
}

export function ShowcaseStrip({ items, variant = 'tierA' }: Props) {
  const list = items ?? SHOWCASE_TIER_A
  void variant

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
          <div
            key={item.name}
            className={
              item.featured ? 'showcase-card showcase-featured' : 'showcase-card'
            }
          >
            {inner}
          </div>
        )
      })}
    </div>
  )
}
