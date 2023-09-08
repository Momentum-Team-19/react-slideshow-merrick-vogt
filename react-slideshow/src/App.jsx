import Slideshow from './Slideshow'
import filmData from './film-data.json'

function App() {

  return (
    <>
      <Slideshow 
        films = {filmData}

      />
    </>
  )
}

export default App
