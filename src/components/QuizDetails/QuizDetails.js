import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './QuizDetails.css';
const QuizDetails = () => {
    const details = useLoaderData();
    console.log(details.data.questions);
    return (
        <div>
{
    details.data.questions.map(detail => <SingleQuiz
    key={details.data.questions.id}
    detail = {detail}
   
   >
</SingleQuiz> )
}
        </div>
    );
};

export default QuizDetails;