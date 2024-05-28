import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const QuestionAccordion = () => {
    const { questions, selectedGame } = useContext(GameContext);

    if (!selectedGame) return <div>Please select a game first</div>;

    return (
        <div className="accordion">
            <h2>{ selectedGame.name } Questions</h2>
            { questions.map((question, index) => (
                <div key={ question.id } className="accordion-item">
                    <div className="accordion-header">
                        <button className="accordion-button" type="button" data-toggle="collapse" data-target={ `#collapse${index}` }>
                            { question.statement }
                        </button>
                    </div>
                    <div id={ `collapse${index}` } className="collapse">
                        <div className="accordion-body">
                            <ul>
                                { question.answers.map(answer => (
                                    <li key={ answer.id } style={ { color: answer.is_correct ? 'green' : 'red' } }>
                                        { answer.answer }
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default QuestionAccordion;
