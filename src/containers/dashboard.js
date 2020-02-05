import React from "react";
import { fetchPiData } from "../api/piData";
import DashboardComponent from "../components/dashboard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: "",
      error: false,
      errorMessage: ""
    };
  }

  async componentDidMount() {
    try {
      this.props.socket.on("newData", this.socketDataCallback);
      //   const response = await fetchPiData("2020-02-04T15:30:00.000Z");
      const response = await fetchPiData();
      let fileContent = response.data.fileContent
        ? response.data.fileContent
        : [];
      fileContent.forEach(element => JSON.parse(element));
      this.setState({ fileContent });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, errorMessage: error.message });
    }
  }

  async componentWillUnmount() {
    //remove the event handlers on the socket, because this will also be used by other components?
    this.props.socket.removeAllListeners("newData");
  }

  socketDataCallback(data) {
    console.log(data);
  }

  render() {
    return <DashboardComponent fileContent={this.state.fileContent} />;
  }
}

export default Dashboard;
