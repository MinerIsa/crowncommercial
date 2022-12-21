import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import services from '../../assets/images/construction/electrician4.png';
import 'animate.css/animate.min.css';

export default class ProjectPlanning extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section pb-3 mb-0 bg-light" id="services">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="features-absolute rounded bg-white shadow-lg">
                  <Row>
                    <Col lg={8} md={12} className="my-4">
                      <Row>
                        <Col md={6} xs={12}>
                          <div className="d-flex features feature-primary p-4 features1">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2 shadow-md lift-on-hover1">
                              <i className="uil uil-box align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Warehouses</h4>
                              <p className="text-muted para mb-0">
                                Improve occupant productivity and safety with
                                LED Lights.
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6} xs={12}>
                          <div className="d-flex features feature-primary p-4 features2">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2 shadow-md lift-on-hover2">
                              <i className="uil uil-building align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Parking Lots</h4>
                              <p className="text-muted para mb-0">
                                From condo buildings to strip malls to shopping
                                centers.
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features feature-primary p-4 features3">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2 shadow-md lift-on-hover3">
                              <i className="uil uil-pump align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Gas Stations</h4>
                              <p className="text-muted para mb-0">
                                Improve station appearance and safety, and
                                reduce your electric bill.
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6} xs={12}>
                          <div className="d-flex features feature-primary p-4 features4">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2 shadow-md lift-on-hover4">
                              <i className="uil uil-car align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Auto Dealerships</h4>
                              <p className="text-muted para mb-0">
                                Let your automobiles shine, and eliminate the
                                need to change bulbs and ballasts.
                              </p>
                            </div>
                          </div>
                        </Col>

                        {/* <Col xs={12} className="mt-3 text-center">
                          <p className="text-muted mb-0 text-shadow-lg">
                            Our list of services does not end here. Any size
                            business can benefit from working with us!
                          </p>
                        </Col> */}
                      </Row>
                    </Col>

                    <Col
                      lg={4}
                      className="d-none d-lg-block position-relative "
                    >
                      <img
                        src={services}
                        className="img-fluid mx-auto d-block construction-img"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xs={12} className="mt-4 pt-2 text-center">
                <h6 className="text-primary mb-0">
                  Our list of services does not end here. Any size business can
                  benefit from working with us!
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
