import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
  actions?: ReactNode
}

export function Panel({ title, subtitle, children, actions }: Props) {
  return (
    <section className="panel glass-panel">
      <header className="panel-head">
        <div>
          <h1 className="panel-title">
            <span className="title-orb" aria-hidden />
            {title}
          </h1>
          {subtitle ? <p className="panel-sub">{subtitle}</p> : null}
        </div>
        {actions}
      </header>
      <div className="panel-body">{children}</div>
    </section>
  )
}
