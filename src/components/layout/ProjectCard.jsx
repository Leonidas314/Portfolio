import '../style/ProjectCard.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ title, description, image }) {
  const [flipped, setFlipped] = useState(false)
  
  return (
   <article className="project-card">
      <motion.div
        className="project-card-inner"
        onClick={() => setFlipped(prev => !prev)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
          mass: 0.8
        }}
      >
        {/* Frente */}
        <div className="project-card-front">
          <h2 className="title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>

        {/* Dorso */}
        <div
          className="project-card-back"
          style={{ backgroundImage: `url(${image})` }}
        />
      </motion.div>
    </article>
  )
}
