import { useState } from 'react'
import './App.css'


// Reference: https://reactjsguru.com/how-to-make-image-slider-in-react/

function Slideshow(props) {
  // pass in the props from App.jsx
  console.log(props)

  // Create a useState for the index of the slide. Set the current slide to 0
  const [currentSlide, setCurrentSlide] = useState(0)

  // Create a variable for the length of the films array
  const length = props.films.length
  console.log(`The length of the films array is ${length}`)
  
  // function for the next button. Increases the slide by 1 when "clicked on"
  // if the current slide is the last slide, then the next slide will stay the last slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? length - 1 : currentSlide + 1)
  }

  // function for the previous button. Decreases the slide by 1 when "clicked on"
  // if the current slide is the first slide, then the previous slide will stay the first slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1)
  }

  const restartSlide = () => {
    setCurrentSlide(0)
  }

  console.log(`The current slide is ${currentSlide}`)

  //'films.map' is missing in props validation

  return (
    <div className="slideshow-container">
      <div className="slideshow">

        {/* map through the films. if the index is the current slide, then set the slide
        to slide active. */}

        {props.films.map((film, index) => (
          <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
              
              {/* what is going on here inside the div? */}
              {/* the index === currentSlide shifts the slide content to the same height */}
              {index === currentSlide && (<p>{film.title}</p>)}
          
          </div>

        ))}

      <button className="restart" onClick={restartSlide}>Restart</button>
      <button className="prev" onClick={prevSlide}>Prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
            
      </div>
    </div>
  )
}

export default Slideshow
