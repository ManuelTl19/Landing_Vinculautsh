import { features } from '../data/content'
import Reveal from './Reveal'

function Features() {
  return (
    <Reveal className="section features" id="features">
      <div className="container">
        <div className="features__header">
          <div>
            <span className="section-eyebrow">TODO EN UN MISMO LUGAR</span>
            <h2 className="section-heading">Adiós al Excel interminable.</h2>
          </div>
          <p className="section-copy">
            Menos tiempo buscando empresas. Más tiempo preparándote para tu estadía.
          </p>
        </div>
        <div className="features__grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-card__icon" aria-hidden="true">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default Features
