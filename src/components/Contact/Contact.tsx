import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Contact: React.FC = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
  return (
    <div className='investigation' style={{marginBottom: "100px"}} >
        <Container>
            <Row style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Col lg={5} md={5} sm={12} className='col1 contactCol'>
                    <h1 className='text-center'>LA ILAHE ILLALLAH</h1>
                </Col>
                <Col lg={{span: 6, offset:1}} md={{span: 6, offset:1}} sm={12} className='col2'>
                    <h3 className='text-center'>Contact With US</h3>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='mb-4'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="First name"
                                />
                                <Form.Control.Feedback>OK!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02" className='mb-4'>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Last name"
                                />
                                <Form.Control.Feedback>OK!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername" className='mb-4'>
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="email"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please enter the email.
                                  </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlTextarea1">
                              <Form.Label>Enter your message</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Row>
                        <Button type="submit" className='btn btn-secondary w-50 h-100'>Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact
