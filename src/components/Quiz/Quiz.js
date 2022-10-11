import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import './Quiz.css';
const Quiz = ({quiz}) => {
    const {name,logo,id,total} = quiz;
    
    return (
        <div className='quiz-card'>
           <img src={logo} alt="" ></img>  
           <div className="card-info">
            <h5>{name}</h5>
            <h5>{total} Quizzes</h5>
            <Link to={`/quiz/${id}`}>
            <button className='start-btn'>Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
 </Link>
 
           </div>
        </div>
    );
};

export default Quiz;