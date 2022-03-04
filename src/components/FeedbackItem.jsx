import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from "./shared/Card"

const FeedbackItem = ({ feedback }) => {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
        <div className="num-display">{ feedback.rating+'/10' }</div>
        <button className='edit' onClick={() => editFeedback(feedback)}>
          <FaEdit color='purple'/>
        </button>
        <button onClick={() => handleDelete(feedback.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">
          <h3>{ feedback.name }</h3>
          { feedback.text }
        </div>
    </Card>
  )
}



export default FeedbackItem