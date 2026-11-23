import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__main">
        <div className="footer__brand">
          <a className="brand" href="#inicio">
            <img className="brand__logo" src={logo} alt="" />
            <span className="brand__name">conecta<span>.</span></span>
          </a>
          <p>Una idea estudiantil para facilitar el proceso de estadías en la UTSH.</p>
        </div>
        <div>
          <h2 className="footer__title">Proyecto escolar</h2>
          <ul className="footer__details">
            <li>Conecta UTSH</li>
            <li>Materia: Desarrollo de aplicaciones</li>
            <li>Universidad Tecnológica de la Sierra Hidalguense</li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Hablemos</h2>
          <ul className="footer__socials">
            <li><a href="mailto:contacto@conecta-utsh.edu.mx">contacto@conecta-utsh.edu.mx</a></li>
            <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Conecta UTSH · Proyecto escolar</span>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  )
}

export default Footer
