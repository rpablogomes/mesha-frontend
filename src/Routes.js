import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./components/App";
import Users from "./components/Users";
import UsersRegister from "./components/UsersRegister";
import Doctors from "./components/Doctors";
import DoctorsRegister from "./components/DoctorsRegister";
import Procedures from "./components/Procedures"
import ProceduresRegister from "./components/ProceduresRegister"

function Routes() {
 
    return (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/register" component={UsersRegister} />
        <Route exact path="/doctors" component={Doctors} />
        <Route path="/doctors/register" component={DoctorsRegister} />
        <Route exact path="/procedures/" component={Procedures} />
        <Route path="/procedures/register" component={ProceduresRegister} />
      </Switch>
    );
  }
  
  export default Routes;
  