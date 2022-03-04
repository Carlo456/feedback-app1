import React from 'react'


//para agregar estilos inline se usa  style={{ estilos en camel case }}
//se pueden guardar estilos en variable, esas va con un solo par de {}
//los estilos se pueden pasar como props tmb y tmb ser asignados en los default props

const Header = ({text, textColor, bgColor}) => {

    const headerStyles ={
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
        
    </header>
  )
}

Header.defaultProps = {
    text: "Pokemon feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}

export default Header