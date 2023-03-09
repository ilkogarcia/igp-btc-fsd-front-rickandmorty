// Import React-Boostrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import components needed to build header
import { Menu } from '../../components/Menu'

// Import stylesheet
import './Header.css'

// Header layout
export const Header = () => {
  return (
    <Container fluid className='darkHeader'>
      <Row>
        <Col><Menu /></Col>
      </Row>
    </Container>
  )
}
