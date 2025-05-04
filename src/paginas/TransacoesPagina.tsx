import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../componentes/header";
import Saldo from "../componentes/saldo.tsx";

function TransacoesPagina() {
  const navigate = useNavigate();
  const [transacoes, setTransacoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchTransacoes() {
    try {
      const response = await fetch("https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/history");

      if (response.ok) {
        const data = await response.json();
        setTransacoes(data.all_transactions);
      } else {
        console.error("Erro ao carregar histórico de transações:", response.status);
        alert("Erro ao carregar histórico.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro ao se conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTransacoes();
  }, []);

  return (
    <>
      <Header />
      <div className="transacoes-pagina">
        <div className="saldo-centraliza">
          <Saldo reloadTrigger={0} />
        </div>

        <div className="conteudo">
          <h2>Histórico de Transações</h2>

          {loading ? (
            <div>Carregando...</div>
          ) : (
            <div className="histórico-transacoes">
              {transacoes.length === 0 ? (
                <div>Nenhuma transação encontrada.</div>
              ) : (
                <ul>
                  {transacoes.map((transacao, index) => (
                    <li key={index}>
                      <div
                        className={
                        transacao.type === "deposit"
                          ? "label-deposito"
                          : "label-saque"
                        }
                      >
                        <strong>
                          {transacao.type === "deposit" ? "Depósito" : "Saque"}
                        </strong>
                      </div>
                      <div>
                        <strong>Valor:</strong> R$ {transacao.value.toFixed(2)}
                      </div>
                      <div>
                        <strong>Saldo Atual:</strong> R$ {transacao.current_balance.toFixed(2)}
                      </div>
                      <div>
                        <strong>Data:</strong> {new Date(transacao.timestamp).toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="botoes">
          <button className="botao" onClick={() => navigate("/principal")}>Voltar</button>
        </div>
      </div>
    </>
  );
}

export default TransacoesPagina;
