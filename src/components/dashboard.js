import React from "react";
import { Container, Segment, SegmentGroup, Header } from "semantic-ui-react";
// import JSONPretty from "react-json-pretty";

const DashboardComponent = props => {
  return (
    <Container>
      {props.fileContent.length ? (
        <SegmentGroup piled>
          {props.fileContent.map((constant, key) => {
            return <Segment key={key}>{constant}</Segment>;
            // return (
            //   <JSONPretty
            //     id="json-pretty"
            //     key={key}
            //     data={constant}
            //     style={{ fontSize: "1.1em" }}
            //     mainStyle="padding:1em"
            //     valueStyle="font-size:1.5em"
            //   ></JSONPretty>
            // );
          })}
        </SegmentGroup>
      ) : (
        <Header as="h3">No Content</Header>
      )}
    </Container>
  );
};

export default DashboardComponent;
