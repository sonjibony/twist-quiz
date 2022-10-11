import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './QuizDetails.css';
const QuizDetails = () => {
    const details = useLoaderData();
    console.log(details.data);
    return (
        <div className='single-quiz'>
{
    details.data.questions.map(detail => <SingleQuiz
    key={detail.id}
    detail = {detail}
   
   >
</SingleQuiz> )
}
        </div>
    );
};

export default QuizDetails;