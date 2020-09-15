import React from 'react'
import Carousel from "react-bootstrap/Carousel"
class Beranda extends React.Component {
    render(){
        return(
            <div>
               <div class="alert alert-primary" role="alert">
  <center><h2>WELCOME AND ENJOY!</h2></center></div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="slide2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="slide3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
        )
    }
}
export default Beranda;

