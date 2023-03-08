//Imports React library
import React from 'react'

// Imports stylesheets
import './Signin.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import own components
import { Login } from '../components/Login';

export const Singin = () => {
    return (
        <Container>
            <Row xs="auto">
                <Col>
                    <h1>The Rick And Morty API Frontend</h1>
                </Col>
            </Row>
            <Row xs="auto">
                <Col xs={12}>
                    <Login />
                </Col>
            </Row>
            <Row xs="auto">
                <Col xs={12}>
                    <p>Aquí va el pie que querramos</p>
                </Col>
            </Row>
        </Container>
    );
}
