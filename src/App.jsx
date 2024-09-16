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
        <h1 className={style.titulo}>Seja bem vindo ao meu portfólio Profissional!</h1>
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

          <section className={style.projetos}>
            <h1>Projetos</h1>
            <div className={style.projeto}>
                <div className={style.texto_projeto}>
                    <h2>Coffes Garden</h2>
                    <h3>Tecnologias: PHP, VsCode, MySQL, AJAX, JavaScript, HTML</h3>
                    <p>Um site de uma cafeteria e floricultura 100% funcional e aplicável. Conta com uma interface para o cliente e outra para o administrador.</p>
                </div>
                <iframe src="../src/assets/img/videos/0809.mp4"></iframe>
            </div>
            <div className={style.projeto}>
                <iframe src="../src/assets/img/videos/termo.mp4"></iframe>
                <div className={style.texto_projeto}>
                    <h2>TERMO</h2>
                    <h3>Tecnologias: Linguagem C, VsCode</h3>
                    <p>O termo é um jogo de advinhação de palavras, tendo dois modos, você deve acertar a palavra com base nas cores verde, vermelho e amarelo.</p>
                </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default App
