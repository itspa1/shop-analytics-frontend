import React from "react";

import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function About() {
  return (
    // <Card
    //     bg="dark"
    //     text={'white'}
    //     style={{ width: '80%' }}
    //     className="mt-3 ml-auto mr-auto"
    // >
    //     <Card.Header><h3>Business Optimization Using Data Analytics Of Known and Unknown Roaming Users</h3></Card.Header>
    //     <Card.Body>
    //         <Card.Title>About Our Project</Card.Title>
    //         <Card.Text>
    //             Business Optimization is a process of measuring the efficiency, productivity and performance of a business
    //             and finding ways to improve those measures.This project aims to gather precise insights and data by using
    //             WiFi probe sniffing and cameras. In WiFi probe sniffing, wifi enabled devices openly broadcast information
    //             such as time-stamp, MAC address, RSSI signal strength and SSID names of previously associated APs. Using
    //             Raspberry Pi’s WiFi module in Monitor mode, probe data is collected and stored, this data can help us
    //             identify the number of customers or people in a region. With cameras, we can track the activity of
    //             roaming users with better accuracy. This information is vital for businesses practices for continuous
    //             iterative exploration and investigation of past business performance, to gain insight and drive business
    //             planning based on data and statistical methods.
    //         </Card.Text>
    //     </Card.Body>
    //     <Card.Body>
    //         <Card.Title>About Us</Card.Title>
    //         <Card.Text>
    //             Pavan kumar D<br />
    //             K.S Institute of Technology
    //         </Card.Text>
    //         <Card.Text>
    //             Ruthvik B.R<br />
    //             K.S Institute of Technology
    //         </Card.Text>
    //         <Card.Text>
    //             Rakesh Srivatsav V<br />
    //             K.S Institute of Technology
    //         </Card.Text>
    //     </Card.Body>
    // </Card>
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-5">
              <CardTitle tag="h3">
                About Us
                  </CardTitle>
            </CardHeader>
            <CardBody>
              <div class="row row-content align-items-center">
                <div class="col-12 col-sm-6">
                  <h2>Our Project</h2>
                  <p>
                    Business Optimization is a process of measuring the efficiency, productivity and performance of a business
                    and finding ways to improve those measures.This project aims to gather precise insights and data by using
                    WiFi probe sniffing and cameras. In WiFi probe sniffing, wifi enabled devices openly broadcast information
                    such as time-stamp, MAC address, RSSI signal strength and SSID names of previously associated APs. Using
                    Raspberry Pi’s WiFi module in Monitor mode, probe data is collected and stored, this data can help us
                    identify the number of customers or people in a region. With cameras, we can track the activity of
                    roaming users with better accuracy. This information is vital for businesses practices for continuous
                    iterative exploration and investigation of past business performance, to gain insight and drive business
                    planning based on data and statistical methods.
          </p>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="card">
                    <h3 class="card-header bg-dark text-white">Our Team</h3>
                    <div class="card-body">
                      <ul class="list-unstyled">
                        <li>Pavan kumar D</li>
                        <li>Ruthvik B.R</li>
                        <li>Rakesh Srivatsav V</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card card-body">
                    <blockquote class="blockquote">
                      <p class="mb-0" className="text-success">
                        Just having satisfied customers isn’t good enough anymore.
                        If you really want a booming business, you have to create raving fans.
              </p>
                      <footer class="blockquote-footer">
                        Mollie Beck, Founder, Continue Good
              </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <div class="row">
        <ol class="col-12 breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item active">About Us</li>
        </ol>
        <div>
          <h3>About Us</h3>
          <hr />
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-12 col-sm-6">
          <h2>Our Project</h2>
          <p>
            Business Optimization is a process of measuring the efficiency, productivity and performance of a business
            and finding ways to improve those measures.This project aims to gather precise insights and data by using
            WiFi probe sniffing and cameras. In WiFi probe sniffing, wifi enabled devices openly broadcast information
            such as time-stamp, MAC address, RSSI signal strength and SSID names of previously associated APs. Using
            Raspberry Pi’s WiFi module in Monitor mode, probe data is collected and stored, this data can help us
            identify the number of customers or people in a region. With cameras, we can track the activity of
            roaming users with better accuracy. This information is vital for businesses practices for continuous
            iterative exploration and investigation of past business performance, to gain insight and drive business
            planning based on data and statistical methods.
          </p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="card">
            <h3 class="card-header bg-dark text-white">Our Team</h3>
            <div class="card-body">
              <ul class="list-unstyled">
                <li>Pavan kumar D</li>
                <li>Ruthvik B.R</li>
                <li>Rakesh Srivatsav V</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card card-body bg-light">
            <blockquote class="blockquote">
              <p class="mb-0">
                Don’t try to tell the customer what he wants. If you want to be smart,
                be smart in the shower. Then get out, go to work, and serve the customer!
              </p>
              <footer class="blockquote-footer">
                Anna Segova
              </footer>
            </blockquote>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
