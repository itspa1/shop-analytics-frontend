import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  Container,
  Badge,
  ToggleButton,
  ButtonGroup,
  Spinner,
  Modal,
  Collapse,
  NavItem,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

const Sniff = (props) => {
  let directedProbePingCount = 0;
  let nullProbePingCount = 0;
  let probes = [];
  let directedPings = [];
  let nullPings = [];
  let pings = [];
  const data = {
    columns: [
      {
        label: "Timestamp",
        field: "timestamp",
        sort: "asc",
        width: 50,
      },
      {
        label: "MAC ID",
        field: "mac_id",
        sort: "asc",
        width: 50,
      },
      {
        label: "RSSI",
        field: "rssi",
        sort: "asc",
        width: 50,
      },
      {
        label: "SSID",
        field: "ssid",
        sort: "asc",
        width: 50,
      },
    ],
    rows: pings,
  };
  var UniqueNames = [];

  if (!props.error && !props.isLoading) {
    probes = props.probes;
    if (probes.length) {
      probes.forEach((element, index) => {
        if (element.nullProbe) {
          nullProbePingCount += 1;
          nullPings.push(element.nullProbe);
          pings.push(element.nullProbe);
        }
        if (element.directedProbe) {
          directedProbePingCount += 1;
          UniqueNames.push(element.directedProbe.ssid);
          directedPings.push(element.directedProbe);
          pings.push(element.directedProbe);
        }
        // if (element.frame.probes.directed.length) {
        //   directedProbePingCount += element.frame.probes.directed.length;
        //   UniqueNames.push(element.frame.probes.directed.map(function (d) {
        //     return d.ssid;
        //   }));
        //   directedPings.push(...element.frame.probes.directed);
        // }
        // if (element.frame.probes.null.length) {
        //   nullProbePingCount += element.frame.probes.null.length;
        //   nullPings.push(...element.frame.probes.null);
        // }
        // if (
        //   element.frame.probes.null.length ||
        //   element.frame.probes.directed.length
        // ) {
        //   pings.push(...element.frame.probes.directed);
        //   pings.push(...element.frame.probes.null);
        // }
      });
    }
  }
  var merged = [].concat.apply([], UniqueNames);
  var names = merged.filter((item, i, ar) => ar.indexOf(item) === i);
  const listItems = names.map((name) => <li key={name}>{name}</li>);

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Simple Table</CardTitle>
            </CardHeader>
            {props.error
              ? (
                <Modal.Dialog size="lg">
                  <Modal.Header closeButton onHide={props.handleMessageDismiss}>
                    <Modal.Title>Something went wrong</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>{props.errorMessage}</p>
                  </Modal.Body>
                </Modal.Dialog>
              )
              : (
                ""
              )}
            {props.isLoading
              ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Fetching Data</span>
                </Spinner>
              )
              : probes.length
              ? (
                props.rawFrameToggle
                  ? (
                    <div>
                      {probes.map((element, key) => {
                        return <div id="raw" className="col-12">
                          <p>
                            key={key}>{JSON.stringify(element)}
                          </p>
                        </div>;
                        // return (
                        //   <JSONPretty
                        //     id="json-pretty"
                        //     key={key}
                        //     data={element}
                        //     style={{ fontSize: "1.1em" }}
                        //     mainStyle="padding:1em"
                        //     valueStyle="font-size:1.5em"
                        //   ></JSONPretty>
                        // );
                      })}
                    </div>
                  )
                  : (
                    <Container fluid>
                      <Row>
                        {/* <div className="col-12 order-sm-last col-md-4">
                          <div className="card">
                            <h2 className="card-header bg-dark text-white">
                              No.of Directed Probes
                            </h2>
                            <div className="card-body">
                              <h2>
                                {directedProbePingCount}
                              </h2>
                            </div>
                          </div>
                          <div className="card">
                            <h2 className="card-header bg-dark text-white">
                              No.of Null Probes
                            </h2>
                            <div className="card-body">
                              <h2>
                                {nullProbePingCount}
                              </h2>
                            </div>
                          </div>
                          <div className="card">
                            <h2 className="card-header bg-dark text-white">
                              Unique SSID
                            </h2>
                            <div className="card-body">
                              <ul><h5>{listItems}</h5></ul>
                            </div>
                          </div>
                        </div> */}
                        <CardBody>
                          <MDBDataTable
                            entriesOptions={[20, 50, 100, 200, 500]}
                            maxHeight="380px"
                            pagesAmount={5}
                            noBottomColumns
                            responsive
                            striped
                            bordered
                            small
                            hover
                            data={data}
                            scrollX
                            scrollY
                            entries={20}
                          />
                        </CardBody>
                      </Row>
                    </Container>
                  )
              )
              : (
                <h1>
                  <Badge variant="dark">No Content</Badge>
                </h1>
              )}
            {/* {console.log(props.probes)} */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Sniff;
