import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

  const [procedures, setProcedures] = useState([]);

  function getProcedures() {
    axios.get("http://localhost:8080/procedures").then((data) => {
      console.log(data);
      setProcedures(data.data.body);
    });
  }

  useEffect(() => {
    getProcedures();
  }, []);

  return (
    <>
      <Header />
      <div className="Search">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Procedimento</TableCell>
                <TableCell align="middle">Descrição</TableCell>
                <TableCell align="middle">Doutor</TableCell>
                <TableCell align="middle">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {procedures.map((procedure) => (
                <TableRow key={procedure.procedure}>
                  <TableCell component="th" scope="row">
                    {procedure.name}
                  </TableCell>
                  <TableCell align="middle">{procedure.description}</TableCell>
                  <TableCell align="middle">{procedure.doctorId}</TableCell>
                  <TableCell align="middle">{procedure.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
      <Footer />
    </>
  );
}
