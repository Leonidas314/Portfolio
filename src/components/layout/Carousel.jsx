import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import "../style/Carousel.css"

export default function Carousel({index}) {

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        <section className="carousel-slide"><About/></section>
        <section className="carousel-slide"><Projects /></section>
        <section className="carousel-slide"><Skills /></section>
      </div>
    <p style={{ position: "fixed", top: 80, left: 20 }}>
      index: {index}
    </p>
    
    </div>
  )
}
