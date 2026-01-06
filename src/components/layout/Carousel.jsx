import { useState } from "react"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Formation from "./Formation"
import "./Carousel.css"

export default function Carousel() {
  const [index, setIndex] = useState(0)

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        <section className="carousel-slide"><AboutMe /></section>
        <section className="carousel-slide"><Projects /></section>
        <section className="carousel-slide"><Formation /></section>
      </div>

      <div className="carousel-controls">
        <button onClick={() => setIndex(0)}>About Me</button>
        <button onClick={() => setIndex(1)}>Projects</button>
        <button onClick={() => setIndex(2)}>Formation</button>
      </div>
    </div>
  )
}
