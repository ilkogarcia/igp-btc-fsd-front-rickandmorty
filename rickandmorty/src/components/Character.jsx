// Import React library
import React from 'react'

// Import components from React-Boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Character = ({characterData}) => {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={characterData.image} />
            <Card.Body>
                <Card.Title>{characterData.name}</Card.Title>
                <Card.Text>Status: {characterData.status} <br /> Species: {characterData.species}</Card.Text>
                <Button variant="primary" size="lg">Detailed information</Button>
            </Card.Body>
        </Card>
        );
}
