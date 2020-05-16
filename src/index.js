import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { socketUrl } from "./configs/env";
import SocketContext from "./context/socket";

import io from "socket.io-client";

import MainLayout from "layouts/Main/Main.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const socket = io(socketUrl);

const hist = createBrowserHistory();

ReactDOM.render(
  <SocketContext.Provider value={socket}>
    <Router history={hist}>
      <Switch>
        <Route path="/main" render={(props) =>
          <MainLayout {...props} socket={socket} />} />
        <Redirect from="/" to="/main/dashboard" />
      </Switch>
    </Router>
  </SocketContext.Provider>,
  document.getElementById("root"),
);
