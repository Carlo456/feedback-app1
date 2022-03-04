import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

//Debe de usarse link en vez de <a></a> porque <a> refresca la pagina sirve para cosas externas
//en react router dom 6 se usa el atributo to en vez de path
const AboutIconLink = () => {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaInfoCircle size={40}/>
        </Link>
    </div>
  )
}

export default AboutIconLink