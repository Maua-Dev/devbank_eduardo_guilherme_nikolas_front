import { useEffect, useState } from "react";

function Header() {
  const [usuario, setUsuario] = useState({
    nome: "",
    agencia: "",
    conta: ""
  });

  useEffect(() => {
    fetch("https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/")
      .then((res) => res.json())
      .then((data) => {
        setUsuario({
          nome: data.nome,
          agencia: data.agencia,
          conta: data.conta
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        alert("Erro ao carregar dados do usuário");
      });
  }, []);

  return (
    <div className="topo">
      <h1 className="logo">
        DEV <span className="destaque">BANK</span>
      </h1>
      <div className="info-usuario">
        <p>Nome: {usuario.nome}</p>
        <p>Agência: {usuario.agencia}</p>
        <p>Conta: {usuario.conta}</p>
      </div>
    </div>
  );
}

export default Header;
