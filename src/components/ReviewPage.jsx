import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ReviewPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const incoming = location.state?.results;
      if (!incoming || !Array.isArray(incoming) || incoming.length === 0) {
        throw new Error('No quiz results found.');
      }
      setResults(incoming);
    } catch (err) {
      console.error('Failed to load results:', err.message);
      setError('Unable to display review. Please return to the homepage and try again.');
    }
  }, [location.state]);

  const current = results[selectedQuestionIndex];

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-lg px-4 text-center">
        {error}
      </div>
    );
  }

  if (!current) return null;

  const isCorrect = (index) => index === current.correct;
  const isSelected = (index) => index === current.selected;

  const getOptionClasses = (index) => {
    if (isCorrect(index)) return 'bg-green-100 border-green-600';
    if (isSelected(index) && !isCorrect(index)) return 'bg-red-100 border-red-600';
    return 'bg-white';
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Right side - question list */}
      <aside className="md:w-1/4 bg-white p-4 border-r overflow-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Questions</h2>
        <ul className="space-y-2">
          {results.map((q, idx) => (
            <li
              key={q.id}
              onClick={() => setSelectedQuestionIndex(idx)}
              className={`px-4 py-2 rounded cursor-pointer transition ${
                selectedQuestionIndex === idx ? 'bg-indigo-100 font-semibold' : 'hover:bg-gray-100'
              }`}
            >
              Q{idx + 1}
            </li>
          ))}
        </ul>
      </aside>

      {/* Left side - selected question review */}
      <main className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2">{current.question}</h3>
        <p className="text-sm text-gray-500 mb-4">
          Difficulty: <span className="font-semibold">{current.difficulty}</span>
        </p>

        <ul className="space-y-3 mb-6">
          {current.options.map((opt, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-2 p-3 rounded border transition ${getOptionClasses(idx)}`}
            >
              {isSelected(idx) && (
                <span className="text-xl">
                  {isCorrect(idx) ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    <FaTimes className="text-red-600" />
                  )}
                </span>
              )}
              <span>{opt}</span>
            </li>
          ))}
        </ul>

        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded">
          <p className="text-indigo-700 font-medium mb-1">AI Explanation:</p>
          <p className="text-sm text-gray-700">{current.explanation || 'No explanation available.'}</p>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;