import { bandConfig } from '../config/socialLinks'
import SocialButton from './SocialButton'

export default function SocialLinks() {
  const socialLinks = bandConfig.links.filter((l) => l.type !== 'contact')
  const contactLink = bandConfig.links.find((l) => l.type === 'contact')

  return (
    <section className="links-section" aria-label="Redes sociales y contacto">
      <nav aria-label="Redes sociales">
        {socialLinks.map((link, index) => (
          <SocialButton key={link.id} link={link} index={index} />
        ))}
      </nav>
      {contactLink && (
        <div className="links-cta">
          <SocialButton link={contactLink} index={socialLinks.length} isCta />
        </div>
      )}
    </section>
  )
}
