import { useRef, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import "../style/Carousel.css"

const sections = ["about","projects","skills"];

export default function Carousel({index}) {

  const containerRef = useRef(null)

  const { scrollXProgress } = useScroll({
    container: containerRef
  })

  /* Sincronizar header -> scroll */
  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    })
  }, [index])

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel-track">
        <section className="carousel-slide"><About/></section>
        <section className="carousel-slide"><Projects /></section>
        <section className="carousel-slide"><Skills /></section>
      </div>
    </div>
  )
}
