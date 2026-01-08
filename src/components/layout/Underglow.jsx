import "../style/Underglow.css"
import { motion } from "framer-motion"
export default function Underglow({scrollProgress}){
   
  return(
    <div className="underglow-continer">
      <motion.div className="underglow" style={{scaleX : scrollProgress}}/>
    </div>
  )
}