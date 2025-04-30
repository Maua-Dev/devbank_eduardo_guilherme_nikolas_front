import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimeiraPagina from "./paginas/PrimeiraPagina";
import SegundaPagina from "./paginas/SegundaPagina";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={PrimeiraPagina} />
          <Route path="/segunda" element={<SegundaPagina />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
