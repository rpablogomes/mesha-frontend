import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
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

  const [doctors, setDoctors] = useState([]);

  function getDoctors() {
    axios.get("http://localhost:8080/doctors").then((response) => {
      setDoctors(response.data.body);
    });
  }

  useEffect(() => {
    getDoctors();
  }, []);

  // const doctors = [
  //   {name: "Pablo", surname: "Gomes"},
  //   {name: "João", surname: "Silva"},
  //   {name: "Pedro", surname: "Sousa"}
  // ]

  return (
    <>
      <Header />
      <div className={classes.root} className="Search">
        <div>
          <TextField
            className="FormSearch"
            id="standard-full-width"
            label="Pesquisar"
            style={{ margin: 8 }}
            placeholder="id do atendimento "
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <TableContainer className="table" component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Sobrenome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor, index) => (
                <TableRow key={doctor.name + index}>
                  <TableCell component="th" scope="row">
                    {doctor.name}
                  </TableCell>
                  <TableCell align="center">{doctor.surname}</TableCell>
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
