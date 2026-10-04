import { ExtLink } from './ExtLink'

export type ShowcaseItem = {
  name: string
  blurb: string
  orbClass: string
  url?: string
  featured?: boolean
}

/** Full showcase including public TTM tile (portfolio only). */
export const SHOWCASE_FULL: ShowcaseItem[] = [
  {
    name: 'Tech Tradie Media',
    blurb: 'techtradiemedia.co.uk · UK trades web + SEO',
    orbClass: 'orb-ttm',
    url: 'https://techtradiemedia.co.uk',
    featured: true,
  },
  {
    name: 'Stage Manager',
    blurb: 'Improv app persona · Instagram',
    orbClass: 'orb-sm',
    url: 'https://www.instagram.com/th3.st4ge.manag3r/',
  },
  {
    name: 'Mum PC Helper',
    blurb: 'Windows field kit',
    orbClass: 'orb-mum',
    url: 'https://github.com/ComicCoder23/mums-pc-helper',
  },
  {
    name: 'Look Up',
    blurb: 'Eclipse PWA',
    orbClass: 'orb-lookup',
    url: 'https://github.com/ComicCoder23/lookup',
  },
  {
    name: 'Memory City',
    blurb: 'Local-first ops',
    orbClass: 'orb-memory',
    url: 'https://github.com/ComicCoder23/memory-city',
  },
  {
    name: 'KCH Radar',
    blurb: 'GitHub proof',
    orbClass: 'orb-kch',
    url: 'https://github.com/ComicCoder23/kch-radar',
  },
  {
    name: 'ComicCoder23',
    blurb: 'Public identity',
    orbClass: 'orb-cc23',
    url: 'https://github.com/ComicCoder23',
  },
  {
    name: 'ComicCoder23 Builds',
    blurb: 'Building in public',
    orbClass: 'orb-agb',
    url: 'https://www.instagram.com/alan.gray.builds/',
  },
]

/** Job-safe strip — no TTM (for Apply Kit / Learning / job panels). */
export const SHOWCASE_JOB_SAFE: ShowcaseItem[] = SHOWCASE_FULL.filter(
  (item) =>
    item.name !== 'Tech Tradie Media' && item.name !== 'Stage Manager',
)

/** Employer-facing Tier A only (JobOps lock 2026-10-04). */
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

type Props = {
  items?: ShowcaseItem[]
  /** "full" = legacy showcase; "jobSafe" = no TTM; "tierA" = employer-facing three only */
  variant?: 'full' | 'jobSafe' | 'tierA'
}

export function ShowcaseStrip({ items, variant = 'tierA' }: Props) {
  const list =
    items ??
    (variant === 'jobSafe'
      ? SHOWCASE_JOB_SAFE
      : variant === 'full'
        ? SHOWCASE_FULL
        : SHOWCASE_TIER_A)

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
