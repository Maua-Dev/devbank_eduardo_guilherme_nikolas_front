import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../componentes/header";
import Saldo from "../componentes/saldo.tsx";

function DepositoPagina() {
  const navigate = useNavigate();
  const [quantidades, setQuantidades] = useState<{ [valor: number]: number }>({});
  const [valorDepositado, setValorDepositado] = useState(0);
  const [reloadSaldo, setReloadSaldo] = useState(0);

  const cedulas = [2, 5, 10, 20, 50, 100, 200];

  function atualizarQuantidade(valor: number, qtd: number) {
    const novasQuantidades = { ...quantidades, [valor]: qtd };
    setQuantidades(novasQuantidades);

    const novoTotal = cedulas.reduce(
      (acc, val) => acc + (novasQuantidades[val] || 0) * val,
      0
    );
    setValorDepositado(novoTotal);
  }

  async function handleDepositar() {
    if (valorDepositado <= 0) {
      alert("Você precisa selecionar pelo menos uma cédula.");
      return;
    }

    try {
      const response = await fetch("https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quantidades),
      });

      if (response.status === 201) {
        const data = await response.json();
        alert("Depósito realizado com sucesso! Novo saldo: R$ " + data.current_balance);
        setReloadSaldo((prev) => prev + 1);
        navigate("/principal");
      } else if (response.status === 403) {
        alert("Erro ao realizar depósito: acesso negado.");
      } else {
        alert("Erro inesperado ao realizar depósito.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro ao se conectar com o servidor.");
    }
  }

  return (
    <>
      <Header />
      <div className="deposito-pagina">
        <div className="topo-info">
          <Saldo reloadTrigger={reloadSaldo} />
          <div className="info-box">Quantidade depositada: R$ {valorDepositado}</div>
        </div>

        <div className="conteudo">
          <div className="instrucao">
            Selecione as cédulas e a quantidade que você deseja.
          </div>

          <div className="container-cedulas">
            {cedulas.map((valor) => (
              <div className="cedula-box" key={valor}>
                <div className="cedula">R$ {valor}</div>
                <div className="controle">
                  <div className="quantidade-label">Quantidade</div>
                  <div className="quantidade-controle">
                    <button
                      onClick={() =>
                        atualizarQuantidade(valor, Math.max((quantidades[valor] || 0) - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span>{quantidades[valor] || 0}</span>
                    <button
                      onClick={() =>
                        atualizarQuantidade(valor, (quantidades[valor] || 0) + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="botoes">
            <button className="botao" onClick={() => navigate("/principal")}>
              Voltar
            </button>
            <button className="botao" onClick={handleDepositar}>
              Depositar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepositoPagina;
