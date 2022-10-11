import React from 'react';
import './Error.css'
const Error = () => {
    return (
        <div className='error-container'>
            <div>
                <h1 className='msg-one'>Uh oh...not again!</h1>
                <p className='msg-two'>Why do you guys keep getting lost? Well, I have searched high and low but could not find what you're looking for.So why don't you go and find a better place for yourself?</p>
            </div>
            <img src={"https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1931.jpg?w=740&t=st=1665513724~exp=1665514324~hmac=ef56c7f69c53bc904a9879a814bbd2b92e9db2300d522cebb72f74b232a92bde"} alt=""></img>
        </div>
    );
};

export default Error;