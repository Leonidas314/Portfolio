import '../style/Header.css'
import { useRef } from 'react'

export default function Header({ index, setIndex  }) {
  const items = ['About', 'Projects', 'Formation']
  const navRef = useRef(null)
  const handleClick = i => {
    setIndex(i)
    window.scrollTo({
      left: i * window.innerWidth,
      behavior: 'smooth'
    })
  }
  return (
    <header className="header">
      <nav className="nav" ref={navRef}>
        {items.map((label, i) => (
          <button
            key={label}
            className={`nav-item ${index === i ? 'active' : ''}`}
            onClick={() => handleClick(i)}
          >
            <span>
              {label}
            </span>
          </button>
        ))}
      </nav>
    </header>
  )
}
