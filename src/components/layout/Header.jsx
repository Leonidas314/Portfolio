import '../style/Header.css'
import { motion, useTransform } from "framer-motion"
export default function Header({ index, setIndex,scrollProgress }) {
  const items = ["About", "Projects", "Formation"]
   const glowX = useTransform(
    scrollProgress,
    [0, 1],
    [0, 2 * 160] // 160px ≈ ancho + gap
  )
  return (
    <header className="header">
      <nav className="nav">
      
        {items.map((label, i) => (
          <button
            key={label}
            className={`nav-item ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            {label}
          </button>
        ))}
        <motion.div
          className="header-glow"
          style={{ x: glowX }}
        />
      </nav>
    </header>
  )
}


