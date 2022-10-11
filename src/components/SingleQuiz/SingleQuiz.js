import React from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({detail}) => {
    const {question, options, correctAnswer} = detail
    return (
        <div className='detail'>
            <p>{question}</p>
            <div className='quiz-options'>
            {
                options.map ( op =>
            <p className='option'> <input type="radio" name="option"/> {op}</p>
                )
            }
            </div>
        </div>
    );
};

export default SingleQuiz;