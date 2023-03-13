// Import stylesheets
import './Aboutus.css'

// Import React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

// Import assets
import imgSample from '../assets/156.jpeg'

// AboutUs page payout
export const Aboutus = () => {
  return (
    <>
      <Container fluid className='aboutUsPage'>
      <Row className="justify-content-md-center">
          <Col xs={12} lg={7}>
              <h1>About us...</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor quam eu odio suscipit, sit amet gravida purus tristique. Duis ullamcorper dolor ac neque faucibus, in finibus arcu pellentesque. Nullam sed suscipit dui.</p>
              <p>Aliquam erat volutpat. Proin mollis blandit maximus. Etiam varius mollis nunc eget venenatis. Nunc a metus sed dui cursus pellentesque eu et felis. Praesent tortor nunc, laoreet in sodales sed, vestibulum a dolor. Cras aliquet sed tellus non ultricies. Ut laoreet ut mi ut ullamcorper. Nulla vel tristique urna.</p>
              <h4>Titulo 2</h4>
              <p>Nullam scelerisque, mauris vitae gravida pellentesque, tellus neque hendrerit diam, vel ultricies enim odio et nulla. Suspendisse sit amet laoreet eros, a porta sem. Ut dignissim lacus vel vehicula feugiat. Donec sit amet faucibus dolor. Curabitur sit amet lobortis augue, vitae facilisis risus. In in aliquet ipsum. Integer mattis eros id velit volutpat, vel faucibus elit pretium.</p>
              <p>Pellentesque a risus vel nibh scelerisque condimentum. Ut in ipsum in velit suscipit dictum ac eu odio.</p>
          </Col>
          <Col xs={12} lg={3}>
            <Image src={imgSample} roundedCircle />
        </Col>
      </Row>
      </Container>
    </>
  )
}
