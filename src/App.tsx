import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";
import DepositoPagina from "./paginas/DepositoPagina"; // 👈 IMPORTANTE

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/segunda" element={<SegundaPagina />} />
        <Route path="/deposito" element={<DepositoPagina />} /> {/* 👈 ESSA É A ROTA */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
