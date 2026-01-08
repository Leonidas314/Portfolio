import '../style/Header.css'
import { motion, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from 'react';
export default function Header({ index, setIndex,scrollProgress }) {
  const items = ["About", "Projects", "Formation"]
   const glowX = useTransform(
    scrollProgress,
    [0, 1],
    [0, 2 * 160] // 160px ≈ ancho + gap
  )

  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.top, left: rect.left });
      // También puedes obtener: rect.right, rect.bottom, rect.width, rect.height
      console.log('Posición:', rect);
    }
  }, [index]); // El array vacío asegura que se ejecute solo una vez al montar

  return (
    <header className="header">
      <nav className="nav">
      
        {items.map((label, i) => (
          <button
            ref = {buttonRef}
            key={label}
            className={`nav-item ${index === i ? "active" : ""}`}
            onClick={(e) => {
                  setIndex(i);

                  const rect = e.currentTarget.getBoundingClientRect();

                  console.log({
                    index: i,
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                  });
                }}          >
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


