import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  Badge,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from 'reactstrap';

import './style.scss';

//Import Icons
// import FeatherIcon from "feather-icons-react";

//import images
import about from '../../assets/images/construction/about1.png';
import google from '../../assets/images/client/google.svg';
import lenovo from '../../assets/images/client/lenovo.svg';
import paypal from '../../assets/images/client/paypal.svg';
import CrownClient1 from '../../assets/images/client/Crown-Client1.jpeg';
import CrownClient2 from '../../assets/images/client/Crown-Client2.jpeg';
import CrownClient3 from '../../assets/images/client/Crown-Client3.jpeg';
import amazon from '../../assets/images/client/amazon.svg';
import FeatherIcon from 'feather-icons-react';
import mobileNotification from '../../assets/images/illustrator/Mobile_notification_SVG.svg';
import energyassessment from '../../assets/images/illustrator/energyassessment.png';

// Modal Video
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: true,
    };
    this.openModal = this.openModal.bind(this);
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60" id="about-us">
          <Row className="align-items-center">
            <Col lg={5} md={6} xs={12}>
              <div className="position-relative">
                <img
                  src={about}
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                {/* <div className="play-icon">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="play-btn lightbox border-0"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                  </Link>
                  <ModalVideo
                    channel="vimeo"
                    isOpen={this.state.isOpen}
                    videoId="287684225"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                </div> */}
              </div>
            </Col>

            <Col lg={7} md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ms-lg-5 ms-md-4">
                <div className="section-title">
                  <span className="badge rounded-pill bg-soft-primary">
                    About us
                  </span>
                  <h4 className="title mt-3 mb-4">
                    We are the leader <br /> in{' '}
                    <span className="text-primary">
                      Energy Efficiency Upgrades
                    </span>
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    At{' '}
                    <span className="text-primary fw-bold">
                      Crown Commercial Lighting
                    </span>{' '}
                    You will experience exceptional customer service and
                    attention to detail. We know each project is completely
                    different and unique. You can be assured we will provide you
                    with the professionalism and respect your business deserves.
                  </p>
                  <div className="mt-4">
                    <a
                      onClick={this.togglemodal}
                      href="#home"
                      className="btn btn-primary shadow-md"
                    >
                      Get a free energy assessment
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-5">
          <Row className="align-items-center">
            <Col className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="rounded shadow bg-white shadow-lg">
                <Row className="justify-content-center">
                  <Col className="text-center py-4 mt-0">
                    {/* <img src={amazon} className="avatar avatar-ex-sm" alt="" /> */}
                    <h6 className="text-danger">Authorized Service Provider</h6>
                    <p>
                      Crown Commercial Lighting is an authorized Service
                      Provider for the ComEd® Energy Efficiency Program Small
                      Business offering. We specialize in energy efficiency for
                      the Chicago metropolitan area. We will create a customized
                      LED lighting plan for your business, inside and out, while
                      also looking for additional energy-saving measures.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col lg={4} md={3} className="col-lg-4 col-md-3">
              <h5 className="text-muted mb-0 shadow-lg p-3 rounded bg-white">
                Trusted by over 500 businesses in the Chicagoland area.
              </h5>
            </Col>

            <Col lg={8} md={9} className="mt-4 pt-0 mt-sm-0 pt-sm-0">
              <div className="rounded shadow bg-white p-3 shadow-lg">
                <Row className="justify-content-center">
                  <Col lg="4" className="text-center">
                    <img
                      style={{ width: '100%' }}
                      src={CrownClient1}
                      className=""
                      alt=""
                    />
                  </Col>
                  <Col lg="4" className="text-center">
                    <img
                      style={{ width: '100%' }}
                      src={CrownClient2}
                      className=""
                      alt=""
                    />
                  </Col>
                  <Col lg="4" className="text-center">
                    <img
                      style={{ width: '100%' }}
                      src={CrownClient3}
                      className=""
                      alt=""
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
