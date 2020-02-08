import React from "react";
import { fetchPiData } from "../api/piData";
import DashboardComponent from "../components/dashboard";
import moment from "moment";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fileContent: "",
      error: false,
      errorMessage: "",
      rawFrameToggle: false,
      piDataFileRequestName: moment().toDate() //"2020-02-04T15:30:00.000Z" //convert this to utc while sending the request
    };
  }

  async componentDidMount() {
    try {
      this.props.socket.on("newData", this.socketDataCallback);
      // const response = await fetchPiData("2020-02-04T15:30:00.000Z");
      const response = await fetchPiData(this.state.piDataFileRequestName);
      let fileContent = response.data.fileContent
        ? response.data.fileContent
        : [];
      fileContent = fileContent.map(element => {
        return JSON.parse(element);
      });
      this.setState({ fileContent, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, errorMessage: error.message });
    }
  }

  async componentWillUnmount() {
    //remove the event handlers on the socket, because this will also be used by other components?
    this.props.socket.removeAllListeners("newData");
  }

  async _fetchPiData(date) {
    try {
      const response = await fetchPiData(moment(date).toISOString());
      let fileContent = response.data.fileContent
        ? response.data.fileContent
        : [];
      fileContent = fileContent.map(element => {
        return JSON.parse(element);
      });
      this.setState({ fileContent, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, errorMessage: error.message });
    }
  }

  rawFrameToggleHandler = (event, object) => {
    event.preventDefault();
    this.setState({ rawFrameToggle: object.checked });
  };

  datePickerHandler = date => {
    // console.log(moment(date).toISOString());
    if (!!date) {
      this.setState({ piDataFileRequestName: date, isLoading: true }, () =>
        this._fetchPiData(date)
      );
    }
  };

  socketDataCallback(data) {
    console.log(data);
  }

  render() {
    return (
      <DashboardComponent
        isLoading={this.state.isLoading}
        fileContent={this.state.fileContent}
        rawFrameToggle={this.state.rawFrameToggle}
        piDataFileRequestName={this.state.piDataFileRequestName}
        rawFrameToggleHandler={this.rawFrameToggleHandler}
        datePickerHandler={this.datePickerHandler}
      />
    );
  }
}

export default Dashboard;
