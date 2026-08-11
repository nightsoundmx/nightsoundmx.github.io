import { icons } from './icons/SocialIcons'

export default function SocialButton({ link, index, isCta = false }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-btn${isCta ? ' social-btn--cta' : ''}`}
      style={{ animationDelay: `${0.15 + index * 0.08}s` }}
      aria-label={`${link.name} — abre en nueva pestaña`}
    >
      <span className="social-btn__icon">{icons[link.icon]}</span>
      <span className="social-btn__name">
        {isCta ? `🎤 ${link.name}` : link.name}
      </span>
      <span className="social-btn__arrow" aria-hidden="true">
        {icons.arrow}
      </span>
    </a>
  )
}
