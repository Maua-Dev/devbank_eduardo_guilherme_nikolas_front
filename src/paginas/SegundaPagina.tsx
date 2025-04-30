import Header from "../componentes/header";
import CardOpcao from "../componentes/CardOpcao";
import "../App.css";

function SegundaPagina() {
  return (
    <div className="pagina">
      <Header />
      <div className="conteudo">
        <div className="cabecalho-acao">
          <h2>O que você deseja fazer?</h2>
          <div className="saldo">Saldo atual: R$ 1000</div>
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
