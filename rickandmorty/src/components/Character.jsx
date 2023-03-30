// Import React library
import { useState } from 'react';

// Import components from React-Boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Popup } from './Popup';

export const Character = ({characterData}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={characterData.image} />
            <Card.Body>
                <Card.Title>{characterData.name}</Card.Title>
                <Card.Text>Status: {characterData.status} <br /> Species: {characterData.species}</Card.Text>
                <Button className="button is-large" onClick={handleShow}>
                    Detailed information
                </Button>
                <Popup show={show} onClose={handleClose} characterInfo={characterData}/>
            </Card.Body>
        </Card>
        );
}
