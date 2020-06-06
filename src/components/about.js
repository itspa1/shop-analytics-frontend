import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function About() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-2">
              <CardTitle tag="h3">About Us</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="row row-content align-items-center">
                <div className="col-12 col-sm-6">
                  <h2>Our Project</h2>
                  <p>
                    Business Optimization is a process of measuring the
                    efficiency, productivity and performance of a business and
                    finding ways to improve those measures.This project aims to
                    gather precise insights and data by using WiFi probe
                    sniffing and cameras. In WiFi probe sniffing, wifi enabled
                    devices openly broadcast information such as time-stamp, MAC
                    address, RSSI signal strength and SSID names of previously
                    associated APs. Using Raspberry Pi’s WiFi module in Monitor
                    mode, probe data is collected and stored, this data can help
                    us identify the number of customers or people in a region.
                    With cameras, we can track the activity of roaming users
                    with better accuracy. This information is vital for
                    businesses practices for continuous iterative exploration
                    and investigation of past business performance, to gain
                    insight and drive business planning based on data and
                    statistical methods.<br></br>
                    <br></br>
                    Check Out our blog,<a
                      href="https://pisniff.wordpress.com/"
                    >
                      Click here
                    </a>
                    <br></br>
                    And complete code on <a
                      href="https://github.com/Impeekay/shop-analytics-pi"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card">
                    <h3 className="card-header bg-dark text-white">Our Team</h3>
                    <div className="card-body">
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://itspavan.dev" target="_blank">
                            Pavan Kumar D
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://git-ruthvik.github.io"
                            target="_blank"
                          >
                            Ruthvik B.R
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/rakesh-srivatsav-707a4214b"
                            target="_blank"
                          >
                            Rakesh Srivatsav V
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="card-header bg-dark text-white">
                      Guide/Mentor
                    </h3>
                    <div className="card-body">
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://rprustagi.com" target="_blank">
                            Dr Ram P Rustagi
                          </a>
                        </li>
                        <li>
                          Jagdish S Verma, Director, <a
                            href="http://www.connoiseur.com/"
                            target="_blank"
                          >
                            Connoiseur electronics
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-body">
                    <blockquote className="blockquote">
                      <p className="mb-0 text-success">
                        Data is what you need to do ANALYTICS.<br>
                        </br>Information is what you need to do BUSINESS.
                      </p>
                      <footer className="blockquote-footer">
                        Jhon Owen
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
