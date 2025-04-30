import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/segunda" element={<SegundaPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
