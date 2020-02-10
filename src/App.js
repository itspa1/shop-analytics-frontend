import React from "react";
import "./App.css";
import { socketUrl } from "./configs/env";
import ReactContext from "./context";
import Dashboard from "./containers/dashboard";
import io from "socket.io-client";
import { authRoutes } from "./routes";

const socket = io(socketUrl);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        console.log(token);
      }
    } catch (error) {
      console.error(error);
    }
  }

  logout = async () => {
    try {
      await localStorage.removeItem("jwtToken");
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const token = this.state.token;
    if (!this.state.token) {
      return (
        <ReactContext.Provider value={token}>
          <div className="App">{authRoutes()}</div>
        </ReactContext.Provider>
      );
    }
    return (
      <ReactContext.Provider value={{ socket, token }}>
        <div className="App">
          <Dashboard socket={socket} />
        </div>
      </ReactContext.Provider>
    );
  }
}

export default App;
