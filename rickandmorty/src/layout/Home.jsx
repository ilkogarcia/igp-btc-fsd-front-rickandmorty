// Import layouts needed
import { Characters } from '../layout/Characters'

// Import data needed
import { charactersData } from '../database/Data'

export const Home = () => {
  return (
    <Characters charactersList={charactersData}/>
    )
}
