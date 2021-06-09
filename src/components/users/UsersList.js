import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  function getUsers() {
    axios.get("http://localhost:8080/users").then((response) => {
      setUsers(response.data.body);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="Search">
        <TableContainer className="table" component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="middle">Sobrenome</TableCell>
            </TableRow>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.name + index}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="middle">{user.surname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
}
