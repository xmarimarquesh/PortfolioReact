import './App.module.css'
import style from './App.module.css'

function App() {

  return (
    <>
      <div className={style.Menu}>
        <a href="">Início</a>
        <a href="">Experiências</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>
      <main>
        <h1>Seja bem vindo ao meu portfólio Profissional!</h1>
        <section className={style.apresentacao}>
              <div className={style.texto_apresentacao}>
                  <h2>Olá! me chamo Mariana Marques</h2>
                  <h1>Desenvolvedor de Sistemas</h1>
                  <h3>Sou apaixonada por transformar ideias em soluções digitais inovadoras. Com experiência em tecnologias como VsCode, Git e MySql, crio aplicações eficientes que fazem a diferença. Meu compromisso é com a excelência e a inovação, sempre buscando desafios que me permitam crescer profissionalmente.</h3>
                  <div className={style.icons}>
                      <img src="../src/assets/img/facebook.png" alt="facebook"/>
                      <img src="../src/assets/img/instagram.png" alt="instagram"/>
                      <img src="../src/assets/img/whatsapp.png" alt="whatsapp"/>
                      <img src="../src/assets/img/github.png" alt="github"/>
                      <img src="../src/assets/img/linkedin.png" alt="linkedin"/>
                  </div>
                  <hr/>
              </div>
              <img className={style.eu} src="../src/assets/img/eu2.png" alt=""/>
          </section>

        <section className={style.experiencias}>
        <h1>Experiências</h1>
            <div className={style.experiencia}>
                <img src="https://yt3.googleusercontent.com/nk7VSREl8PCdRZhGcLkggJ5vacaxnTxW5BWbiflQOoMjLcM6Zg4LdZJYPNmQOH0a48Zbtd8L-Q=s176-c-k-c0x00ffffff-no-rj-mo" alt="bosch"/>
                <div>
                    <h2>Jovem Aprendiz em</h2>
                    <h1>Soluções Digitais</h1>
                    <h3>Robert Bosch</h3>
                    <h4>05/02/2024 - 05/07/2025</h4>
                </div>
            </div>
        </section>
        </main>
    </>
  )
}

export default App
