import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

//hooks 
import { useState, useContext, useEffect } from 'react'


//Importar contexto
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [messageName, setMessageName] = useState('');

  useEffect(()=>{
    if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setName(feedbackEdit.item.name)
        setRating(feedbackEdit.item.rating)
        setText(feedbackEdit.item.text)
    }
  },[feedbackEdit])

  const handleTextChange = (e) => {
    //mi codigo
    /* 
      if(e.target.value.length > 10){
      setMessage('')
      setBtnDisabled(false)
    } else {
      setMessage('Se necesita una reseña de mas de 10 caracteres')
      setBtnDisabled(true)
    }
    setText(e.target.value);
    */
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) { 
      setMessage('Se necesita una reseña de mas de 10 caracteres')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
    
  }

  const handleNameChange = (event) => {
    if(name === ''){
      setBtnDisabled(true)
      setName(null)
    } else if (name !== '' && name.trim().length <= 2){
      setBtnDisabled(true)
      setMessageName('No hay pokemon con nombres tan cortos')
    } else {
      setMessageName(null)
      setBtnDisabled(false)
    }
    setName(event.target.value)
  }

  const handleRange = (e) => {
    setRating(e.target.value)
}
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    if(text.trim().length > 10 || name.trim().length > 3){
      const newFeedback = {
        name: name,
        rating: rating,
        text: text,
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      
      setName('');
      setText('');
      setRating('5');
    }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h3>Danos tu feedback del pokemon que te gusta:</h3>
            <h5>Nombre: </h5>
            <div className="input-group">
              <input type="text" onChange={handleNameChange} placeholder='Escribe el nombre del pokemon... ' value={ name }/>
            </div>
            <h5>Calificacion</h5>
            <div className='input-group'>
              <p>
                Escoge en slider la calificacion que le des al pokemon: {rating}/10.
              </p>
              <input type="range" min="1" max="10" onChange={handleRange} value={rating} />  
            </div>
            <h5>Reseña</h5>
            <div className='input-group'>
                <input type="text" onChange={handleTextChange} placeholder='Escribe una reseña... ' value={ text }/>
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>
                  Valorar
                </Button>
            </div>
            {messageName && <div className='message'>{messageName}</div>}
            {message && <div className='message'>{message}</div>}
            
        </form>
    </Card>
  )
}

export default FeedbackForm