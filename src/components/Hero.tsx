import screenOne from '../assets/app-screen-1.png'
import screenTwo from '../assets/app-screen-2.png'
import qr from '../assets/qr.png'
import Reveal from './Reveal'

function Hero() {
  return (
    <Reveal className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__pill"><span /> Tus estadías, más claras</span>
          <h1 className="hero__title">Tu estadía, <em>más fácil de encontrar.</em></h1>
          <p className="hero__copy">
            Consulta empresas filtradas por tu carrera, lee recomendaciones de alumnos que ya pasaron por ahí
            y agenda tu cita con estadías, todo desde una sola app.
          </p>
          <div className="hero__buttons">
            <a className="button button--primary" href="#download">
              Descargar la app <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--ghost" href="#features">
              Conoce más <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero__proof">
            <span className="hero__proof-mark" aria-hidden="true">✳</span>
            <span><strong>Hecha para estudiantes</strong><br />por estudiantes de la UTSH</span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Vista previa de la aplicación Conecta UTSH">
          <div className="phone phone--back">
            <img src={screenOne} alt="Catálogo de empresas de estadía filtradas por carrera" />
          </div>
          <div className="phone phone--front">
            <img src={screenTwo} alt="Opiniones de alumnos y agenda de citas de estadías" />
          </div>
          <div className="hero__note">
            <img className="hero__qr" src={qr} alt="Código QR de muestra para descargar la app" />
            <span><strong>Estadías en tu bolsillo</strong><small>Escanea para descargar la app</small></span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
