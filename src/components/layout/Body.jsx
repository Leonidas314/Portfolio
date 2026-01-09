import '../style/Body.css'
import Carousel from './Carousel';
import Underglow from './Underglow';
const Body = ({ index, carouselRef }) => {
  return (
    <main className="body-container">
      <Underglow  scrollProgress={carouselRef}></Underglow>
      <Carousel index={index} carouselRef={carouselRef} />
    </main>
  )
}

export default Body