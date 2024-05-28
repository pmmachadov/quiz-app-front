import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const QuestionList = () => {
    const { questions, selectedGame } = useContext(GameContext);

    if (!selectedGame) return <div>Please select a game first</div>;

    return (
        <div>
            <h2>{ selectedGame.name } Questions</h2>
            <ul>
                { questions.map(question => (
                    <li key={ question.id }>
                        <p>{ question.statement }</p>
                        <ul>
                            { question.answers.map(answer => (
                                <li key={ answer.id } style={ { color: answer.is_correct ? 'green' : 'red' } }>
                                    { answer.answer }
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
