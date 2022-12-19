// React Basic and Bootstrap
import React, { useState, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
  FormFeedback,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Formik Validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import emailjs, { send } from '@emailjs/browser';

const Contact = () => {
  const [succeMsg, setSucceMsg] = useState(false);

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
      // console.log(values)
      setSucceMsg(true);
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3tekrls',
        'template_cmdg9je',
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
          setMessage('');
          setPhone('');
          setSucceMsg(true);
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
  const [message, setMessage] = useState();

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
      <section className="section bg-light mg-5" id="contact-us">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6" md="6" className="p-0 ps-md-3 pe-md-3">
              <div className="map map-height-one rounded map-gray border-0">
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.9656284487073!2d-87.82750998420478!3d42.12961905761485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc72e2bd1db05%3A0x28d769fc9a225fdb!2s1307%20Shermer%20Rd%2C%20Northbrook%2C%20IL%2060062!5e0!3m2!1sen!2sus!4v1671230019021!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  className="rounded"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>

            <Col lg="6" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <Card className="rounded shadow-lg border-0">
                <CardBody className="py-5">
                  <h5 className="card-title">Contact Us</h5>
                  <div className="custom-form mt-4">
                    <div id="message"></div>
                    <Alert
                      color="success"
                      isOpen={succeMsg}
                      toggle={() => {
                        setSucceMsg(false);
                      }}
                    >
                      We received your message and will get back to you shortly!
                    </Alert>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Name <span className="text-danger">*</span>{' '}
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="Name :"
                              value={name}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Company{' '}
                              <span className="text-danger">*</span>{' '}
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="briefcase"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="company"
                              id="company"
                              type="text"
                              className="form-control ps-5"
                              placeholder="Your company :"
                              value={company}
                              required
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>{' '}
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Your email :"
                              value={email}
                              required
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Phone <span className="text-danger">*</span>{' '}
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="phone"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="phone"
                              id="phone"
                              type="phone"
                              className="form-control ps-5"
                              placeholder="Your phone :"
                              onChange={formatPhone}
                              value={phone}
                              required
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">Message </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="message"
                              id="message"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Your Message :"
                              value={message}
                              required
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary"
                              value="Send Message"
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

export default Contact;
