// Import React library
import React from 'react'

// Import components from React-Boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import images used on this file 
import characterImg from '../assets/156.jpeg'

export const Character = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={characterImg} />
            <Card.ImgOverlay>
                <Card.Title>Hemorrhage</Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
            <Card.Text>
                Alive - Human. Last known location: Post-Apocalyptic Earth. First seen in: Rickmancing the Stone.
            </Card.Text>
            <Button variant="primary">Characacter details</Button>
            </Card.Body>
        </Card>
        );
}
