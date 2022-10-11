import React from 'react';
import './SingleQuiz.css'
const SingleQuiz = ({detail}) => {
    const {question, options, correctAnswer} = detail
    return (
        <div className='detail'>
            <p>{question}</p>
            <p>{options}</p>
        </div>
    );
};

export default SingleQuiz;