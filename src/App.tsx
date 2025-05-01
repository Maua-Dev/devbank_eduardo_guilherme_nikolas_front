import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";
import DepositoPagina from "./paginas/DepositoPagina"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/principal" element={<SegundaPagina />} />
        <Route path="/deposito" element={<DepositoPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
