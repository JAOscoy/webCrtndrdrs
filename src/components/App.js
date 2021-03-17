import React, { useState } from "react";
//import "./styles.css";
//import Home from "./pages/Home";
import login from "./pages/login";
import newUser from "./pages/newUser";
//import Register from "./pages/Register";
//import Admin from "./pages/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import oferta from './resources/validation'
//import agujeros from './resources/agujeros.jpg'
import AutoGridLogo from './header';
import Navtabs from './appTool';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <BrowserRouter>
      <AutoGridLogo />
      <Navtabs />
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/newUser" component={newUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
