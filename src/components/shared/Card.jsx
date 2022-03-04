import React from 'react'


//children es una propiedad base de los elementosdel DOM javascript, son los elementos hijos
const Card = ({ children, reverse }) => {
  return (
    //se puede hacer condicionales con clases(abajo) y con estilos en linea, con {} agarra expresiones 
      <div 
        className={ `card ${reverse && 'reverse'}` }
      >
        { children }
      </div>  
    /*
    <div className='card' 
        style={{ 
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000', 
        }}
    >
        { children }
    </div>
    */
  )
}

Card.defaultProps = {
    reverse: false
}

export default Card