import React from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({detail}) => {
    const {question, options, correctAnswer} = detail
    return (
        <div className='detail'>
            <p>{question}</p>
            {
                options.map ( op =>
            <p> <input type="radio" name="option"/> {op}</p>
                )
            }
        </div>
    );
};

export default SingleQuiz;