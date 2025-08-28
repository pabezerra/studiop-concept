export default function Contact(){
  return (
    <main className="section">
      <div className="container">
        <header className="head">
          <h2>Contato & Localização</h2>
          <p>Terça a sábado — 9:00 às 20:00</p>
        </header>
        <div className="contactGrid">
          <div className="card cardPad">
            <h3>Agendamentos</h3>
            <p>Atendimento rápido pelo WhatsApp. Envie sua mensagem e retornamos em instantes.</p>
            <a className="btn btnWhats" href="https://wa.me/5511974765855?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noreferrer">Abrir WhatsApp</a>
            <ul className="list">
              <li>Terça a Sábado — 9:00 às 20:00</li>
              <li>Domingos e feriados sob consulta</li>
            </ul>
            <div className="socials">
              <a aria-label="Instagram" href="https://www.instagram.com/studiop.ce/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM18 6.3a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></svg>
              </a>
              <a aria-label="Facebook" href="#" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M13 22v-9h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.7 2.1 15.7 2 14.6 2 12 2 10.2 3.5 10.2 6.2V9H7v4h3.2v9H13z"/></svg>
              </a>
            </div>
          </div>

          <div className="card cardPad">
            <h3>Endereço</h3>
            <p>Rua Leopoldo de Passos Lima, 238 — sala 2<br/>São Paulo — SP</p>
            <div className="map">
              <iframe title="Mapa Studio P Concept" loading="lazy" allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Rua%20Leopoldo%20de%20Passos%20Lima%20238%20S%C3%A3o%20Paulo&output=embed">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
