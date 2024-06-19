import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import StartWaitingButton from '../StartWaitingButton/StartWaitingButton';
import { v4 as uuidv4 } from 'uuid';

const getIcon = (name) => {
    switch (name.toLowerCase()) {
        case 'javascript':
            return <FaJs className="w-24 h-24 text-yellow-500" />;
        case 'react.js':
            return <FaReact className="w-24 h-24 text-blue-400" />;
        case 'node.js':
            return <FaNodeJs className="w-24 h-24 text-green-500" />;
        case 'sql':
            return <FaDatabase className="w-24 h-24 text-gray-500" />;
        default:
            return null;
    }
};

const QuestionList = () => {
    const { questions, selectedGame } = useContext(GameContext);

    console.log('Selected game:', selectedGame);
    console.log('Questions:', questions);

    if (!selectedGame) return <div className="text-center text-xl">Please select a game first</div>;

    return (
        <div className="p-6">
            <div className="flex justify-center">
                <div className="flex items-center p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-300" style={ { height: '140px', width: '70%' } }>
                    { getIcon(selectedGame.name) }
                    <h2 className="text-3xl font-bold text-center w-full">{ selectedGame.name } Questions</h2>
                    <StartWaitingButton topicId={ selectedGame.id.toString() } />
                </div>
            </div>
            <ul className="space-y-4 mt-6">
                { questions.map((question) => (
                    <li key={ uuidv4() } className="mx-auto p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-300" style={ { width: '70%' } }>
                        <p className="font-bold text-lg text-gray-800 mb-4">{ question.statement.replace(/<\/?[^>]+(>|$)/g, '') }</p>
                        <ul className="space-y-2">
                            { question.answers.map((answer) => (
                                <li key={ uuidv4() } className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={ answer.is_correct }
                                        readOnly
                                        className="form-checkbox h-5 w-5 text-green-600"
                                    />
                                    <span className={ answer.is_correct ? 'text-green-800 font-bold' : 'text-gray-800' }>
                                        { answer.answer }
                                    </span>
                                </li>
                            )) }
                        </ul>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default QuestionList;
