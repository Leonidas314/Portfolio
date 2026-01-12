import '../style/Header.css'
import Underglow from './Underglow'
import { useRef, useLayoutEffect, useState , useEffect } from "react"
import { useTransform  } from 'framer-motion'
import { useMotionValue } from 'framer-motion'
export default function Header({ index, setIndex , scrollProgress}) {
  
  const items = ["About", "Projects", "Formation"]
  const [firstButton, setFirstButtonX] = useState(0)
  const textCenters = useRef([]) // number[]
  const baseX = useMotionValue(0)
  const labelRefs = useRef([])
  const navRef = useRef(null)

  const scrollOffset = useTransform(
  scrollProgress,
  [0, 1],
  textCenters.current.length
    ? [textCenters.current[0], textCenters.current.at(-1)]
    : [0, 0]
  )

  const underlineX = useTransform(
    [baseX, scrollOffset],
    ([x, scrollX]) => scrollX || x
  )
  
  const handleClick = (i) => {
    setIndex(i)
    window.scrollTo({
      left: i * window.innerWidth,
      behavior: "smooth"
    })
  }

  useLayoutEffect(() => {
    const navRect = navRef.current.getBoundingClientRect()

    textCenters.current = labelRefs.current.map(label => {
      const rect = label.getBoundingClientRect()
      return rect.left + rect.width / 2 - navRect.left
    })
  }, [])


  useLayoutEffect(() => {
    const label = labelRefs.current[index]
    const nav = navRef.current
    if (!label || !nav) return

    const labelRect = label.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()

    const centerX =
      labelRect.left +
      labelRect.width / 2 -
      navRect.left

    baseX.set(centerX)
  }, [index])


  return (
    <header className="header">
      <nav className="nav" ref={navRef}>
      
        {items.map((label, i) => (
        <button
          key={label}
          className={`nav-item ${index === i ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          <span
            className="nav-label"
            ref={(el) => (labelRefs.current[i] = el)}
          >
            {label}
          </span>
        </button>
      ))}

      <Underglow x={underlineX} scrollProgress={scrollOffset}/>
        
      </nav>

    </header>
  )
}


