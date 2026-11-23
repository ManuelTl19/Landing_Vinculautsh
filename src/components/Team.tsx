import teamOne from '../assets/team-1.jpg'
import teamTwo from '../assets/team-2.jpg'
import teamThree from '../assets/team-3.jpg'
import teamFour from '../assets/team-4.jpg'
import { team } from '../data/content'
import Reveal from './Reveal'

const photos = {
  'team-1.jpg': teamOne,
  'team-2.jpg': teamTwo,
  'team-3.jpg': teamThree,
  'team-4.jpg': teamFour,
} satisfies Record<(typeof team)[number]['photo'], string>

function Team() {
  return (
    <Reveal className="section team" id="team">
      <div className="container">
        <div className="team__header">
          <span className="section-eyebrow">Las personas detrás de la idea</span>
          <h2 className="section-heading">Vivimos el problema, creamos la solución.</h2>
          <p className="section-copy">
            Somos alumnos de décimo cuatrimestre de Ingeniería en Desarrollo y Gestión de Software de la UTSH.
          </p>
        </div>
        <div className="team__grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img className="team-card__photo" src={photos[member.photo]} alt={member.alt} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default Team
