import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
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

  const [doctors, setDoctors] = useState([]);

  function getDoctors() {
    axios.get("http://localhost:8080/doctors").then((response) => {
      setDoctors(response.data.body);
    });
  }

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <Header />
      <div className="Search">
          <Table className={classes.table} aria-label="simple table">
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Sobrenome</TableCell>
              </TableRow>
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
      </div>
      <Footer />
    </>
  );
}
