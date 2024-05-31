
import React, {useContext} from 'react';
import { QuizContext } from '../../Helpers/Contexts'

function MainMenu() {
    const {gameState, setGameState} =useContext(QuizContext);
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <button 
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'
            onClick={()=>{setGameState("quiz")}}>Start Play Quiz</button>
        </div>
    );
}

export default MainMenu;
