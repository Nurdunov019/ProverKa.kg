import { Link, useLocation } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

function IconHome() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 01-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 014 19v-8.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function IconObjects() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10.5L12 5l7 5.5V18a1 1 0 01-1 1h-4v-5H10v5H6a1 1 0 01-1-1v-7.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 12.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconMap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10.5L12 5l7 5.5V18a1 1 0 01-1 1h-4v-5H10v5H6a1 1 0 01-1-1v-7.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="15.5" cy="15.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17.5 17.5L19.5 19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconAdd() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function MobileNav({ koshuuOpen, onKoshuu }) {
  const { pathname, hash } = useLocation()
  const { t } = useLocale()

  const isHome = pathname === '/' && hash !== '#complexes'
  const isObjects = pathname.startsWith('/complex') || (pathname === '/' && hash === '#complexes')
  const isMap = pathname === '/map'

  const itemClass = (active) => `mobile-nav-item${active ? ' active' : ''}`

  return (
    <nav className="mobile-nav" aria-label={t('mobileNav.label')}>
      <Link to="/" className={itemClass(isHome)}>
        <IconHome />
        <span>{t('mobileNav.home')}</span>
      </Link>
      <Link to="/#complexes" className={itemClass(isObjects)}>
        <IconObjects />
        <span>{t('mobileNav.objects')}</span>
      </Link>
      <Link to="/map" className={itemClass(isMap)}>
        <IconMap />
        <span>{t('mobileNav.search')}</span>
      </Link>
      <button type="button" className={itemClass(koshuuOpen)} onClick={onKoshuu}>
        <IconAdd />
        <span>{t('mobileNav.add')}</span>
      </button>
    </nav>
  )
}
