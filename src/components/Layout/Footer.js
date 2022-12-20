import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import masterCard from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

//Import Images
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';
import jarvislogo from '../../assets/images/JarvisLogo.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'About us', link: '#about-us' },
        { title: 'Services', link: '#services' },
        // { title: 'Team', link: '#' },
        // { title: 'Pricing', link: '#' },
        { title: 'Projects', link: '#projects' },
        // { title: 'Careers', link: '#' },
        // { title: 'Blog', link: '#' },
        // { title: 'Login', link: '#' },
      ],
      grid2: [
        { title: 'Terms of Services', link: '#' },
        { title: 'Privacy Policy', link: '#' },
        { title: 'Documentation', link: '#' },
        { title: 'Changelog', link: '#' },
        { title: 'Components', link: '#' },
      ],
      paymentCardData: [
        {
          img: americanEx,
          title: 'American Express',
        },
        {
          img: discover,
          title: 'Discover',
        },
        {
          img: masterCard,
          title: 'Master Card',
        },
        {
          img: paypal,
          title: 'Paypal',
        },
        {
          img: visa,
          title: 'Visa',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              <Col className="col-12">
                <div
                  className={
                    this.props.isBorderLine
                      ? 'footer-py-60 footer-border'
                      : 'footer-py-60'
                  }
                >
                  <Row>
                    <Col lg={6} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                      <a href="#home" className="logo-footer">
                        <img
                          src={this.props.isLight ? logodark : logolight}
                          height="54"
                          alt=""
                        />
                      </a>
                      <p
                        className={
                          this.props.isLight ? 'mt-4 text-muted' : 'mt-4'
                        }
                      >
                        Crown Commercial Lighting is an authorized Service
                        Provider for the ComEd® Energy Efficiency Program Small
                        Business offering.
                      </p>
                      <p>
                        Our quality lighting partner:{' '}
                        <a href="https://www.jarvislighting.com/">
                          <img style={{ width: '17%' }} src={jarvislogo} />
                        </a>
                      </p>
                      <ul
                        className={
                          this.props.isLight
                            ? 'list-unstyled social-icon social mb-0 m t-4'
                            : 'list-unstyled social-icon foot-social-icon mb-0 mt-4'
                        }
                      >
                        <li className="list-inline-item me-1">
                          <a
                            href="https://www.facebook.com/CrownCommercialLighting/"
                            className="rounded"
                          >
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        {/* <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li> */}
                      </ul>
                    </Col>

                    <Col
                      lg={2}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Company
                      </h5>
                      <ul className="list-unstyled footer-list mt-4">
                        {this.state.grid1.map((grid, key) => (
                          <li key={key}>
                            <a
                              href={grid.link}
                              className={
                                this.props.isLight ? 'text-muted' : 'text-foot'
                              }
                            >
                              <i className="uil uil-angle-right-b me-1"></i>{' '}
                              {grid.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    {/* <Col
                      lg={3}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Usefull Links
                      </h5>
                      <ul className="list-unstyled footer-list mt-4">
                        {this.state.grid2.map((grid, key) => (
                          <li key={key}>
                            <Link
                              to={grid.link}
                              className={
                                this.props.isLight ? 'text-muted' : 'text-foot'
                              }
                            >
                              <i className="uil uil-angle-right-b me-1"></i>{' '}
                              {grid.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Col> */}

                    <Col
                      lg={4}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Contact Us
                      </h5>
                      <p className="mt-4">
                        1307 Shermer Rd. Northbrook, IL 60062-4536 <br />
                        <span className="text-white">Phone:</span> (773)
                        870-1718
                        <br />
                        <span className="text-white">Email:</span>{' '}
                        crowncommerciallighting@gmail.com
                        <br />
                        <br />
                        <span className="text-white">Sales Office Hours:</span>
                        <br />
                        Monday - Friday <br />
                        9:00 AM - 5:00 PM (Central Time)
                      </p>
                      <Form>
                        {/* <Row>
                          <Col lg={12}>
                            <div
                              className={
                                this.props.isLight
                                  ? 'foot-subscribe mb-3 foot-white'
                                  : 'foot-subscribe mb-3'
                              }
                            >
                              <Label
                                className={
                                  this.props.isLight
                                    ? 'form-label text-muted'
                                    : 'form-label'
                                }
                              >
                                Write your email{' '}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                                <Input
                                  type="email"
                                  name="email"
                                  id="emailsubscribe"
                                  className={
                                    this.props.isLight
                                      ? 'form-control ps-5 rounded bg-light border'
                                      : 'form-control ps-5 rounded'
                                  }
                                  placeholder="Your email : "
                                  required
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="d-grid">
                              <input
                                type="submit"
                                id="submitsubscribe"
                                name="send"
                                className={
                                  this.props.isLight
                                    ? 'btn btn-primary'
                                    : 'btn btn-soft-primary'
                                }
                                value="Subscribe"
                              />
                            </div>
                          </Col>
                        </Row> */}
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="footer-py-30 footer-bar">
            <Container className="text-center">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div className="text-sm-start">
                    <p className="mb-0">
                      © {new Date().getFullYear()} Crown Commercial{' '}
                      <Link
                        to=""
                        target="_blank"
                        className="text-reset"
                        rel="noopener noreferrer"
                      ></Link>
                    </p>
                  </div>
                </Col>

                <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  {/* <ul className="list-unstyled text-sm-end mb-0 d-flex gap-1 flex-wrap justify-content-sm-end">
                    {this.state.paymentCardData.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="#">
                          <img
                            src={item.img}
                            className="avatar avatar-ex-sm"
                            title={item.title}
                            alt=""
                          />
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
