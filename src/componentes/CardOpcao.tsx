import { useNavigate } from "react-router-dom";
import "../App.css";

function CardOpcao({ texto }: { texto: string }) {
  const navigate = useNavigate();

  function handleClick() {
    if (texto === "Depositar") navigate("/deposito");
    else if (texto === "Sacar") navigate("/saque");
    else if (texto === "Transações") navigate("/transacoes");
  }

  return (
    <div className="card-opcao" onClick={handleClick}>
      <p>{texto}</p>
    </div>
  );
}

export default CardOpcao;
