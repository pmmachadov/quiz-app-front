import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import * as Icons from 'react-icons/fa'; // Importa todos los íconos de FontAwesome

const StudentWaitingRoom = () => {
    const { selectedGame, questions } = useContext(GameContext);
    const student = JSON.parse(localStorage.getItem('student'));

    const IconComponent = Icons[student.icon];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Waiting Room</h1>
            { student && (
                <div className="flex items-center mb-4">
                    { IconComponent && <IconComponent size={ 50 } className="mr-2" /> }
                    <h2 className="text-2xl">{ student.username }</h2>
                </div>
            ) }
            { selectedGame && (
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{ selectedGame.name }</h2>
                    <ul className="list-disc pl-5">
                        { questions.map((question, index) => (
                            <li key={ index } className="mb-2">{ question.statement }</li>
                        )) }
                    </ul>
                </div>
            ) }
        </div>
    );
};

export default StudentWaitingRoom;
