import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function ProcedureList() {

  return (
    <>
    <Header />
    <div className="Search">
    <form
    className="FormSearch"
    method="GET"
    action="http://localhost:8080/serviceCustomers"
    >
    <input className="fieldFormSearch"/>
    <button
          className="send"
          type="submit"
          id="button"
          value="Enviar"
        >Pesquisar</button>
    </form>
    <table classname="table">
      <tr>
        <th classname="tableName">Nome</th>
        <th classname="tableName">Procedimento</th>
      </tr>
      {/* Table goes here 
        <tr>
          <td >Nome</td>
          <td >Procedimento</td>
        </tr>
        */}
    </table>
    </div>
    <Footer />
  </>
  );
}

export default ProcedureList;