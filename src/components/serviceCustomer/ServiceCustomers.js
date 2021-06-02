import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function ServiceCustomer() {
  return (
    <div>
      <Header />

      <div class="menu">
        <a class="links" href="/serviceCustomers/register">
          Cadastrar
          <br />
          Atendimentos
        </a>
        <a class="links" href="/serviceCustomers/list">
          Buscar
          <br />
          Atendimentos
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default ServiceCustomer;
