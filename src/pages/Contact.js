import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ServiceList from '../data';
import '../index.css'
import {HiOutlineMail} from 'react-icons/hi'

const  Contact = ()=> {
  const [validated, setValidated] = useState(false);
  const [services]=useState(ServiceList)


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-3'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"> <HiOutlineMail/> </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone Number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Services</Form.Label>
            <Form.Select aria-label="Default select example" required>
      <option value={''}>Select a Service</option>
      {services.map(({service,id})=>{
        return<option value={id} key={id} className='capi'>{service}</option>
      })}
      
    </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select an option.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Form.Group as={Col} md="4" controlId="validationCustom05" className='mb-2'>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}placeholder="Comment" required />
          <Form.Control.Feedback type="invalid">
            Please provide a Comment.
          </Form.Control.Feedback>
        </Form.Group>
      
      <Button type="submit" variant='warning'>Submit form</Button>
    </Form>
  );
}

export default Contact;