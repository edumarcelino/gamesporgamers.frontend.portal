import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {

    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const fetchBadges = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/badges');
                setBadges(response.data);
            } catch (error) {
                console.error('Error fetching badges:', error);
            }
        };

        fetchBadges();
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="/logo/logoGamesPorGamers.png" alt="Logo" className="logo" width={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', color: 'white' }} navbarScroll>
                        {badges.map((badge) => (
                            <Nav.Link key={badge.id} as={Link} to={`/${badge.name}`} className="link-item" style={{ color: 'white', paddingLeft: '20px' }}>
                                {badge.name === 'Playstation' ? (
                                    <img src="/icon/icons8-playstation-60.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'X-Box' ? (
                                    <img src="/icon/icons8-xbox-100.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'Nintendo' ? (
                                    <img src="/icon/icons8-nintendo-switch-logo-120.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'PC' ? (
                                    <img src="/icon/icons8-computer-game-64.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'IOS' ? (
                                    <img src="/icon/icons8-ios-100.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'Android' ? (
                                    <img src="/icon/icons8-android-100.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'Portatéis' ? (
                                    <img src="/icon/icons8-gameboy-64.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'Cinema/Séries' ? (
                                    <img src="/icon/icons8-movie-100.png" alt="Logo" className="logo" width={35} />
                                ) : badge.name === 'Anime/HQ/Mangá' ? (
                                    <img src="/icon/icons8-anime-128.png" alt="Logo" className="logo" width={35} />
                                ) : (
                                    <FaGamepad className="icon" />
                                )}
                                {/*<span className="link-text" style={{ paddingLeft: '10px' }}>{badge.name}</span> */}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" style={{ width: '200px' }} />
                        <Button variant="outline-dark">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;