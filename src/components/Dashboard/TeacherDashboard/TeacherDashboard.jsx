import React, { useEffect, useState } from 'react';
import QAList from './QAList';

const TeacherDashboard = () => {
    const [questionsData, setQuestionsData] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/topic-questions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setQuestionsData(data.questions);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const fetchQuestionById = id => {
        setLoading(true);
        fetch(`http://localhost:3000/api/topic-questions/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(question => {
                console.log('Fetched question:', question);
                setSelectedQuestion(question);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching question:', error);
                setError(error);
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto px-2 py-4">
            <h1 className="text-2xl font-bold mb-4">Questions by Topic</h1>
            { loading && <p>Loading...</p> }
            { error && <p className="text-red-600">{ error.message }</p> }
            { questionsData ? (
                <div>
                    <QAList questions={ questionsData } />
                    { selectedQuestion && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
                            <h2 className="text-xl font-semibold">Selected Question:</h2>
                            <p className="text-lg">{ selectedQuestion.question }</p>
                            <ul className="list-disc ml-5 mt-2">
                                { selectedQuestion.options.map((option, idx) => (
                                    <li key={ id } className={ `${option === selectedQuestion.correctAnswer ? 'font-bold text-green-600' : ''}` }>
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
