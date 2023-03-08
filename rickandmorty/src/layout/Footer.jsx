// Import React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import stylesheet
import './Footer.css'

export const Footer = () => {
  return (
    <Container fluid className='darkFooter'>
      <Row className="justify-content-md-center">
        <Col xs lg="3">Aquuí pondremos info...</Col>
        <Col xs lg="3">Aquí pondremos más info...</Col>
        <Col xs lg="3">...aquí van los créditos</Col>
      </Row>
    </Container>
  )
}



