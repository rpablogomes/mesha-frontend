import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Procedures() {
  return (
    <div>
      <Header />

      <div class="menu">
          <a class="links" href="/procedures/register">Cadastrar Procedimento</a>
          <a class="links" href="/procedures/list">Buscar Procedimentos</a>
    </div>

      <Footer />
    </div>
  );
}

export default Procedures;
