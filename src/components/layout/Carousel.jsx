import { useRef, useEffect } from "react"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import "../style/Carousel.css"

export default function Carousel({index, carouselRef}) {

  /* Sincronizar header -> scroll */
   useEffect(() => {
    if (!carouselRef.current) return

    carouselRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    })
  }, [index, carouselRef])

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-track">
        <section className="carousel-slide"><About /></section>
        <section className="carousel-slide"><Projects /></section>
        <section className="carousel-slide"><Skills /></section>
      </div>
    </div>
  )
}
