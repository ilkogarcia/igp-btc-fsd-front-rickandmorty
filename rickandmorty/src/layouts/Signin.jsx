// Imports stylesheets
import './Signin.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import own components
import { Login } from '../components/Login';

export const Signin = () => {
    return (
        <Container fluid className="signInPage">
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <Login />
                            </Col>
                            <Col xs={4}>
                                <h1 className='pageTitle'>Rick & Morty API</h1>
                                <p className='pageText'>Provide your credentials to access.</p>
                                <p className='pageSmallText'>This API created by Axel Fuhrmann is open source and uses a BSD license.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
