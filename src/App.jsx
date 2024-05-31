import React, { useState } from 'react'
import './App.css'
import MainMenu from './components/StartPlay/MainMenu'
import Quiz from './components/StartPlay/Quiz'
import EndSession from './components/StartPlay/EndSession'
import { QuizContext } from './Helpers/Contexts'
import './styles/index.css';

function App() {
  const [gameState, setGameState] = useState("menu");
  
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center my-4">Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndSession />}
      </QuizContext.Provider>
    </div>
  )
}

export default App;
