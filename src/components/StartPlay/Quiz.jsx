import React, { useState } from "react";
import { Questions } from "../../Helpers/QuestionBank";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);

  const options = ["optionA", "optionB", "optionC", "optionD"];
  
  return (
    <div className="Quiz p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">{Questions[currQuestion].question}</h2>
      <div className="options space-y-2">
        {options.map(option => (
          <button 
            key={option} 
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            {Questions[currQuestion][option]}
          </button>
        ))}
      </div>
      <button 
        className="mt-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        onClick={() => setCurrQuestion(currQuestion + 1)}
      >
        Next Question
      </button>
    </div>
  );
}

export default Quiz;