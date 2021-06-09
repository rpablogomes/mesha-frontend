import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Header from "../Header";
import Footer from "../Footer";

export default function LayoutTextFields() {
  const [id, setId] = useState("");
  console.log(id);
  return (
    <>
      <Header />
      <form className="Form" autoComplete="off">
        <TextField
          className="fieldForm"
          id="outlined-error"
          label="Id"
          variant="outlined"
          onChange={(e) => setId(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          href={`http://localhost:3000/customerServices/${id}`}
        >
          Buscar
        </Button>
      </form>
      <Footer />
    </>
  );
}
