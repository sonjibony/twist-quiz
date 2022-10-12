import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data[0].id);

    
   
    return (
        <div className='home'>
          <Header></Header>
          <h1 className='category-title'>Quiz Categories</h1>
          <hr className='line'/>
          <div className="quiz-container">
          {
          quiz.data.map(qz => <Quiz
          key={qz.id}
          quiz= {qz}
        
          ></Quiz>)
          }
        
          </div>
        </div>
    );
};

export default Home;