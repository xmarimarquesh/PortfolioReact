import { useState } from 'react';
import './App.module.css';
import style from './App.module.css';
import download from "../src/assets/img/botao-de-download.png"
import eu from "../src/assets/img/eu2.png"
import face from "../src/assets/img/facebook.png"
import insta from "../src/assets/img/instagram.png"
import git from "../src/assets/img/github.png"
import whats from "../src/assets/img/whatsapp.png"
import linkedin from "../src/assets/img/linkedin.png"
import face_branco from "../src/assets/img/branco/facebook.png"
import insta_branco from "../src/assets/img/branco/instagram.png"
import whats_branco from "../src/assets/img/branco/whatsapp.png"
import git_branco from "../src/assets/img/branco/github.png"
import linkedin_branco from "../src/assets/img/branco/linkedin.png"
import video_termo from "../src/assets/img/videos/termo.mp4"
import video_coffe from "../src/assets/img/videos/0809.mp4"
import video_bibli from "../src/assets/img/videos/bilbi.mp4"
import eu2 from "../src/assets/img/eu.png"

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function gerarDocumentoWord() {
    const conteudoHtml = `
      <html>
        <head>
          <meta charset="UTF-8" />
        </head>
        <body>
          <h2>Mariana Marques Hipolito</h2>
          <br>
          <h3>Contato</h3>
          <ul>
            <li>(41) 9 9840-5048</li>
            <li>marimarquesh39@gmail.com</li>
          </ul>
          <br>
          <h3>Quem sou?</h3>
          <p>Sou apaixonada por transformar ideias em soluções digitais inovadoras. Com experiência em tecnologias como VsCode, Git e MySql, 
          crio aplicações eficientes que fazem a diferença. Meu compromisso é com a excelência e a inovação, sempre buscando desafios que me 
          permitam crescer profissionalmente.</p>
          <br>
          <h3>Habilidades</h3>
          <ul>
            <li>Comunicação</li>
            <li>Pontualidade</li>
            <li>Flexibilidade</li>
            <li>Liderança</li>
            <li>Empatia</li>
          </ul>
          <br>
          <h3>Formações</h3>
          <ul>
            <li>SENAI - Técnico em desenvolvimento de Sistemas</li>
            <li>PUCPR - Análise e desenvolvimento de Sistemas</li>
          </ul>
          <br>
          <h3>Experiência</h3>
          <ul>
            <li>Robert Bosch LTDA - Aprendiz em Soluções Digitais</li>
          </ul>
          <br>

        </body>
      </html>
    `;
  
    const blob = new Blob([conteudoHtml], { type: "application/msword" });
    const link = document.createElement("a");
  
    link.href = URL.createObjectURL(blob);
    link.download = "curriculum.doc";
    link.click();
  
    let modal = document.getElementById("curriculo");
    modal.style.display = "block";
  
    setTimeout(() => {
      modal.style.display = "none";
    }, 3000);
  }
  
  const handleZap = () => {
    const urlZAPZAP = `https://api.whatsapp.com/send?phone=5541988037571&text=Oi`
    window.open(urlZAPZAP, '_blank')
  }

  return (
    <div className={darkMode ? style.dark : style.light}>
      <script src="script.js"></script>
      <main id="apresentacao">
        <div className={style.Menu}>
          <a href="#apresentacao">Início</a>
          <a href="#experiencias">Experiências</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobremim">Sobre mim</a>
          <span onClick={toggleDarkMode} className="material-symbols-outlined">{darkMode ? 'sunny' : 'dark_mode'}</span>
        </div>

        <p className={style.curriculo} id="curriculo">Download realizado com sucesso!</p>

        <h1 className={style.titulo}>Seja bem-vindo ao meu portfólio Profissional!</h1>

        <section className={style.apresentacao}>
          <div className={style.texto_apresentacao}>
            <h2>Olá! Me chamo Mariana Marques</h2>
            <h1>Desenvolvedora de Sistemas</h1>
            <h3>
              Sou apaixonada por transformar ideias em soluções digitais inovadoras. Com experiência em tecnologias como VsCode, Git e MySql, crio aplicações eficientes que fazem a diferença. Meu compromisso é com a excelência e a inovação, sempre buscando desafios que me permitam crescer profissionalmente.
            </h3>
            <button onClick={gerarDocumentoWord}>Curriculo <img src={download} alt="" /></button>
            <div className={style.icons}>
              <a target='_blank' href="https://www.facebook.com/profile.php?id=100014218459495"><img src={face} alt="facebook" /></a>
              <a target='_blank' href="https://www.instagram.com/xmarimarques/?next=%2F"><img src={insta} alt="instagram" /></a>
              <img onClick={handleZap} src={whats} alt="whatsapp" />
              <a target='_blank' href='https://github.com/xmarimarquesh'><img src={git} alt="github" /></a>
              <a target='_blank' href='https://www.linkedin.com/in/mariana-hipolito-386810300/'><img src={linkedin} alt="linkedin" /></a>
            </div>
            <hr />
          </div>
          <img className={style.eu} src={eu} alt=""/>
        </section>

        <section className={style.aboutme} id="sobremim">
            <div className={style.sobremim}>
                <h1>Sobre Mim</h1>
                <div className={style.texto_sobremim}>
                    <img src={eu2} alt="eu"/>
                    <h3>Sou Mariana, uma desenvolvedora de sistemas apaixonada por transformar ideias em realidade digital. Desde cedo, a tecnologia me fascinou, e hoje dedico meu tempo a criar soluções inovadoras que fazem a diferença. Com uma experiência em algumas tecnologias e linguagens de programação, adoro enfrentar novos desafios que me permitam crescer e aprender. Quando não estou codificando, você pode me encontrar explorando novas receitas ou novos projetos, sempre em busca de novas inspirações. Estou animada para colaborar em projetos que tenham um impacto positivo e significativo!</h3>
                </div>
            </div>
            <h1>Entre em contato</h1>
            <div className={style.contato}>
                  <a target='_blank' href="https://www.facebook.com/profile.php?id=100014218459495" className={style.item_contato}><img src={face_branco} alt="facebook"/><h2>Mariana Marques</h2></a>
                  <a target='_blank' href="https://www.instagram.com/xmarimarques/?next=%2F" className={style.item_contato}><img src={insta_branco} alt="instagram"/><h2>@xmarimarques</h2></a>
                  <a href='' onClick={handleZap} className={style.item_contato}><img src={whats_branco} alt="whatsapp"/><h2>(41) 9 9750-4019</h2></a>
                  <a target='_blank' href='https://github.com/xmarimarquesh' className={style.item_contato}><img src={git_branco} alt="github"/><h2>xmarimarques</h2></a>
                  <a target='_blank' href='https://www.linkedin.com/in/mariana-hipolito-386810300/' className={style.item_contato}><img src={linkedin_branco} alt="linkedin"/><h2>Mariana Hipolito</h2></a>
            </div>
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
          
        <hr/>

          <section className={style.projetos} id="projetos">
            <h1>Projetos</h1>
            <div className={style.projeto}>
                <div className={style.texto_projeto}>
                    <h2>Coffes Garden</h2>
                    <h3>Tecnologias: PHP, VsCode, MySQL, AJAX, JavaScript, HTML</h3>
                    <p>Um site de uma cafeteria e floricultura 100% funcional e aplicável. Conta com uma interface para o cliente e outra para o administrador.</p>
                    <a target='_blank' href="https://github.com/xmarimarquesh/Coffe">Acesse meu GitHub!</a>
                </div>
                <iframe src={video_coffe}></iframe>
            </div>
            <div className={style.projeto}>
                <iframe src={video_termo}></iframe>
                <div className={style.texto_projeto}>
                    <h2>TERMO</h2>
                    <h3>Tecnologias: Linguagem C, VsCode</h3>
                    <p>O termo é um jogo de advinhação de palavras, tendo dois modos, você deve acertar a palavra com base nas cores verde, vermelho e amarelo.</p>
                    <a target='_blank' href="https://github.com/xmarimarquesh/TERMO.git">Acesse meu GitHub!</a>
                </div>
            </div>
            <div className={style.projeto}>
                <div className={style.texto_projeto}>
                    <h2>PlotPit Library</h2>
                    <h3>Tecnologias: VsCode, SQLServer, JavaScript, HTML, NodeJS, EJS</h3>
                    <p>Um site de uma biblioteca funcional. Conta com uma interface para o cliente e outra para o administrador. Aplicavel em ambiente real.</p>
                    <a target='_blank' href="https://github.com/xmarimarquesh/LibraryManagement">Acesse meu GitHub!</a>
                </div>
                <iframe src={video_bibli}></iframe>
            </div>
          </section>

         
        <footer>Mariana Marques Hipolito - 16/09/2024</footer>
      </main>
    </div>
  );
}

export default App;

