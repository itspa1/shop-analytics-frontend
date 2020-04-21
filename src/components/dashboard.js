import React from "react";
import {
  Segment,
  SegmentGroup,
  Header,
  Dimmer,
  Loader,
  Message
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from 'moment'
// import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Container, Row, Navbar, Nav, Badge, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';



const DashboardComponent = props => {
  let directedProbePingCount = 0;
  let nullProbePingCount = 0;
  let fileContent = [];
  let directedPings = [];
  let nullPings = [];
  let pings = [];

  const data = {
    columns: [
      {
        label: 'Timestamp',
        field: 'timestamp',
        sort: 'asc',
        width: 50
      },
      {
        label: 'MAC ID',
        field: 'mac_id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'RSSI',
        field: 'rssi',
        sort: 'asc',
        width: 50
      },
      {
        label: 'SSID',
        field: 'ssid',
        sort: 'asc',
        width: 50
      },
    ],
    rows: pings
  };
  var UniqueNames = []

  if (!props.error && !props.isLoading) {
    fileContent = props.fileContent
    if (fileContent.length) {
      fileContent.forEach((element, index) => {
        if (element.frame.probes.directed.length) {
          directedProbePingCount += element.frame.probes.directed.length
          UniqueNames.push(element.frame.probes.directed.map(function (d) { return d.ssid; }))
          directedPings.push(...element.frame.probes.directed)
        }
        if (element.frame.probes.null.length) {
          nullProbePingCount += element.frame.probes.null.length
          nullPings.push(...element.frame.probes.null)
        }
        if (element.frame.probes.null.length || element.frame.probes.directed.length) {
          pings.push(...element.frame.probes.directed)
          pings.push(...element.frame.probes.null)
        }
      })
    }
  }
  var merged = [].concat.apply([], UniqueNames);
  var names = merged.filter((item, i, ar) => ar.indexOf(item) === i);
  const listItems = names.map((name) =>
    <li key={name}>{name}</li>
  );

  return (

    <Container fluid >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><h2>PI-SNIFF</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ButtonGroup toggle className="mb-2" onChange={props.rawFrameToggleHandler}>
              <ToggleButton variant="light" type="checkbox">
                Raw Frames
               </ToggleButton>
            </ButtonGroup>
          </Nav>
          <Nav className="mr-auto">
            <h2><Badge className="mr-2" variant="light">Select Date</Badge></h2>
            <DatePicker className="mt-2"
              placeholderText="click to select date"
              // showTimeSelect
              selected={props.piDataFileRequestName}
              onChange={props.datePickerHandler}
              // timeFormat="h:mm aa"
              // timeIntervals={60}
              // timeCaption="time"
              // minDate={moment()
              //   .subtract(1, "week")
              //   .toDate()}
              dateFormat="MMMM d, yyyy"
              maxDate={moment().toDate()}
            />
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      {
        props.error ? (
          <Message negative onDismiss={props.handleMessageDismiss}>
            <Message.Header>Something went wrong</Message.Header>
            <Message.Content>{props.errorMessage}</Message.Content>
          </Message>
        ) : (
            ""
          )
      }
      {
        props.isLoading ? (
          <Dimmer active>
            <Loader>Fetching Data</Loader>
          </Dimmer>
        ) : fileContent.length ? (
          props.rawFrameToggle ? (
            <SegmentGroup piled>
              {fileContent.map((element, key) => {
                return <Segment key={key}>{JSON.stringify(element)}</Segment>;
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
            </SegmentGroup>
          ) : (
              <Container fluid>
                <Row>
                  <div className="col-12 order-sm-last col-md-4">
                    <div className="card">
                      <h2 className="card-header bg-dark text-white">No.of Directed Probes</h2>
                      <div className="card-body">
                        <h2>{directedProbePingCount}</h2>
                      </div>
                    </div>
                    <div className="card">
                      <h2 className="card-header bg-dark text-white">No.of Null Probes</h2>
                      <div className="card-body">
                        <h2>{nullProbePingCount}</h2>
                      </div>
                    </div>
                    <div className="card">
                      <h2 className="card-header bg-dark text-white">Unique SSID</h2>
                      <div className="card-body">
                        <ul>{listItems}</ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 order-sm-first col-md-8">
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
                  </div>
                </Row>
              </Container>
            )
        ) : (
              <Header as="h3">No Content</Header>
            )
      }
      {/* {console.log(props.fileContent)} */}
    </Container >
  );
};


export default DashboardComponent;
