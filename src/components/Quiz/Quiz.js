import React from 'react';
import './Quiz.css';
const Quiz = ({quiz}) => {
    const {name,logo} = quiz;
    return (
        <div className='quiz-card'>
           <img src={logo} alt="" ></img>  
           <div className="card-info">
            <h5>{name}</h5>
            <button>Start</button>
            
           </div>
        </div>
    );
};

export default Quiz;