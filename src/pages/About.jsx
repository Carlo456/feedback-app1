import React from 'react'
import Card from '../components/shared/Card'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
      <motion.div
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About this small proyect</h1>
        <p>Este es un proyecto de prueba de react</p>
        <p>Version 0.1</p>
        <p>
          <Link to='/'>
            Volver al inicio
          </Link>
        </p>
      </motion.div>
    </Card>
  )
}

export default About