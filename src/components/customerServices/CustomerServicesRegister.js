import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

const axios = require("axios");

function UsersRegister() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios.get("http://localhost:8080/users").then((data) => {
      setUsers(data.data.body);
    });
  }

  const [procedures, setProcedures] = useState([]);

  function getProcedures() {
    axios.get("http://localhost:8080/procedures").then((response) => {
      setProcedures(response.data.body);
    });
  }

  useEffect(() => {
    getProcedures();
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <form
        className="Form"
        method="POST"
        action="http://localhost:8080/customerServices"
      >
        <label htmlFor="user">Usuário</label>
        <div className="field">
          <select className="fieldForm" type="text" name="userId" required>
            {users.map((user) => (
              <option className="fieldForm" value={user.id}>
                {user.name} {user.surname}
              </option>
            ))}
          </select>
        </div>

        <label htmlFor="procedure">Procedimentos</label>
        <div className="field">
          <select
            className="fieldForm"
            type="text"
            name="proceduresIds[]"
            required
            multiple
          >
            {procedures.map((procedure) => (
              <option className="fieldForm" value={procedure.id}>
                {procedure.name}
              </option>
            ))}
          </select>
        </div>
        <button className="send" type="submit" id="button" value="Enviar">
          Salvar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default UsersRegister;
