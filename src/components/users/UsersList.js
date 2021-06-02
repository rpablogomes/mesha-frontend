import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function UsersList() {

  return (
    <>
      <Header />
      <table className="table">
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
        </tr>
      </table>
      <Footer />
    </>
  );
}

export default UsersList;
