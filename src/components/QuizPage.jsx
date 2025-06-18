import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';

const QuizPage = ({ subject }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load questions from subject JSON
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${subject}.json`);
        setQuestions(data.default);
      } catch (err) {
        console.error('Error loading questions:', err);
        setError('Unable to load questions for this subject.');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subject]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading quiz...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <QuestionCard question={questions[currentIndex]} />

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
