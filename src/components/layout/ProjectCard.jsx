import '../style/ProjectCard.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ title, description, image, badgets=[] }) {
  const [flipped, setFlipped] = useState(false)
  const badgetMap = {
        react:"devicon-react-original-wordmark"
        ,tensorflow :"devicon-tensorflow-original-wordmark" 
        ,flask :"devicon-flask-original" 
        ,python :"devicon-python-plain" 
        ,docker :"devicon-docker-plain" 
        ,sqlite :"devicon-sqlite-plain"
    }
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
          <h3 id='badget-header'>Techs and frameworks</h3>
          <ul className='badget-list'>
            {badgets.map(b => (
              <li key={b}>
                <i className={`devicon-${b}-plain`}></i>
              </li>
            ))}
          </ul>          
          
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
