
import style from './Pessoal.module.css';

function Pessoal() {

  return (
    <div className={style.body}>
        <nav>
        <a href="/">voltar</a>
        </nav>
        <main>
            <h1>Seja bem vindo ao meu portfólio Pessoal!</h1>
            <div className={style.item}>
                <h2>Ainda em desenvolvimento...</h2>
                <img src="https://15anos.constancezahn.com/wp-content/themes/cz/assets/images/fifteen/loading.gif" alt=""/>
            </div>
        </main>
        <footer className={style.footerPessoal}>Mariana Marques Hipolito - 08/08/2024</footer>
    </div>
  );
}

export default Pessoal;

