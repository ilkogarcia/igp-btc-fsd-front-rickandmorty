// Import hooks from React
import React, {useEffect, useState} from 'react'

// Import React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Import components needed
import { Character }  from '../../components/Character'

// Import stylesheet
import './Characters.css'

export const Characters = ({charactersList}) => {
  // const [characters, setCharacters] = useState([])

  // useEffect(function () {
  //   const charactersList = [10,121,33,42,50]
  //   getCharacters(charactersList).then(characters => setCharacters(characters))
  // }, [])


  return (
    <>
    <Container fluid className='charactersGrid'>
      <Row className='gx-2 gy-2 justify-content-center'>
          {charactersList.map(character => { return <Col key={character.id}><Character characterData={character}/></Col>})}
      </Row>
      <Row className='mt-2 gap-2 justify-content-center'>
        <Col md='auto'>
          <Button variant="secondary">Previous 5</Button>
        </Col>
        <Col md='auto'>
          <Button variant="secondary">Next 5</Button>
        </Col>

      </Row>
    </Container>
    </>
  )
}
