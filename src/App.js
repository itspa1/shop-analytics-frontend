import React from "react";
import "./App.css";
import { socketUrl } from "./configs/env";
import SocketContext from "./context/socket";
import Dashboard from "./containers/dashboard";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io(socketUrl);

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Dashboard socket={socket} />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
