import React from "react";
import Iframe from "react-iframe";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class IframeComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isLoading: true,
  //       duration: "5s",
  //       from: "",
  //       to: "",
  //     };
  //   }

  //   async componentDidMount() {
  //     let to = +moment();
  //     let from = +moment().subtract("5", "minutes");
  //     this.setState({
  //       to,
  //       from,
  //     });
  //   }

  //   setDuration = (duration) => {
  //     let to = +moment();
  //     let from = +moment().subtract("5", "minutes");
  //     this.setState({
  //       to,
  //       from,
  //       duration,
  //     });
  //   };

  render() {
    // const url = `http://localhost:5000/d-solo/2q9G60RGk/new-dashboard-copy?orgId=1&from=${this.state.from}&to=${this.state.to}&refresh=${this.state.duration}&panelId=2`;
    // const url =
    //   "http://localhost:5000/d/2q9G60RGk/new-dashboard-copy?orgId=1&from=now-5m&to=now&refresh=5s";
    const url =
      "http://localhost:5000/dashboard/snapshot/cTP4g31FzXiXz3yeV2Zo6R58bEGMK4oQ";
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <Iframe url={url} frameBorder="0" width="100%" height="600px"
                position="relative" />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IframeComponent;
