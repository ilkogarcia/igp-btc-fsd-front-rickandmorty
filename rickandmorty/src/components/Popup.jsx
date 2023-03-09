// Import React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

// Import stylesheet
import './Popup.css'

export const Popup = props => {
  const { show, onClose } = props;

  return (
    <Modal show={show} size="lg" onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{props.characterInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col xs={12} lg={6}>
                <p className='title'>Status: <br /><span>{props.characterInfo.status}</span></p>
                <p className='title'>Species: <br /><span>{props.characterInfo.species}</span></p>
                <p className='title'>Gender: <br /><span>{props.characterInfo.gender}</span></p>
                <p className='title'>Created: <br /><span>{props.characterInfo.created}</span></p>
                <p className='title'>Origin: <br /><span>{props.characterInfo.origin.name}</span></p>
                <p className='title'>Location: <br /><span>{props.characterInfo.location.name}</span></p>
                <p className='title'>URL: <br /><span><a href={props.characterInfo.url} target='_blank'>{props.characterInfo.url}</a></span></p>
              </Col>
              <Col xs={12} lg={5}>
                <Image src={props.characterInfo.image} roundedCircle/>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  );
};