import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'


function ImageSlider() {
  return (
    <div>
<Carousel>
  <Carousel.Item>
          <img
            id="slider-img"
    
      src="https://images.unsplash.com/photo-1530745342582-0795f23ec976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="caption">Declutter Your Space</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
          <img
              id="slider-img"
     
      src="https://images.unsplash.com/photo-1570554634503-9d0f79c97dd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="caption">Try Something New</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
          <img
              id="slider-img"
    
      src="https://images.unsplash.com/photo-1602910344008-22f323cc1817?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwYXJ0aXN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="caption">Share with Friends</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default ImageSlider;

