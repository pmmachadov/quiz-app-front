import React, { useState } from "react";
import { Questions } from "../../Helpers/QuestionBank";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(1);
  return (
    <div className="Quiz">
      <h2>{Questions[currQuestion].question}</h2>
      <div className="options">
        <button>{Questions[currQuestion].optionA}</button>
        <button>{Questions[currQuestion].optionB}</button>
        <button>{Questions[currQuestion].optionC}</button>
        <button>{Questions[currQuestion].optionD}</button>
      </div>
    </div>
  );
}

export default Quiz;
