import React, { useState } from 'react';

const QAList = ({ questions }) => {
    const [activeTopicIndexes, setActiveTopicIndexes] = useState([]);
    const [activeQuestionIndexes, setActiveQuestionIndexes] = useState([]);

    const toggleTopicAccordion = (index) => {
        setActiveTopicIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    const toggleQuestionAccordion = (index) => {
        setActiveQuestionIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    if (!Array.isArray(questions)) {
        return <p>Error loading questions</p>;
    }

    const questionsByTopic = questions.reduce((acc, question) => {
        if (!acc[question.topic]) {
            acc[question.topic] = [];
        }
        acc[question.topic].push(question);
        return acc;
    }, {});

    return (
        <div className="px-2">
            { Object.keys(questionsByTopic).map((topic, topicIndex) => (
                <div
                    key={ topicIndex }
                    className="mb-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg border border-gray-300"
                >
                    <div
                        onClick={ () => toggleTopicAccordion(topicIndex) }
                        className="cursor-pointer bg-gray-200 bg-opacity-50 p-4 flex justify-between items-center rounded-t-lg"
                    >
                        <h2 className="text-xl font-bold">{ topic }</h2>
                        <span>{ activeTopicIndexes.includes(topicIndex) ? '-' : '+' }</span>
                    </div>
                    { activeTopicIndexes.includes(topicIndex) && (
                        <div className="bg-white bg-opacity-50 p-4 rounded-b-lg">
                            { questionsByTopic[topic].map((question, questionIndex) => (
                                <div
                                    key={ questionIndex }
                                    className="mb-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-lg"
                                >
                                    <div
                                        onClick={ () => toggleQuestionAccordion(questionIndex) }
                                        className="cursor-pointer bg-gray-100 p-4 flex justify-between items-center rounded-t-lg"
                                    >
                                        <h3 className="text-lg font-semibold">{ question.question }</h3>
                                        <span>{ activeQuestionIndexes.includes(questionIndex) ? '-' : '+' }</span>
                                    </div>
                                    { activeQuestionIndexes.includes(questionIndex) && (
                                        <div className="bg-white p-4 rounded-b-lg">
                                            <ul className="list-disc ml-5">
                                                { question.options.map((option, idx) => (
                                                    <li
                                                        key={ idx }
                                                        className={ `${option === question.correctAnswer
                                                            ? 'font-bold text-green-600'
                                                            : ''
                                                            }` }
                                                    >
                                                        { option }
                                                    </li>
                                                )) }
                                            </ul>
                                        </div>
                                    ) }
                                </div>
                            )) }
                        </div>
                    ) }
                </div>
            )) }
        </div>
    );
};

export default QAList;
