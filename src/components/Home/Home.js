import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data[0].name);
    return (
        <div className='home'>
          <Header></Header>
          <h2>Quiz Categories</h2>
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