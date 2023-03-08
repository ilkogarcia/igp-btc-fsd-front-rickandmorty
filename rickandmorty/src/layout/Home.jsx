// Import layouts needed
import { Characters } from './Characters'
import { Header } from './Header'
import { Footer } from './Footer'

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
