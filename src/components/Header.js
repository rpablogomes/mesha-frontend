import React from "react";

function Header() {

  return (
    <header>
            <div className="title">
            Teste da Mesha
            </div>
            <div class="header">
          <a class="links" href="/users">Usuários</a>
          <a class="links" href="/doctors">Doutores</a>
          <a class="links" href="/procedures">Procedimentos</a>
    </div>
    </header>
  );
}

export default Header;
