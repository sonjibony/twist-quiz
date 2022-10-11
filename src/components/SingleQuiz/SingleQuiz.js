import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight,faEye } from '@fortawesome/free-solid-svg-icons';
import './SingleQuiz.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SingleQuiz = ({detail,index}) => {
    const {question, options,correctAnswer} = detail;

const onAnswerSelect = selectedAnswer =>{
    if(selectedAnswer===correctAnswer){
        
        toast.success('Correct Answer!',{autoClose:1000});
    }
    else{
    
        toast.error('Wrong Answer!',{autoClose:1000});
    }
}
const onEyeSelect = () =>{
toast.info(correctAnswer)
}
    // console.log(detail)
    return (
        <div className='detail'>
            <div className="question-container">
       {/* <h4>{index}.</h4> 
            <h4 className='question' dangerouslySetInnerHTML={{__html:question}}></h4> */}
              <h4 className='question' dangerouslySetInnerHTML={{__html:`${index}.${question}`}}></h4>
            <FontAwesomeIcon icon={faEye} onClick={onEyeSelect}></FontAwesomeIcon>
            </div>
            <div className='quiz-options'>
            {
                options.map ( op =>
            <button key={op} className='option'> <input  type="radio" name="option" value={op} 
            onChange={(e) => onAnswerSelect(e.target.value)} /> {op}         <ToastContainer />
            </button>
            // <button  key={op}  className='option'> {op}</button>
                )
            }
            </div>
        </div>
    );
};

export default SingleQuiz;