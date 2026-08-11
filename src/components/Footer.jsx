import { bandConfig } from '../config/socialLinks'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__name">{bandConfig.name}</p>
      <p className="footer__location">Nogales, Sonora 🇲🇽</p>
      <p className="footer__copy">
        © {year} Night Sound. Todos los derechos reservados.
      </p>
    </footer>
  )
}
