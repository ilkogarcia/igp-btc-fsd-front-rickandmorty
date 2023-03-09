// Imports stylesheets
import './Signup.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import own components
import { Register } from '../components/Register';

export const Signup = () => {
  return (
    <Container className="signUpPage">
        <Container>
            <Row>
                <Col xs={6}>
                    <Register />
                </Col>
                <Col xs={4}>
                    <h1 className='pageTitle'>Rick & Morty API</h1>
                    <p className='pageText'>Register to unlock the advanced options of the application.</p>
                    <p className='pageSmallText'>This API created by Axel Fuhrmann is open source and uses a BSD license.</p>
                </Col>
            </Row>
        </Container>
    </Container>
);
}