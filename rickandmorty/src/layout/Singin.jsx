// Imports stylesheets
import './Singin.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import own components
import { Login } from '../components/Login';

export const Singin = () => {
    return (
        <Container className="signInPage">
            <Container>
                <Row>
                    <Col xs={6}>
                        <Login />
                    </Col>
                    <Col xs={4}>
                        <h1 className='pageTitle'>Rick & Morty API</h1>
                        <p className='pageText'>I have created this application with the objective of learning how to develop with React.js. In it we are going to play a bit with the public API of "The Rick and Morty API".</p>
                        <p className='smallText'>This API created by Axel Fuhrmann is open source and uses a BSD license.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
