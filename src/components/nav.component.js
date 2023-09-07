import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown,Form,Offcanvas} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Colors} from '../constants/colors'
import '../constants/styles.css'
export default function NavComponent() {

    const [isActive, setActive] = useState('home');
    const handleClick = (param) => {
        console.log(`Link clicked with param: ${param}`);
        setActive(param);
    }

    return (
        <>
            <div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 0}}>
                {['sm'].map((expand) => (
                    <Navbar  style={{background:Colors.colorA}} expand={expand} >
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img src="assets/img/logo.jpg" width='120px' style={{paddingLeft:15}}/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas style={{background:Colors.colorA}}
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src="assets/img/logo.jpg" width='100px' style={{paddingLeft:15}}/>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 homeBtn">
                                        <Nav.Link style={{fontWeight:"bold"}} >
                                            <Link onClick={() => handleClick('home')} to="/" style={{textDecoration:'none',color:isActive=='home'?'gray':'white'}}>
                                                Home
                                            </Link>
                                        </Nav.Link>
                                        {/*<Nav.Link href="#action2">Current</Nav.Link>*/}
                                        <NavDropdown style={{fontWeight:"bold",color:"#ffffff"}} title="Issues" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/currentIssue" style={{textDecoration:'none',color:"#524930"}}>
                                                    Current Issue
                                                </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown style={{fontWeight:"bold",color:"#ffffff"}} title="Editorial Board" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/boardOfEditorsView" style={{textDecoration:'none',color:"#524930"}}>
                                                    Editorial Board
                                                </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/editorialPolicies" style={{textDecoration:'none',color:"#524930"}}>
                                                    Editorial Policies
                                                </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/codeOfEthics" style={{textDecoration:'none',color:"#524930"}}>
                                                    Code of Ethics
                                                </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('submission')}  to="/submission"  style={{textDecoration:'none',color:isActive=='submission'?'gray':'white'}}>
                                                Submission
                                            </Link>
                                        </Nav.Link>

                                        <NavDropdown style={{fontWeight:"bold",color:"#ffffff"}} title="Guidelines & Policies" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/guidelines" style={{textDecoration:'none',color:"#524930"}}>
                                                    Guidelines
                                                </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link onClick={() => handleClick('a')} to="/policies" style={{textDecoration:'none',color:"#524930"}}>
                                                    Policies
                                                </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  to="/aboutUs"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                About
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link to="/contactUs" onClick={() => handleClick('contact')} style={{textDecoration:'none',color:isActive=='contact'?'gray':'white'}}>
                                                Contact Us
                                            </Link>
                                        </Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </>



    );

}
