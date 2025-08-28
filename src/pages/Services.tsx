export default function Services(){
  const services = ['Corte', 'Escova', 'Hidratação', 'Reconstrução', 'Mechas', 'Progressiva']
  const makeWhats = (s: string) => `https://wa.me/5511974765855?text=Ol%C3%A1!%20Quero%20agendar%20${encodeURIComponent(s)}%20no%20Studio%20P%20Concept.`
  const imgFor = (s: string) => ({
    'Corte':'/src/assets/serv-corte.jpg',
    'Escova':'/src/assets/serv-escova.jpg',
    'Hidratação':'/src/assets/serv-escova.jpg',
    'Reconstrução':'/src/assets/serv-reconstrucao.jpg',
    'Mechas':'/src/assets/serv-mechas.jpg',
    'Progressiva':'/src/assets/serv-progressiva.jpg',
  } as const)[s] || '/src/assets/serv-escova.jpg'
  return (
    <main className="section">
      <div className="container">
        <header className="head">
          <h2>Serviços</h2>
          <p>Escolha abaixo e faça seu pré-agendamento pelo WhatsApp.</p>
        </header>
        <div className="grid">
          {services.map(s => (
            <article className="card" key={s}>
              <img src={imgFor(s)} alt={s} loading="lazy" />
              <div className="cardBody">
                <h3>{s}</h3>
                <p>Consultoria rápida para entender seu objetivo e indicar o melhor protocolo.</p>
                <div style={{marginTop:'.8rem', display:'flex', gap:'.5rem', flexWrap:'wrap'}}>
                  <a className="btn btnPrimary" href={makeWhats(s)} target="_blank" rel="noreferrer">Agendar {s}</a>
                  <a className="btn btnGhost" href="https://wa.me/5511974765855?text=Tenho%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os">Tirar dúvidas</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
