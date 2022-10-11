import React, { useState } from 'react';
import './SingleQuiz.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SingleQuiz = ({detail,index}) => {
    const {question, options,id,correctAnswer} = detail;

const onAnswerSelect = selectedAnswer =>{
    if(selectedAnswer===correctAnswer){
        // alert('correct')
        toast.success('Correct Answer!',{autoClose:1000});
    }
    else{
        // alert('incorrect')
        toast.error('Wrong Answer!',{autoClose:1000});
    }
}
    // console.log(detail)
    return (
        <div className='detail'>
        
            <p dangerouslySetInnerHTML={{__html:`${index}${question}`}}></p>
    
            <div className='quiz-options'>
            {
                options.map ( op =>
            <button key={op} className='option'> <input  type="radio" name="option" value={op} 
            onChange={(e) => onAnswerSelect(e.target.value)} /> {op}         <ToastContainer />
            </button>
            // <button  key={op}  className='option'> {op}</button>
                )
            }
            </div>
        </div>
    );
};

export default SingleQuiz;