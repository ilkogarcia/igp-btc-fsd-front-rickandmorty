// Import layouts needed
import { Header } from './Header'
import { Footer } from './Footer'

// Import React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Imports stylesheets
import './Aboutus.css'

// AboutUs page payout
export const Aboutus = () => {
  return (
    <>
      <Header />
        <Container fluid className='aboutUsContainer'>
        <Row>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, massa id maximus sollicitudin, leo diam rhoncus metus, eleifend ornare eros magna id magna. Suspendisse non magna a massa gravida tristique sit amet a metus.</p>
              <p>Aliquam ut blandit turpis. Vivamus cursus laoreet lacus in sagittis. Nulla nec felis eu felis gravida maximus. Nam pretium nisi in sapien consectetur posuere. Pellentesque sit amet scelerisque nunc, id vehicula ipsum.</p>
              <p>Pellentesque a risus vel nibh scelerisque condimentum. Ut in ipsum in velit suscipit dictum ac eu odio.</p>
            </Col>
        </Row>
        </Container>
      <Footer />
    </>
  )
}
