import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";
import DepositoPagina from "./paginas/DepositoPagina"; 
import SacarPagina from "./paginas/SacarPagina";
import TransacoesPagina from "./paginas/TransacoesPagina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/principal" element={<SegundaPagina />} />
        <Route path="/deposito" element={<DepositoPagina />} />
        <Route path="/saque" element={<SacarPagina />} />
        <Route path="/transacoes" element={<TransacoesPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
