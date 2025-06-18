import React, { useState } from 'react';

const QuestionCard = ({ question }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index) => {
    if (!submitted) setSelected(index);
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const getOptionStyle = (index) => {
    if (!submitted) return 'bg-white hover:bg-gray-100';

    if (index === question.correct) {
      return 'bg-green-300 border border-green-700';
    }

    if (index === selected) {
      return 'bg-red-300 border border-red-700';
    }

    return 'bg-white';
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{question.question}</h2>
      <p className="text-sm text-gray-500 mb-4">Difficulty: <span className="font-bold">{question.difficulty}</span></p>

      <div className="space-y-3">
        {question.options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`cursor-pointer p-3 rounded shadow transition ${getOptionStyle(idx)}`}
          >
            {opt}
          </div>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
