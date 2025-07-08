// QuizPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionCard from './QuestionCard';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizPage = () => {
  const navigate = useNavigate();
  const { subject } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${subject}.json`);
        setQuestions(data.default);
      } catch (err) {
        console.error('Error loading questions:', err);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subject]);

  const startQuiz = () => {
    const selected = shuffleArray(questions).slice(0, Number(count));
    setQuestions(selected);
    setAnswers(selected.map(() => ({ selected: null, submitted: false })));
    setQuizStarted(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSelect = (index) => {
    const updated = [...answers];
    updated[currentIndex].selected = index;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const updated = [...answers];
    updated[currentIndex].submitted = true;
    setAnswers(updated);
  };
// finish pe score caclute hoga
  // const handleFinish = () => {
  //   const correct = answers.reduce(
  //     (acc, ans, i) => ans.selected === questions[i].correct ? acc + 1 : acc,
  //     0
  //   );
  //   navigate('/result', { state: { score: correct, total: questions.length } });
  // };
   const handleFinish = () => {
    const correct = answers.reduce(
      (acc, ans, i) => (ans.selected === questions[i].correct ? acc + 1 : acc),
      0
    );

    const results = answers.map((ans, i) => ({
      ...ans,
      id: questions[i].id,
      question: questions[i].question,
      options: questions[i].options,
      correct: questions[i].correct,
      difficulty: questions[i].difficulty,
      explanation: questions[i].explanation || '',
    }));
     localStorage.setItem('quizResults', JSON.stringify(results));

    navigate('/result', {
      state: {
        score: correct,
        total: questions.length,
        results,
      },
    });
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading quiz...</p>;

  if (!quizStarted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4 text-center">Select Number of Questions</h2>
        <input
          type="number"
          min={1}
          max={questions.length}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={startQuiz}
          disabled={!count || Number(count) < 1 || Number(count) > questions.length}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <div className="text-sm text-gray-500 text-center mb-4">
        Question {currentIndex + 1} of {questions.length}
      </div>

      <QuestionCard
        question={currentQuestion}
        selected={currentAnswer.selected}
        submitted={currentAnswer.submitted}
        onSelect={handleSelect}
        onSubmit={handleSubmit}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}// diable btn when user on first question 
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        ) : currentAnswer.submitted && (
          <button
            onClick={handleFinish}
            className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

