import './App.module.css'
import style from './App.module.css'

function App() {

  return (
   
      <main>
      <div className={style.Menu}>
        <a href="#apresentacao">Início</a>
        <a href="#experiencias">Experiências</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobremim">Sobre mim</a>
      </div>
        <h1 className={style.titulo}>Seja bem vindo ao meu portfólio Profissional!</h1>
        <section className={style.apresentacao} id="apresentacao">
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

          <section className={style.experiencias} id="experiencias">
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

          <section className={style.projetos} id="projetos">
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

          <section className={style.aboutme} id="sobremim">
            <div className={style.sobremim}>
                <h1>Sobre Mim</h1>
                <div className={style.texto_sobremim}>
                    <img src="../src/assets/img/eu.png" alt="eu"/>
                    <h3>Sou Mariana, uma desenvolvedora de sistemas apaixonada por transformar ideias em realidade digital. Desde cedo, a tecnologia me fascinou, e hoje dedico meu tempo a criar soluções inovadoras que fazem a diferença. Com uma experiência em algumas tecnologias e linguagens de programação, adoro enfrentar novos desafios que me permitam crescer e aprender. Quando não estou codificando, você pode me encontrar explorando novas receitas ou novos projetos, sempre em busca de novas inspirações. Estou animada para colaborar em projetos que tenham um impacto positivo e significativo!</h3>
                </div>
            </div>
            <h1>Entre em contato</h1>
            <div className={style.contato}>
                <div className={style.item_contato}>
                    <img src="../src/assets/img/branco/facebook.png" alt="facebook"/><h2>Mariana Marques</h2>
                </div>
                <div className={style.item_contato}>
                    <img src="../src/assets/img/branco/instagram.png" alt="instagram"/><h2>@xmarimarques</h2>
                </div>
                <div className={style.item_contato}>
                    <img src="../src/assets/img/branco/whatsapp.png" alt="whatsapp"/><h2>(41) 9 9750-4019</h2>
                </div>
                <div className={style.item_contato}>
                    <img src="../src/assets/img/branco/github.png" alt="github"/><h2>xmarimarques</h2>
                </div>
                <div className={style.item_contato}>
                    <img src="../src/assets/img/branco/linkedin.png" alt="linkedin"/><h2>Mariana Hipolito</h2>
                </div>
            </div>
          </section>
        </main>
   
  )
}

export default App
