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

  // const [customerServices, setCustomerServices] = useState([])

  // function getCustomerServices(){
  //   axios.get("http://localhost:8080/customerServices").then(data => {
  //   console.log(data)
  //   })
  // }

  // useEffect(() => {
  //   getcustomerServices()
    
  // });

  const customerServices = [
    {id: 1, user: "Pablo Gomes", procedures: "odontologia"},
    {id: 2, user: "Fernando Dias", procedures: "nutricionista"},
    {id: 3, user: "João Silva", procedures: "terapia"},
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
            <TableCell>id</TableCell>
            <TableCell align="middle">Users</TableCell>
            <TableCell align="middle">Procedure</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {customerServices.map((customerService) => (
            <TableRow key={customerService.customerService}>
              <TableCell component="th" scope="row">
                {customerService.id}
              </TableCell>
              <TableCell align="middle">{customerService.user}</TableCell>
              <TableCell align="middle">{customerService.procedures}</TableCell>
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