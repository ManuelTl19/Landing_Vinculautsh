import { steps } from '../data/content'
import Reveal from './Reveal'

function HowItWorks() {
  return (
    <Reveal className="section how" id="how-it-works">
      <div className="container how__layout">
        <div className="how__intro">
          <span className="section-eyebrow">Así de fácil</span>
          <h2 className="section-heading">En tres pasos, ya vas rumbo a tu estadía.</h2>
          <p className="section-copy">
            Empezar toma menos de lo que tardas en abrir el Excel.
          </p>
        </div>
        <ol className="how__list">
          {steps.map((step) => (
            <li className="how-step" key={step.number}>
              <span className="how-step__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  )
}

export default HowItWorks
