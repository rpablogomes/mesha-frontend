import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./components/App";

import Users from "./components/users/Users";
import UsersRegister from "./components/users/UsersRegister";
import UsersList from "./components/users/UsersList";

import Doctors from "./components/doctors/Doctors";
import DoctorsRegister from "./components/doctors/DoctorsRegister";
import DoctorsList from "./components/doctors/DoctorsList";

import Procedures from "./components/procedures/Procedures"
import ProceduresRegister from "./components/procedures/ProceduresRegister"
import ProceduresList from "./components/procedures/ProceduresList"

import ServiceCustomers from "./components/serviceCustomer/ServiceCustomers"
import ServiceCustomersRegister from "./components/serviceCustomer/ServiceCustomersRegister"
import ServiceCustomersList from "./components/serviceCustomer/ServiceCustomersList"


function Routes() {
 
    return (
    <Switch>
        <Route exact path="/" component={App} />

        <Route exact path="/users" component={Users} />
        <Route path="/users/register" component={UsersRegister} />
        <Route path="/users/list" component={UsersList} />

        <Route exact path="/doctors" component={Doctors} />
        <Route path="/doctors/register" component={DoctorsRegister} />
        <Route path="/doctors/list" component={DoctorsList} />

        <Route exact path="/procedures" component={Procedures} />
        <Route path="/procedures/register" component={ProceduresRegister} />
        <Route path="/Procedures/list" component={ProceduresList} />

        <Route exact path="/serviceCustomers" component={ServiceCustomers} />
        <Route path="/serviceCustomers/register" component={ServiceCustomersRegister} />
        <Route path="/serviceCustomers/list" component={ServiceCustomersList} />
      </Switch>
    );
  }
  
  export default Routes;
  