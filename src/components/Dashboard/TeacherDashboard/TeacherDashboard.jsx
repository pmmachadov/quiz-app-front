import React, { useEffect, useState } from 'react';
import QAList from './QAList';
import socket from '../../../socket';

const TeacherDashboard = () => {
    const [questionsData, setQuestionsData] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        socket.emit('getTopics');

        socket.on('topics', (data) => {
            setQuestionsData(data);
            setLoading(false);
        });

        socket.on('error', (errorMessage) => {
            setError(errorMessage);
            setLoading(false);
        });

        return () => {
            socket.off('topics');
            socket.off('error');
        };
    }, []);

    const fetchQuestionById = id => {
        setLoading(true);
        socket.emit('getQuestionsByTopic', id);

        socket.on('questions', (question) => {
            setSelectedQuestion(question);
            setLoading(false);
        });

        socket.on('error', (errorMessage) => {
            setError(errorMessage);
            setLoading(false);
        });

        return () => {
            socket.off('questions');
            socket.off('error');
        };
    };

    return (
        <div className="container mx-auto px-2 py-4">
            <h1 className="text-2xl font-bold mb-4">Questions by Topic</h1>
            { loading && <p>Loading...</p> }
            { error && <p className="text-red-600">{ error }</p> }
            { questionsData ? (
                <div>
                    <QAList questions={ questionsData } />
                    { selectedQuestion && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
                            <h2 className="text-xl font-semibold">Selected Question:</h2>
                            <p className="text-lg">{ selectedQuestion.question }</p>
                            <ul className="list-disc ml-5 mt-2">
                                { selectedQuestion.options.map((option, idx) => (
                                    <li key={ idx } className={ `${option === selectedQuestion.correctAnswer ? 'font-bold text-green-600' : ''}` }>
                                        { option }
                                    </li>
                                )) }
                            </ul>
                        </div>
                    ) }
                </div>
            ) : (
                !loading && <p>No data available</p>
            ) }
        </div>
    );
};

export default TeacherDashboard;
