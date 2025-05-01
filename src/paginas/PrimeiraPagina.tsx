import "../App.css";
import "../Index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PrimeiraPagina() {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (
      link ===
      "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"
    ) {
      navigate("/principal");
    } else {
      alert("Link inválido. Por favor, cole o link correto da API.");
    }
  };
  return (
    <>
      <div className="primeira-pagina">
        <h1></h1>
        <img
          src="pngDevBank.png"
          alt="Logo do DevBank"
          className="logo-devbank"
        />
      </div>

      <div className="container-link">
        <input
          type="text"
          placeholder="Cole o link da API aqui"
          className="input-link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="botao-link" onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
}

export default PrimeiraPagina;
