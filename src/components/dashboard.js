import React from "react";
import {
  Container,
  Segment,
  SegmentGroup,
  Header,
  Checkbox,
  Label,
  Table,
  Dimmer,
  Loader,
  Message
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
// import JSONPretty from "react-json-pretty";

const DashboardComponent = props => {
  return (
    <Container>
      <div className="ui fitted">
        <Label>Toggle Raw frame view</Label>
        <Checkbox toggle onChange={props.rawFrameToggleHandler} />
        <DatePicker
          placeholderText="click to select date"
          selected={props.piDataFileRequestName}
          onChange={props.datePickerHandler}
          dateFormat="MMMM d, yyyy"
          // minDate={moment()
          // .subtract(1, "week")
          // .toDate()}
          //TODO: Uncomment this before commiting
          maxDate={moment().toDate()}
        />
      </div>
      {props.error ? (
        <Message negative onDismiss={props.handleMessageDismiss}>
          <Message.Header>Something went wrong</Message.Header>
          <Message.Content>{props.errorMessage}</Message.Content>
        </Message>
      ) : (
        ""
      )}
      {props.isLoading ? (
        <Dimmer active>
          <Loader>Fetching Data</Loader>
        </Dimmer>
      ) : props.fileContent.length ? (
        props.rawFrameToggle ? (
          <SegmentGroup piled>
            {props.fileContent.map((element, key) => {
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
          <Table celled structured>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Frame Timestamp</Table.HeaderCell>
                <Table.HeaderCell>Directed Probes</Table.HeaderCell>
                <Table.HeaderCell>Null Probes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.fileContent.map((element, key) => {
                return (
                  <Table.Row key={key}>
                    <Table.Cell>{element.timestamp}</Table.Cell>
                    <Table.Cell>
                      <Table>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Timestamp</Table.HeaderCell>
                            <Table.HeaderCell>macId</Table.HeaderCell>
                            <Table.HeaderCell>rssi</Table.HeaderCell>
                            <Table.HeaderCell>ssid</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {element.frame.probes.directed.length ? (
                            element.frame.probes.directed.map(
                              (directedPing, index) => (
                                <Table.Row key={index}>
                                  <Table.Cell>
                                    {directedPing.timestamp}
                                  </Table.Cell>
                                  <Table.Cell>{directedPing.mac_id}</Table.Cell>
                                  <Table.Cell>{directedPing.rssi}</Table.Cell>
                                  <Table.Cell>{directedPing.ssid}</Table.Cell>
                                </Table.Row>
                              )
                            )
                          ) : (
                            <Table.Row>
                              <Table.Cell colSpan="4">
                                No Directed Pings in frame
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </Table.Body>
                      </Table>
                    </Table.Cell>
                    <Table.Cell>
                      <Table>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Timestamp</Table.HeaderCell>
                            <Table.HeaderCell>macId</Table.HeaderCell>
                            <Table.HeaderCell>rssi</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {element.frame.probes.null.length ? (
                            element.frame.probes.null.map(
                              (nullPings, nullIndex) => (
                                <Table.Row key={nullIndex}>
                                  <Table.Cell>{nullPings.timestamp}</Table.Cell>
                                  <Table.Cell>{nullPings.mac_id}</Table.Cell>
                                  <Table.Cell>{nullPings.rssi}</Table.Cell>
                                </Table.Row>
                              )
                            )
                          ) : (
                            <Table.Row>
                              <Table.Cell colSpan="3">
                                No Null Pings in frame
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </Table.Body>
                      </Table>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        )
      ) : (
        <Header as="h3">No Content</Header>
      )}
      {/* {console.log(props.fileContent)} */}
    </Container>
  );
};

export default DashboardComponent;
