import { Link } from 'react-router-dom'

// IMPORTS das imagens usadas diretamente
import logoBig from '../assets/logo-big.png'
import heroLocal from '../assets/hero-local.jpg'

// GLOBBING da galeria (pega todos os gal-*.jpg de assets e já devolve URL final)
const galMap = import.meta.glob('../assets/gal-*.jpg', {
  eager: true,
  as: 'url',
})
// Ordena por nome de arquivo para manter consistência
const gallery = Object.entries(galMap)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url as string)

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <img
              src={logoBig}
              alt="Logo Studio P Concept grande"
              className="heroLogo"
            />
            <h1>Beleza que celebra sua essência</h1>
            <p>
              Transforme o visual com técnicas modernas, produtos premium e
              atendimento acolhedor. Cabelo, make e estética do seu jeito.
            </p>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              <a
                className="btn btnPrimary"
                href="https://wa.me/5511974765855?text=Quero%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20P%20Concept"
              >
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btnGhost" to="/servicos">
                Ver serviços
              </Link>
            </div>
            <ul className="badges" aria-label="Diferenciais">
              <li>Profissionais certificados</li>
              <li>Produtos cruelty-free</li>
              <li>Ambiente instagramável</li>
            </ul>
          </div>

          <div className="heroImg">
            <div className="circle" />
            <img
              src={heroLocal}
              alt="Atendimento no lavatório do Studio P"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <header className="head">
            <h2>Galeria</h2>
            <p>Alguns trabalhos do Studio P Concept.</p>
          </header>

          <div className="masonry">
            {gallery.map((src, i) => (
              <img key={src} src={src} alt={`Trabalho do salão ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <div>
            <img src={heroLocal} alt="Interior do Studio P Concept" />
          </div>
          <div>
            <header className="head" style={{ textAlign: 'left', marginBottom: '.8rem' }}>
              <h2>Quem Somos</h2>
            </header>
            <p>
              Bem-vindo ao Studio P Concept, um salão de beleza dedicado a oferecer
              uma experiência única e personalizada para cada cliente. Nossa equipe
              de profissionais apaixonados está pronta para ouvir suas necessidades
              e proporcionar serviços de alta qualidade em um ambiente acolhedor.
              Acreditamos que a beleza vai além da aparência, e estamos comprometidos
              em criar momentos de autocuidado para você. Venha nos visitar e
              descubra como podemos realçar sua beleza de maneira especial!
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="head">
            <h2>Depoimentos</h2>
            <p>Relatos fictícios de clientes felizes.</p>
          </header>
          <div className="grid">
            {[
              { name: 'Marina C.', text: 'Amei o resultado das mechas! Ficou leve e super natural.' },
              { name: 'Bianca S.', text: 'A escova durou dias e o atendimento foi impecável.' },
              { name: 'Carla M.', text: 'Reconstrução salvou meu cabelo. Saí me sentindo outra pessoa!' },
            ].map((item) => (
              <article className="card" key={item.name}>
                <div className="cardBody">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center">
            <a
              className="btn btnGhost"
              href="https://wa.me/5511974765855?text=Quero%20deixar%20um%20depoimento%20sobre%20o%20Studio%20P%20Concept"
            >
              Quero deixar meu depoimento
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
