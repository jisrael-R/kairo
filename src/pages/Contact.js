import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ServiceList from '../data';
import Sent from '../components/modal';
import '../index.css'
import axios from 'axios';
import {HiOutlineMail} from 'react-icons/hi'

export default class  Contact extends Component{
  
  
   
   
  state={ name:'',
    lastname:'',
    email:'',
    message:'',
    phone:'',
    services:'',
    sent:false,
    validated:false
  }
   handleName = (e) =>{
    this.setState({
      name:e.target.value
    })
   }
   handleLastName = (e) =>{
    this.setState({
      lastname:e.target.value
    })
   }
   handleEmail = (e) =>{
    this.setState({
      email:e.target.value
    })
   }
   handlePhone = (e) =>{
    this.setState({
      phone:e.target.value
    })
   }
   handleServices =(e)=>{
    this.setState({
      services:e.target.value
    })
   }
   handleMessage = (e) =>{
     this.setState({
      message:e.target.value
     })
  }
   
  
    handleSubmit = async(event) => {
      
   

     let data ={
    name:this.state.name,
    lastname:this.state.lastname,
    email:this.state.lastname,
    message:this.state.message,
    phone:this.state.phone,
    service:this.state.services

  }
   
  try {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
     this.setState({
      validated:true
     })
     if(!this.state.validated){
      console.log('hii');
     }else{
     
    await axios.post('/api/form' ,data,res =>{
      
    },
    
     this.setState({
        sent:true,
    }))
  } }catch (error) {
    console.log('message not sent');
  }
  
   

  }



  



   
render(){
  return (
    <Form noValidate validated={this.state.validated}  onSubmit={this.handleSubmit} className='p-3'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={this.state.name}
            onChange={this.handleName}
         
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={this.state.lastname}
            onChange={this.handleLastName}
            
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
              
              value={this.state.email}
            onChange={this.handleEmail}
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
            <Form.Select aria-label="Default select example" required value={this.state.services}
            onChange={this.handleServices}>
      <option value={''}>Select a Service</option>
      {ServiceList.map(({service,id})=>{
        return<option value={service} key={id} className='capi'>{service}</option>
      })}
      
    </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select an option.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Form.Group as={Col} md="4" controlId="validationCustom05" className='mb-2'>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}placeholder="Comment" required value={this.state.message}
            onChange={this.handleMessage} />
          <Form.Control.Feedback type="invalid">
            Please provide a Comment.
          </Form.Control.Feedback>
        </Form.Group>
      
      <Button type="submit" variant='warning' >Submit form</Button>
    </Form>
  );
    }
}

