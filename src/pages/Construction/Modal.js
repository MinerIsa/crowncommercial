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
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

//import bg image
import bg_image from '../../assets/images/construction/bg.jpg';
import FeatherIcon from 'feather-icons-react';
import energyassessment from '../../assets/images/illustrator/energyassessment.png';

const ModalContact = () => {
  //modal states
  const [modal, setModal] = useState(false);

  togglemodal = () => {
    setModal(!modal);
  };

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
        'service_8dmdsi7',
        'template_th7bztm',
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
      <Modal isOpen={modal} role="dialog" centered={true} id="trialform">
        <ModalHeader
          style={{ cursor: 'pointer' }}
          onClick={togglemodal}
          toggle={togglemodal}
        >
          <h3>Free Energy Assessment</h3>
        </ModalHeader>

        <ModalBody>
          <div className="feature-form">
            <div>
              <img style={{ width: '100%' }} src={energyassessment} alt="" />
            </div>

            <div className="content mt-4 pt-2">
              <Form>
                <Row>
                  <Col lg="12">
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Name : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Name"
                        name="name"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="12">
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Email : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="12" className="mt-2 mb-0">
                    <Button color="primary" className="w-100">
                      Login
                    </Button>
                    <div className="mt-3 text-center mb-0">
                      <p
                        style={{ cursor: 'pointer' }}
                        onClick={togglemodal}
                        className="mb-0 text-muted"
                      >
                        Close
                      </p>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ModalContact;
