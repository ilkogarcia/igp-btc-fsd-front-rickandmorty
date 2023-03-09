// Import layouts needed
import { Characters } from './sections/Characters'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

// Import data needed
import { charactersData } from '../database/Data'

// Import stylesheet
import './Home.css'

export const Home = () => {
  return (
    <>
      <Header />
      <Characters charactersList={charactersData} />
      <Footer />
    </>
    )
}
