import React, {useState, useEffect} from "react";

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const axios = require('axios');

const useStylesList = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
 return { name, calories, fat, carbs, protein };
}


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

  // const [procedures, setprocedures] = useState([])

  // function getprocedures(){
  //   axios.get("http://localhost:8080/procedures").then(data => {
  //   console.log(data)
  //   })
  // }

  // useEffect(() => {
  //   getprocedures()
    
  // });

  const procedures = [
    {procedure: "Massagem", description: "Massagem para relaxar", valor: 300},
    {procedure: "Odontologia", description: "Cuidado com os dentes", valor: 400},
    {procedure: "Nutrição", description: "Alimentação personalizada", valor: 200},
  ]

  return (
    <>
      <Header />
      <div className={classes.root} className="Search">
        <div>
          <TextField
          clasName="FormSearch"
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
            <TableCell>Procedimento</TableCell>
            <TableCell align="middle">Descrição</TableCell>
            <TableCell align="middle">Valor</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {procedures.map((procedure) => (
            <TableRow key={procedure.procedure}>
              <TableCell component="th" scope="row">
                {procedure.procedure}
              </TableCell>
              <TableCell align="middle">{procedure.description}</TableCell>
              <TableCell align="middle">{procedure.valor}</TableCell>
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