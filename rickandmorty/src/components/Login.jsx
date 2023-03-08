// Imports stylesheets
import './Login.css'

// Import Ract-Bootstrap framework
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const Login = () => {
    return (
        <Container fluid className="loginContainer">
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <a href="/" class="btn btn-primary" role="button">Sign In</a>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
