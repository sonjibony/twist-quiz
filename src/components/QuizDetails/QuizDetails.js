import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./QuizDetails.css";
const QuizDetails = () => {
  const details = useLoaderData();
  return (
    <div className="single-quiz">
      <h2 className="quiz-title">Quizzes Of {details.data.name}</h2>
      {/* QUIZZES INSIDE A SINGLE TOPIC */}
      {details.data.questions.map((detail, index) => (
        <SingleQuiz
          key={detail.id}
          detail={detail}
          index={index + 1}
        ></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetails;
