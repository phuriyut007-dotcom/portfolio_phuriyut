import Loader from 'react-loaders'
import profile from '../../data/profile'
import './index.scss'

const About = () => {
  return (
    <>
    <main className="container about-page">
      <section className="about-visual-column" aria-label="ประวัติการศึกษาและภาพรวม">
        <figure className="about-photo">
          <img
            src="/images/kmutnb-campus.png"
            alt="วิทยาเขตมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <section className="education-card" aria-label="การศึกษา">
          <img
            className="university-logo"
            src={profile.education.logo}
            alt="โลโก้ KMUTNB"
            loading="lazy"
          />
          <div>
            <p className="education-label">การศึกษา</p>
            <h2>{profile.education.abbreviation}</h2>
            <p className="education-name">{profile.education.institution}</p>
            <span className="program-badge">{profile.education.program}</span>
          </div>
        </section>
      </section>

      <section className="about-info-column">
        <div className="about-intro">
          <h1>เกี่ยวกับ</h1>
          <p>{profile.about}</p>
        </div>
        <section className="skills-section" aria-label="ทักษะด้านเทคโนโลยีและซอฟต์แวร์">
          <h2>ทักษะ</h2>
          <p className="skills-note">
            ระดับความเชี่ยวชาญเป็นการประมาณค่าเพื่อสะท้อนความพร้อมในแต่ละด้าน
          </p>
          <div className="skills-grid">
            {profile.skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-heading">
                  <div className="skill-card-info">
                    <span>{skill.category}</span>
                    <strong>{skill.name}</strong>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                  <div className="skill-logos">
                    {skill.logos.map((logo) => (
                      <img
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
                <div className="skill-level">
                  <div className="skill-level-label">
                    <span>ระดับความเชี่ยวชาญ</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div
                    className="skill-meter"
                    role="progressbar"
                    aria-label={`ระดับความเชี่ยวชาญของ ${skill.name}`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={skill.level}
                  >
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
    <Loader type="pacman" />
  </>
  )
}

export default About
