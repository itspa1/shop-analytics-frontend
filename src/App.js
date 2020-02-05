import React from "react";
import "./App.css";
import SocketContext from "./context/socket";
import Dashboard from "./containers/dashboard";
import io from "socket.io-client";

const socket = io("localhost:8000");

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
