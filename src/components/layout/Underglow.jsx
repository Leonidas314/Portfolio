import { motion, useSpring } from "framer-motion"
import "../style/Underglow.css"

export default function Underglow({ x, width }) {
  const animatedX = useSpring(x, {
    stiffness: 300,
    damping: 30
  })

  const animatedWidth = useSpring(width, {
    stiffness: 300,
    damping: 30
  })

  return (
    <motion.div
      className="underglow"
      style={{
        x: animatedX,
        width: animatedWidth
      }}
    />
  )
}
