// Import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import components needed
import { Character }  from '../components/Character'

// Import stylesheet
import './Characters.css'

export const Characters = ({charactersList}) => {
  return (
    <>
    <Container fluid>
      <Row className='gx-2 gy-2'>
          {charactersList.map(character => { return <Col><Character key={character.id} characterData={character}/></Col>})}
      </Row>
    </Container>
    </>
  )
}
