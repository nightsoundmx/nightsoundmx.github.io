import { useState } from 'react'
import { bandConfig } from '../config/socialLinks'

export default function Header() {
  const [logoError, setLogoError] = useState(false)
  const logoUrl = `${import.meta.env.BASE_URL}${bandConfig.logo}`

  return (
    <header className="header">
      <div className="header__logo-wrap">
        {!logoError ? (
          <img
            src={logoUrl}
            alt={`Logo de ${bandConfig.name}`}
            className="header__logo"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="header__logo-placeholder" aria-label={bandConfig.name}>
            NS
          </div>
        )}
      </div>
      <h1 className="header__name">{bandConfig.name}</h1>
      <p className="header__tagline">{bandConfig.tagline}</p>
      <p className="header__description">{bandConfig.description}</p>
    </header>
  )
}
