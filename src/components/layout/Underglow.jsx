import "../style/Underglow.css"
import { motion, useTransform } from "framer-motion"

export default function Underglow({scrollProgress}){
   
  // 🔒 Guardia dura
  if (!scrollProgress || typeof scrollProgress.get !== "function") {
    return null
  }

  // Ajustá este valor al ancho total que debe recorrer el underline
  const underlineX = useTransform(
    scrollProgress,
    [0, 1],
    [0,240] // ejemplo: 3 secciones → 0%, 100%, 200%
  )

  return (
    <motion.div
      id="underline"
      layoutId="underline"
      style={{ x: underlineX }}
    />
  )
}