import "../style/Underglow.css"
import { motion, useMotionValue, useSpring , useTransform} from "framer-motion"
import { useLayoutEffect } from "react"
export default function Underglow({x}){
   
  /* 🔒 Guardia dura
  if (!scrollProgress || typeof scrollProgress.get !== "function") {
    return null
  }

  // Ajustá este valor al ancho total que debe recorrer el underline
  const underlineX = useTransform(
    scrollProgress,
    [0, 1],
    [elementPosition,1400] // ejemplo: 3 secciones → 0%, 100%, 200%
  )
  const scaleX = useTransform(//visual width variation
    scrollProgress,
    [0,1],
    [0.3,1]
  )

  const width = useTransform(//structural width variation
    scrollProgress, 
    [0, 1], 
    [40, 240]
  )

  const opacity = useTransform(//visual opacity variation
    scrollProgress,
    [0, 0.2, 1], 
    [0, 1, 1]
  )

  const boxShadow = useTransform(//visual glowshadow
    scrollProgress,
    [0, 1],
    [ 
      "0px 0px 4px rgba(0,255,255,0.2)",
      "0px 0px 18px rgba(0,255,255,0.9)"
    ]
  )

  const x2 = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 400,
    damping: 35
  })

  useLayoutEffect(() => {
    x.set(elementPosition)
  }, [elementPosition])
  */
  return (
    <motion.div
      id="underline"
      className="underglow"
      layoutId="underline"
       style={{ x }}
    />
  )
}