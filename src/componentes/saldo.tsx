import { useEffect, useState } from "react";

function Saldo() {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    fetch("https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/")
      .then((res) => res.json())
      .then((data) => {
        setSaldo(data["current_balance"]);
      })
      .catch((error) => {
        console.error("Erro ao buscar saldo:", error);
        alert("Erro ao carregar o saldo.");
      });
  }, []);

  if (saldo === null) {
    return <p>Carregando saldo...</p>;
  }

  return (
    <div className="saldo">
      <p><strong>Saldo Atual:</strong> R$ {Number(saldo).toFixed(2)}</p>
    </div>
  );
}

export default Saldo;
