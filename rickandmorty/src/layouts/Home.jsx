// Import hooks from React
import React, {useEffect, useState} from 'react'

// Import layouts needed
import { Characters } from './sections/Characters'

// Import data needed
// import { charactersData } from '../database/Data'
import { getCharacters } from '../services/apiCalls'

// Import stylesheet
import './Home.css'

export const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(function () {
    const charactersList = [10,121,33,42,50]
    getCharacters(charactersList).then(characters => setCharacters(characters))
  }, [])

  return (
    <>
      <Characters charactersList={characters} />
    </>
    )
}
