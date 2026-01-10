import '../style/Header.css'
import Underglow from './Underglow'
import { useRef, useLayoutEffect, useState , useEffect } from "react"
import { useTransform } from 'framer-motion'
export default function Header({ index, setIndex , scrollProgress}) {
  
  const items = ["About", "Projects", "Formation"]
  const buttonRefs = useRef([])
  //const [elementPosition, setElementPosition] = useState(0)
  const [positions, setPositions] = useState([])
  const underlineX = useTransform(
  scrollProgress,
  [0, 1],
  positions.length
    ? [positions[0], positions.at(-1)]
    : [0, 0]
  )
  const handleClick = (i) => {
  setIndex(i)

  window.scrollTo({
    left: i * window.innerWidth,
    behavior: "smooth"
  })
}
useEffect(() => {
  const section = Math.round(scrollProgress.get() * (items.length - 1))
  setIndex(section)
}, [scrollProgress])

 useLayoutEffect(() => {
  if (!buttonRefs.current.length) return

  const parentRect = buttonRefs.current[0].parentElement.getBoundingClientRect()

  const xs = buttonRefs.current.map((el) => {
    const rect = el.getBoundingClientRect()
    return rect.left - parentRect.left + rect.width / 2
  })

  setPositions(xs)
}, [])
  return (
    <header className="header">
      <nav className="nav">
      
        {items.map((label, i) => (
          <button
            key={label}
            className={`nav-item ${index === i ? "active" : ""}`}
            ref={(el) => (buttonRefs.current[i] = el)}
            onClick={()=>handleClick(i)}
          >
            {label}
          </button>
        ))}
        <Underglow x={underlineX}/>
        
      </nav>

    </header>
  )
}


