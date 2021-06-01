import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Doctors() {
  return (
    <div>
      <Header />

      <div class="menu">
        <a class="links" href="/doctors/register">
          Cadastrar
          <br />
          Doutor
        </a>
        <a class="links" href="/doctors/list">
          Buscar
          <br />
          Doutores
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Doctors;
