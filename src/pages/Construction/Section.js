import React, { Component, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  FormGroup,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  Alert,
} from 'reactstrap';

//import bg image
import bg_image from '../../assets/images/construction/bg.jpg';
import FeatherIcon from 'feather-icons-react';
import emailjs, { send } from '@emailjs/browser';

const Section = () => {
  const [succeMsg, setsucceMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please Enter Name'),
      email: Yup.string().required('Email is required'),
    }),
    onSubmit: (values) => {
      setsucceMsg(true);
      // console.log(values)
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3tekrls',
        'template_3j9l639',
        form.current,
        'WJW0NM0MduGhIRYE8',
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setTime('');
          setsucceMsg(true);
        },
        (error) => {
          console.log(error.text);
          alert('FAILED...', error);
        },
      );
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [time, setTime] = useState();
  const [show, setShow] = useState(false);

  //format phone number
  const formatPhone = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/\D/g, '');
    const newValue2 = newValue.replace(/^(\d{3})(\d)/, '($1) $2');
    const newValue3 = newValue2.slice(0, 13);
    const newValue4 = newValue3.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(newValue4);
  };
  return (
    <React.Fragment>
      <section
        className="bg-half-260 d-table w-100"
        style={{ background: `url(${bg_image}) center center` }}
        id="home"
      >
        <div className="bg-overlay" style={{ opacity: '0.65' }}></div>
        <Container>
          <Row className="mt-5 mt-md-4">
            <Col className="d-flex align-items-center">
              <div className="title-heading">
                <h4 className="display-4 mb-4 fw-bold text-white title-dark">
                  Experience <br /> a brighter future
                </h4>
                <p className="para-desc text-white-50">
                  Get a customized LED lighting plan for your business, inside
                  and out.
                </p>
                {/* <div className="mt-4 pt-2">
                  <Link to="#" className="btn btn-primary">
                    Get Started
                  </Link>
                </div> */}
              </div>
            </Col>
            <Col
              lg="5"
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className=""
            >
              <Card className="rounded shadow-lg border-0">
                <CardBody>
                  <div className="pb-3">
                    <h4 className="card-title fw-bold">
                      Get a free lighting assessment
                    </h4>
                    <p className="text-muted">
                      Find out how your business can save 50% or more on your
                      electric bill and maintenance costs.{' '}
                    </p>
                  </div>
                  <div className="custom-form bg-white">
                    <div id="message"></div>
                    <Alert
                      color="info"
                      isOpen={succeMsg}
                      toggle={() => {
                        setsucceMsg(false);
                      }}
                    >
                      We received your inquiry and will get back to you soon!
                    </Alert>
                    <form
                      onSubmit={sendEmail}
                      name="contact-form"
                      id="contact-form"
                      ref={form}
                    >
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="First Name :"
                              type="name"
                              name="name"
                              id="name"
                              value={name}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Your email :"
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              required
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="briefcase"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Company :"
                              type="text"
                              name="company"
                              id="company"
                              value={company}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="phone"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Phone :"
                              type="tel"
                              onChange={formatPhone}
                              name="phone"
                              id="phone"
                              value={phone}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary"
                              value="Get Free Assessment"
                            />
                            <div id="simple-msg"></div>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
