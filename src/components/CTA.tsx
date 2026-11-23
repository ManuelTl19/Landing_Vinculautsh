import qr from '../assets/qr.png'
import Reveal from './Reveal'

function CTA() {
  return (
    <Reveal className="container cta" id="download">
      <div className="cta__panel">
        <div className="cta__content">
          <span className="section-eyebrow">TU SIGUIENTE PASO EMPIEZA AQUÍ</span>
          <h2 className="cta__title">Haz que tu estadía sea más sencilla.</h2>
          <p className="cta__copy">
            Encuentra tu empresa, conoce opiniones reales y agenda tu cita desde el celular.
          </p>
          <a className="button button--primary" href="mailto:contacto@conecta-utsh.edu.mx?subject=Quiero%20probar%20Conecta%20UTSH">
            Quiero conocer la app <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="cta__qr-card">
          <img className="cta__qr" src={qr} alt="Código QR de muestra, pendiente de enlazar a la descarga" />
          <p>Escanea para descargar</p>
        </div>
      </div>
    </Reveal>
  )
}

export default CTA
