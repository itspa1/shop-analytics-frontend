import React from "react";
import { useContext } from "react";
import { Card, Button } from "reactstrap";
import SocketContext from "context/socket";
import classNames from "classnames";

class DebugFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: "",
      imageData: "",
      debug: false,
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const Socket = () => {
        const contextValue = useContext(SocketContext);
      };
      const socket = this.context; //this.context;
      //   console.log(socket);
      socket.on("debugFrame", this.debugFrameCallback);

      this.setState({ socket });
    } catch (error) {
      console.log(error);
    }
  }

  toggleDebugFrame = (e) => {
    e.preventDefault();
    let currentDebugValue = this.state.debug;
    let nextDebugValue = !currentDebugValue;
    this.state.socket.emit("toggleDebug", nextDebugValue);
    this.setState({
      debug: nextDebugValue,
      imageData: "",
    });
  };

  debugFrameCallback = (data) => {
    this.setState({ imageData: data });
  };

  render() {
    return (<div className="content">
      <Button
        tag="label"
        className={classNames("btn-simple", {
          active: this.state.debug,
        })}
        color="info"
        id="0"
        size="sm"
        onClick={this.toggleDebugFrame}
      >
        <input
          defaultChecked
          className="d-none"
          name="options"
          type="radio"
        />
        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
          DEBUG MODE
        </span>
        <span className="d-block d-sm-none">
          <i className="tim-icons icon-single-02" />
        </span>
      </Button>
      <Card>
        <img src={this.state.imageData}></img>
      </Card>
    </div>);
  }
}

DebugFrame.contextType = SocketContext;

export default DebugFrame;
