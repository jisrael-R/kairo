import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/Logos/490-KairosLogo FINAL.png';
import { Link } from 'react-router-dom';
import { useCurrentWidth } from '../useCurrentWidth';
import { useEffect, useState } from 'react';
import '../index.css';

function OffcanvasExample() {
    const [cName, setCName] = useState();
    let width = useCurrentWidth();
    useEffect(() => {
        if (width >= 800) {
            return setCName('navegate d-none');
        } else {
            setCName('navegate');
        }
    }, [width]);
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className={cName}>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="kairo-logo" width={'150px'} />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav> <Link to={'/'}>Home</Link></Nav>
                                    <Nav> <Link to={'/services'}>Services</Link></Nav>
                                    <Nav> <Link to={'/contact'}>Contact</Link></Nav>
                                 
                                </Nav>
                                
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
