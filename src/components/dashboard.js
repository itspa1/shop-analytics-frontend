
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
import moment from 'moment'
import { render } from 'react-dom';
import { TableSimple, TablePagination } from 'react-pagination-table';
const Heading = ["Timestamp", "MAC_ID", "RSSI", "SSID"];



const DashboardComponent = props => {
  let directedProbePingCount = 0;
  let nullProbePingCount = 0;
  let fileContent = [];
  let directedPings = [];
  let nullPings = [];
  let pings = [];
  if (!props.error && !props.isLoading) {
    fileContent = props.fileContent
    if (fileContent.length) {
      fileContent.forEach((element, index) => {
        if (element.frame.probes.directed.length) {
          directedProbePingCount += element.frame.probes.directed.length
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
  console.log(fileContent);
  console.log(directedPings);
  console.log(nullPings);
  console.log(pings);
  console.log(directedProbePingCount);
  return (

    < Container >
      <div className="ui fitted">
        <Label>Toggle Raw frame view</Label>
        <Checkbox toggle onChange={props.rawFrameToggleHandler} />
        <DatePicker
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
      </div>
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
              <div>
                <div >
                  <table id="countTable">
                    <thead>
                      <tr>
                        <th>
                          No.of Directed probes
                      </th>
                        <th>
                          No.of Null probes
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {directedProbePingCount}
                        </td>
                        <td>
                          {nullProbePingCount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="tablecontent" >



                  <TablePagination

                    headers={Heading}
                    data={pings}
                    columns="timestamp.mac_id.rssi.ssid"
                    perPageItemCount={10}
                    totalCount={pings.length}
                  />


                </div>
              </div>


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
