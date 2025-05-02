import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";
import DepositoPagina from "./paginas/DepositoPagina";
import SacarPagina from "./paginas/SacarPagina";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={PrimeiraPagina} />
          <Route path="/principal" element={<SegundaPagina />} />
          <Route path="/deposito" element={<DepositoPagina />} />
          <Route path="saque" element={<SacarPagina />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
