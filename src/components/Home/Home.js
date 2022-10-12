import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutMe from '../Extra/Extra';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();
  

    
   
    return (
        <div className='home'>
          {/* header component called */}
          <Header></Header>
          <h1 className='category-title'>Quiz Categories</h1>
          <hr className='line'/>
          {/* quiz topics called */}
          <div className="quiz-container">
          {
          quiz.data.map(qz => <Quiz
          key={qz.id}
          quiz= {qz}
        
          ></Quiz>)
          }
        
          </div>
          {/* EXTRA  SECTION */}
          <AboutMe></AboutMe>

        </div>
    );
};

export default Home;