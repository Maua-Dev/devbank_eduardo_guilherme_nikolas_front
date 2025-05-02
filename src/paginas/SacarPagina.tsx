import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../componentes/header";
import Saldo from "../componentes/saldo.tsx";

function SacarPagina() {
  const navigate = useNavigate();
  const [quantidades, setQuantidades] = useState<{ [valor: number]: number }>({});
  const [valorSacado, setValorSacado] = useState(0);
  const [saldo, setSaldo] = useState(1000);

  const cedulas = [2, 5, 10, 20, 50, 100, 200];

  function atualizarQuantidade(valor: number, qtd: number) {
    const novasQuantidades = { ...quantidades, [valor]: qtd };
    setQuantidades(novasQuantidades);

    const novoTotal = cedulas.reduce(
      (acc, val) => acc + (novasQuantidades[val] || 0) * val,
      0
    );
    setValorSacado(novoTotal);
  }

  function handleSacar() {
    if (valorSacado <= 0) {
      alert("Você precisa selecionar pelo menos uma cédula.");
      return;
    }

    fetch("https://r2ctcz6soxknyb7j5b64ffdsnm@fyfz.lambda-url.us-west-2.on.aws/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: quantidades }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Saque realizado com sucesso!");
        setSaldo(data.balance);
        navigate("/principal");
      })
      .catch(() => alert("Erro ao realizar saque."));
  }

  return (
    <>
      <Header />
      <div className="deposito-pagina">
        <div className="topo-info">
          <Saldo />
          <div className="info-box">Quantidade Sacada: R$ {valorSacado}</div>
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
            <button className="botao" onClick={handleSacar}>
              Sacar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SacarPagina;
