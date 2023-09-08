import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



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
    <Container maxWidth="lg"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -70%)'}}
    >
      
      <Box className="custom-box"
        sx={{ 
          padding: 3, 
          backgroundColor: 'skyblue', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'  }}>
        
        
        {props.films.map((film, index) => (

          <Box key={index} className="custom-card"
            sx={{ 
              display: index === currentSlide ? 'block' : 'none' }}
              >
            <h1 style={{textAlign: 'center'}} >{film.title}</h1>

            <Grid  
              container spacing={2} 
              justifyContent="center" 
              alignItems="center"
              direction="row"
              sx={{ flexDirection: 'row', flexWrap: 'nowrap' }}
              
            >
              
              <Grid item >
                <Box
                  component="img"
                  src={film.image}
                  alt={film.title}
                  sx={{
                    width: 300,
                    height: 'auto',
                    
                  }}
                />
              </Grid>

              <Grid item sx={{ textAlign: 'center' }}>

                <h2>{film.original_title}</h2>
                <h3>{film.release_date}</h3>
                <p>{film.description}</p>
              
              
              </Grid>
            </Grid>
          </Box>
          
          
        ))}

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={restartSlide}
              disabled={currentSlide === 0}
            >
              Restart
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              Prev
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              onClick={nextSlide}
              disabled={currentSlide === length - 1}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Slideshow;
