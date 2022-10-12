import React from "react";
// FONT AWESOME IMPORTED FOR ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./SingleQuiz.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const SingleQuiz = ({ detail, index }) => {
  const { question, options, correctAnswer } = detail;

  // TOASTIFY IN TRUE CONDITION ADDED

  const onAnswerSelect = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      toast.success("Correct Answer!", { autoClose: 1000 });
    } else {
      toast.error("Wrong Answer!", { autoClose: 1000 });
    }
  };
  const onEyeSelect = () => {
    toast.info(correctAnswer);
  };
  return (
    // QUIZ QUESTION AND ANSWERS ADDED
    <div className="detail">
      <div className="question-container">
        <h4
          className="question"
          dangerouslySetInnerHTML={{ __html: `${index}.${question}` }}
        ></h4>
        <div>
          <FontAwesomeIcon icon={faEye} onClick={onEyeSelect}></FontAwesomeIcon>
        </div>
      </div>
      <div className="quiz-options">
        {options.map((op) => (
          <label key={op} className="option">
            {" "}
            <input
              type="radio"
              name="option"
              value={op}
              onChange={(e) => onAnswerSelect(e.target.value)}
            />{" "}
            {op}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
