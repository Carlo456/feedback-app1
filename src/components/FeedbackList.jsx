import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

    const { feedback } = useContext(FeedbackContext);

    if(!feedback || feedback.lenght === 0){
        return (<h3>No hay Pokemon por listar, sorry</h3>)      
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {
                feedback.map((feedback, index) => (
                    <motion.div 
                        key={ index }
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        exit={{ opacity:0 }}
                    >
                        <FeedbackItem key={ index } feedback={feedback}/>
                    </motion.div>
                )) 
            }
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList