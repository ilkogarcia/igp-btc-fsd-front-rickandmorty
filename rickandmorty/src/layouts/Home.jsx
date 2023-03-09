// Import layouts needed
import { Characters } from './sections/Characters'

// Import data needed
import { charactersData } from '../database/Data'

// Import stylesheet
import './Home.css'

export const Home = () => {
  return (
    <>
      <Characters charactersList={charactersData} />
    </>
    )
}
