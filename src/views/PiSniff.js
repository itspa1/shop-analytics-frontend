import React from "react";
// import { useContext } from "react";
import { fetchPiData } from "../api/piData";
import Sniff from "../components/pisniff";
import moment from "moment";
import SocketContext from "context/socket";

class PiSniff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: "",
      isLoading: true,
      probes: [],
      error: false,
      errorMessage: "",
      rawFrameToggle: false,
      numberOfLines: "",
      isNavOpen: false,
      piDataFileRequestName: moment().startOf("day").toDate(), //"2020-02-12T12:37:04.000Z"//"2020-02-04T15:30:00.000Z" //convert this to utc while sending the request
    };
  }

  async componentDidMount() {
    try {
      // const Socket = () => {
      //   const contextValue = useContext(SocketContext);
      // };
      const socket = this.context;
      // console.log(socket);
      socket.on("newData", this.socketDataCallback);
      // const response = await fetchPiData("2020-02-04T15:30:00.000Z");
      let startTime = moment(this.state.piDataFileRequestName).toISOString();
      // .startOf("day")
      // .toISOString();
      const response = await fetchPiData(startTime);
      //   console.log(response);
      let probes = response.data.probes ? response.data.probes : [];
      //   fileContent = fileContent.map((element) => {
      //     return JSON.parse(element);
      //   });
      this.setState({
        probes,
        isLoading: false,
        error: false,
        errorMessage: "",
        socket: socket,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.response.data.error
          ? error.response.data.error
          : error.message,
        isLoading: false,
      });
    }
  }

  async componentWillUnmount() {
    //remove the event handlers on the socket, because this will also be used by other components?
    this.state.socket.removeAllListeners("newData");
  }

  async _fetchPiData(date, numberOfLines) {
    try {
      const response = await fetchPiData(
        moment(date)
          .startOf("day")
          .toISOString(),
        numberOfLines,
      );
      let probes = response.data.probes ? response.data.probes : [];
      //   fileContent = fileContent.map((element) => {
      //     return JSON.parse(element);
      //   });
      this.setState({
        probes,
        isLoading: false,
        error: false,
        errorMessage: "",
      });
    } catch (error) {
      // console.log(error);
      this.setState({
        probes: [],
        error: true,
        errorMessage: error.response.data.error
          ? error.response.data.error
          : error.message,
        isLoading: false,
      });
    }
  }

  rawFrameToggleHandler = (event) => {
    event.preventDefault();
    this.setState({ rawFrameToggle: !this.state.rawFrameToggle });
  };

  datePickerHandler = (date) => {
    let numberOfLines = this.state.numberOfLines;
    // console.log(moment(date).toISOString());
    if (!!date) {
      this.setState(
        { piDataFileRequestName: date, isLoading: true },
        () => this._fetchPiData(date, numberOfLines),
      );
    }
  };

  handleMessageDismiss = () => {
    this.setState({ error: false, errorMessage: "" });
  };

  socketDataCallback = (data) => {
    //append the incoming new data on the socket to the existing state which will then re render the component with the new state
    if (
      moment(data.timestamp, "YYYY-MM-DDTHH:mm:ssZ")
        .startOf("day")
        .isSame(moment(this.state.piDataFileRequestName).startOf("day"))
    ) {
      let deviceMacId = data.deviceMacId;
      let probes = [];
      let object = data.frame.probes;
      // data.frame.probes.forEach((object) => {
      if (object.directed && object.directed.length) {
        let directedProbes = object.directed.map((probe) => ({
          deviceMacId,
          directedProbe: probe,
          nullProbe: null,
        }));
        probes.push(...directedProbes);
      }
      if (object.null && object.null.length) {
        let nullProbes = object.null.map((probe) => ({
          deviceMacId,
          nullProbe: probe,
          directedProbe: null,
        }));
        probes.push(...nullProbes);
      }
      // });
      // const probes = data.frame.probes;
      this.setState({
        probes: [...this.state.probes, ...probes],
        error: false,
        errorMessage: "",
      });
    }
  };

  render() {
    return (
      <Sniff
        isLoading={this.state.isLoading}
        probes={this.state.probes}
        rawFrameToggle={this.state.rawFrameToggle}
        error={this.state.error}
        errorMessage={this.state.errorMessage}
        piDataFileRequestName={this.state.piDataFileRequestName}
        rawFrameToggleHandler={this.rawFrameToggleHandler}
        datePickerHandler={this.datePickerHandler}
        handleMessageDismiss={this.handleMessageDismiss}
        toggleNav={this.toggleNav}
      />
    );
  }
}

PiSniff.contextType = SocketContext;

export default PiSniff;
