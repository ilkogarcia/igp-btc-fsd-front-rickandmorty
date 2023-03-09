// Import React-Bootstrap components
import Modal from 'react-bootstrap/Modal';

const Popup = props => {
  const { show, onClose } = props;

  return (
    <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Character Detailed Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Aquí pondremos todo lo quye sabemos
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  );
};