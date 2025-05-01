import Header from "../componentes/header";
import CardOpcao from "../componentes/CardOpcao";
import "../App.css";
import Saldo from "../componentes/saldo.tsx";


function SegundaPagina() {
  return (
    
    <div className="segunda-pagina">
      <Header />
      <div className="conteudo">
        <div className="cabecalho-acao">
          <h2 className="instrucao">O que você deseja fazer?</h2>
          <Saldo />
        </div>
        <div className="cards-opcoes">
          <CardOpcao texto="Depositar" />
          <CardOpcao texto="Sacar" />
          <CardOpcao texto="Transações" />
        </div>
      </div>
    </div>
  );
}

export default SegundaPagina;
