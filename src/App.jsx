import style from './App.module.css';

export default function App() {
  return (
    <div className={style.principal}>
      <div className={style.principal2}>
        <h1>Seja bem vindo(a) ao meu portfólio!</h1>
        <h3>O que deseja saber sobre mim?</h3>
        <div className={style.choice}>
            <a href="\Pessoal" className={style.pessoal}>Vida Pessoal</a>
            <a href="\Profissional" className={style.profissional}c>Vida Profissional</a>
        </div>
    </div>
    <footer>Mariana Marques Hipolito - 08/08/2024</footer>
    </div>
  );
}


