import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='banner'>
            
            
            <img src={"https://img.freepik.com/free-vector/hand-drawn-businesswoman-using-magnifier-find-something-clipart-gesture-character_40876-3035.jpg?w=740&t=st=1665521357~exp=1665521957~hmac=0aeda73be3bc0c6a00006384c14ea2f2382dc81ad70c642083bedc9f167e886e"} alt="" ></img>
            <div className='banner-info'>
                <h1 className='title'>WE QUIZ THEREFORE WE ARE
               </h1>
                <p className='banner-text'>Unlocking knowledge at the speed of thought.Take the quizzes, boost your brain. </p>
            </div>
        </div>
    );
};

export default Header;