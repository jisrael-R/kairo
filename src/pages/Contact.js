import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ServiceList from '../data';
import Button from 'react-bootstrap/Button';

import { useEffect, useRef } from 'react';
import '../index.css';

const Contact = () => {
    const [services, setServices] = useState(ServiceList);

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error('Error attempting to play', error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return (
        <div className="form-contact">
            <Row>
                <Col>
                    <div className="service-title">
                        <h1>Contact Form</h1>
                        <div className="underline"></div>
                    </div>
                    <Form className="m-3 p-3">
                        <Row className="g-2 mb-2">
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Name"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="John"
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Last Name"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Smith"
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Phone Number"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="1-800-299-9999"
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Email address"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingSelectGrid"
                                    label="Works with selects"
                                >
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select a Service</option>
                                        {services.map((service) => {
                                            return (
                                                <option
                                                    className="options"
                                                    value={service.id}
                                                    key={service.id}
                                                >
                                                    {service.service.toUpperCase()}
                                                </option>
                                            );
                                        })}
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <FloatingLabel
                                controlId="floatingTextarea2"
                                label="Comments"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button
                                variant="warning"
                                type="submit"
                                className=""
                            >
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
