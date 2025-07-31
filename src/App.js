// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import AppRoutes from "./routes"; // Nome diferente para não confundir

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
