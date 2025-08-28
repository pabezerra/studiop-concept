export default function Gallery(){
  const pics = ['/src/assets/gal-20210227_160151.jpg','/src/assets/gal-20201031_135446.jpg','/src/assets/gal-20210306_180404.jpg']
  return (
    <main className="section sectionAlt">
      <div className="container">
        <header className="head">
          <h2>Galeria</h2>
          <p>Trabalhos recentes do Studio P Concept.</p>
        </header>
        <div className="masonry">
          {pics.map(p => <img key={p} src={p} alt="Trabalho do salão" loading="lazy" />)}
        </div>
      </div>
    </main>
  )
}
