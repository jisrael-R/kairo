import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ServiceList from '../data';

const Services = () => {
    const [list, setList] = useState(ServiceList);
    console.log(list);
    return (
        <div className="service-container">
            <div className="service-title">
                <h1>Our Services</h1>
                <div className="underline"></div>
            </div>
            <section className="section-services">
                {list.map((service) => {
                    return (
                        <Card
                            style={{ width: '18rem' }}
                            key={service.id}
                            className="info-cards"
                        >
                            <Card.Img
                                variant="top"
                                src={service.img}
                                height={'190px'}
                            />
                            <Card.Body>
                                <Card.Title>{service.service}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <Button variant="warning">Book Service</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </section>
        </div>
    );
};
export default Services;