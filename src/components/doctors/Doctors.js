import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <a className="menu" href="/doctors/register">
          <Button variant="contained" color="primary">
            Cadastrar <br /> Doutor
          </Button>
        </a>
        <a className="menu" href="/doctors/list">
          <Button variant="contained" color="primary">
            Buscar
            <br />
            Doutores
          </Button>
        </a>
      </div>
      <Footer />
    </>
  );
}
