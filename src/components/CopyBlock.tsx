import { useState } from 'react'

type Props = {
  label: string
  text: string
  rows?: number
}

export function CopyBlock({ label, text, rows = 8 }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="copy-block">
      <div className="copy-block-head">
        <span className="copy-block-label">{label}</span>
        <button type="button" className="btn-copy" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <textarea
        className="copy-textarea"
        readOnly
        rows={rows}
        value={text}
        spellCheck={false}
        aria-label={label}
      />
    </div>
  )
}
