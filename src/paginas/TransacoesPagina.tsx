import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../componentes/header";

function TransacoesPagina() {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <div>
      <h1 className="historico">Histórico de Transações</h1>
      <div className="botoes">
        <button className="botao" onClick={() => navigate("/principal")}>Voltar</button>
      </div>
    </div>
    </>
  );
}

export default TransacoesPagina;
