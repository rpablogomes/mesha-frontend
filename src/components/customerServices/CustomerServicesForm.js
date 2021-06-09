import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useParams } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const axios = require("axios");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const [customerServices, setCustomerServices] = useState([]);
  const [procedures, setProcedures] = useState([]);
  const [totaValue, setTotalValue] = useState([]);

  const classes = useStyles();

  let { id } = useParams();

  const getCustomerServices = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:8080/customerServices/${id}`
    );
    setCustomerServices(response.data.body.user);
    setProcedures(response.data.body.procedures);
    setTotalValue(response.data.body.total_value);
  }, [id]);
  useEffect(() => {
    getCustomerServices();
  }, [getCustomerServices]);

  console.log(procedures, customerServices);
  return (
    <>
      <Header />
      <div className="Form">
      <h2>{customerServices.name}</h2>
      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Procedimentos</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Doutor</TableCell>
              <TableCell align="right">Comissão do Doutor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {procedures.map((procedure) => (
              <TableRow key={procedure.name}>
                <TableCell component="th" scope="row">
                  {procedure.name}
                </TableCell>
                <TableCell align="right">{procedure.description}</TableCell>
                <TableCell align="right">R${procedure.value}</TableCell>
                <TableCell align="right">
                  {procedure.doctor.name} {procedure.doctor.surname}
                </TableCell>
                <TableCell align="right">
                  R${procedure.doctor.commission}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Total a Pagar: R${totaValue}</h3>
      </div>
      <Footer />
    </>
  );
}
