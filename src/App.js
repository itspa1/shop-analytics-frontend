import React from "react";
import "./App.css";
import { socketUrl } from "./configs/env";
import SocketContext from "./context/socket";
import Dashboard from "./containers/dashboard";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';

const socket = io(socketUrl);

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <div className="App">
          <Dashboard socket={socket} />
        </div>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
