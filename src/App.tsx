import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import logo from './assets/logo-big.png' 
import { useEffect, useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onResize = () => setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return (
    <header className="header">
      <div className="container headerWrap">
        <a className="brand" href="/">
          <img src={logo} alt="Logo Studio P Concept" />
          <span>Studio <strong>P</strong> Concept</span>
        </a>
        <button aria-label="Abrir menu" className="toggle" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Início</NavLink>
          <NavLink to="/servicos" onClick={() => setOpen(false)}>Serviços</NavLink>
          <NavLink to="/galeria" onClick={() => setOpen(false)}>Galeria</NavLink>
          <NavLink to="/contato" onClick={() => setOpen(false)}>Contato</NavLink>
          <a className="btn btnWhats" href="https://wa.me/5511974765855?text=Ol%C3%A1!%20Quero%20agendar%20no%20Studio%20P%20Concept" target="_blank" rel="noreferrer">Agendar</a>
        </nav>
      </div>
    </header>
  )
}

const Footer = () => (
  <footer className="footer">
    <div className="container footerWrap">
      <span>&copy; {new Date().getFullYear()} Studio P Concept • Beleza com carinho</span>
      <a className="policy" href="#">Política de privacidade</a>
    </div>
  </footer>
)

export default function App(){
  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>('.top')
    const onScroll = () => {
      if(!btn) return
      if (window.scrollY > 500) btn.classList.add('show')
      else btn.classList.remove('show')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
      <button className="top" aria-label="Voltar ao topo" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>▲</button>
    </>
  )
}
