// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Eu from "../../img/foto.png";
import "./home.css";

function Home() {
  return (
    <div className="t">
      <Header />
      <div className="App">
        <div className="teste">
          <div className="coluna-arrumada ">
            <div className="image-left">
              <img className="eu" src={Eu} alt="minha foto" />
            </div>
            <div className="container">
              <h2 className="conteudo-principal-titulo">QUEM SOU EU ?</h2>
              <p>
                Olá, prazer meu nome é Murilo Marcondes Silva terminei em 2022 o
                3º ano do ensino médio no SESI 111 - IPIRANGA,
              </p>
              <p>
                {" "}
                tambêm fazendo um técnico de desenvolvimento de sistemas no
                Senai Suiço Brasileiro - Santo Amaro, <br />
                com previsão para termino em julho de 2023.
              </p>{" "}
              <br />
              <p>
                01/03/2005, 17 anos <br />
                Minhas expectativas para o futuro : <br />
                <br />
                - Ser um ótimo desenvolvedor full Stack. <br />
                - Ter uma carreira instavel e bem remunerada <br />
                <br />
                Entrei para a área de programação pois me identifico e sempre
                fui muito interessado pela mesma, <br />
                tambem tive bastante influência da minha mãe que trabalha com a
                área de Técnologia da Informação. <br />
                Gosto muito de esportes como: vôlei, futebol, basquete e entre
                outras práticas <br />
                e a maior parte do meu tempo livre eu passo conversando com a
                minha família e saindo para me divertir com os amigos,
                <br />
                além de gostar muito de assistir filmes e séries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
