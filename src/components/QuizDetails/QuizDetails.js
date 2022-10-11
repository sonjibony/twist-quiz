import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './QuizDetails.css';
const QuizDetails = () => {
    const details = useLoaderData();

    

    // console.log(details.data.questions[0].id);
    return (
        <div className='single-quiz'>
            <h2>Quizzes Of {details.data.name}</h2>
{
    
    details.data.questions.map((detail,index) => 
    <SingleQuiz
    key={detail.id}
    detail = {detail}
        index = {index+1}
   >
</SingleQuiz> )
}
        </div>
    );
};

export default QuizDetails;