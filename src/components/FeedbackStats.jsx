import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext);
  
    let promedio = feedback.reduce((acumulador, currentValue) => {  
      return  acumulador + (currentValue.rating) / feedback.length
    }, 0);

    promedio.toFixed(2);    
  return (
    <div className='feedback-stats'>
        <h4>Numero de reseñas: {feedback.length}</h4>
        <h4>Promedio de calificaciones: { isNaN(promedio) ? 0 : promedio }</h4>
    </div>
  )
}


export default FeedbackStats