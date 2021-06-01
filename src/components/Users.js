import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Users() {
  return (
    <div>
      <Header />

      <div class="menu">
          <a class="links" href="/users/register">Cadastrar<br/>Usuário</a>
          <a class="links" href="/users/list">Buscar<br/>Usuários</a>
    </div>

      <Footer />
    </div>
  );
}

export default Users;
