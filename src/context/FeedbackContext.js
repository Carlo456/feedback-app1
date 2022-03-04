import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            name: 'missingno',
            rating: 1,
            text: 'pkm de prueba'
        },
        {
            id: 2,
            name: 'missingno22',
            rating: 1,
            text: 'pkm de prueba'
        },
        {
            id: 3,
            name: 'missingno222',
            rating: 1,
            text: 'pkm de prueba'
        },
    ])
    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        //como el estado es inmutable se debe agregar a un arreglo con el spread operator
        setFeedback([newFeedback, ...feedback]);
    }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    const handleDelete = (id) => {
        setFeedback( feedback.filter((item) => item.id !== id ))
    }

    const updateFeedback = (id, updatedFeedback) => {
        setFeedback(
            feedback.map((item)=> item.id === id ? updatedFeedback : item)   
        )
        setFeedbackEdit({ 
            item:{},
            edit: false
        })
    }

    return <FeedbackContext.Provider 
    value={{
        editFeedback,
        feedbackEdit,
        feedback,
        handleDelete,
        addFeedback,
        updateFeedback,
    }}>
        { children }
    </FeedbackContext.Provider>;
}

export default FeedbackContext;