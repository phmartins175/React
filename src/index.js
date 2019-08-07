import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM (ESTADO DO JOGO)
  const [estado, setestado] = useState("ENTRADA");

  //Palpite
  const [palpite, setpalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setmin] = useState(0);
  const [max, setmax] = useState(300);

  const iniciarJogo = () => {
    setestado("RODANDO");
    setmin(0);
    setmax(300);
    setNumPalpite(1);
    setpalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setmax(palpite);
    const proxpalpite = parseInt((palpite - min) / 2) + min;
    setpalpite(proxpalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setmin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setpalpite(proxPalpite);
  };

  const Acertou = () => {
    setestado("FIM!");
  };
  if (estado == "FIM!") {
    return (
      <div>
        <p>
          Acerteu o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={Acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
