import { useEffect, useRef, useState } from 'react'
import { REGIONS } from '../constants/regions'
import { useLocale } from '../context/LocaleContext'
import { useRegion } from '../context/RegionContext'

export default function RegionPicker() {
  const { region, setRegion } = useRegion()
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = REGIONS.find((r) => r.slug === region) || REGIONS[0]

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <div className="region-picker" ref={ref}>
      <button
        type="button"
        className="region-picker-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="region-pin" aria-hidden>📍</span>
        <span className="region-label">{t(`regions.${current.key}`)}</span>
        <span className="region-chevron" aria-hidden>▾</span>
      </button>
      {open && (
        <ul className="region-dropdown" role="listbox">
          {REGIONS.map((r) => (
            <li key={r.slug} role="option" aria-selected={region === r.slug}>
              <button
                type="button"
                className={region === r.slug ? 'active' : ''}
                onClick={() => {
                  setRegion(r.slug)
                  setOpen(false)
                }}
              >
                <span>{t(`regions.${r.key}`)}</span>
                {region === r.slug && <span className="region-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
