import '../style/Body.css'
import { forwardRef } from 'react';
import Carousel from './Carousel';

const Body = ({ index, carouselRef }) => {
  return (
    <main className="body-container">
      <Carousel index={index} carouselRef={carouselRef} />
    </main>
  )
}

export default Body