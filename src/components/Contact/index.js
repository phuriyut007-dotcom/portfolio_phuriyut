import Loader from 'react-loaders'
import profile from '../../data/profile'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>ติดต่อ</h1>
          <p className="contact-intro">
            หากต้องการติดต่อเพื่อพูดคุยเกี่ยวกับโครงการ การทำงาน หรือความร่วมมือ สามารถติดต่อผ่านช่องทางด้านล่างได้ทันที
          </p>

          <div className="contact-details">
            {profile.contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                className="contact-card"
              >
                {typeof contact.logo === 'string' && contact.logo.startsWith('/') ? (
                  <img src={contact.logo} alt={`${contact.name} logo`} className="contact-logo" />
                ) : (
                  <span className="contact-logo" aria-hidden="true">{contact.logo}</span>
                )}
                <span className="contact-copy">
                  <strong>{contact.name}</strong>
                  <small>{contact.label}</small>
                </span>
              </a>
            ))}
          </div>
        </div>

        <aside className="contact-visual">
          <img
            src="/images/contact-portrait.png"
            alt="ภาพถ่ายตัวเองของนักศึกษาวิศวกรรมคอมพิวเตอร์"
            loading="lazy"
            decoding="async"
          />
        </aside>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
