// ResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //const { score, total } = location.state || {}; this is from previous code
  const { score, total, results: quizResults } = location.state || {};


  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg text-center">
      <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
      <h2 className="text-2xl font-bold mb-2 text-green-700">Congratulations!</h2>
      <p className="text-gray-700 text-lg mb-4">You've completed the quiz.</p>
      <p className="text-xl font-semibold text-blue-700">
        Your Score: {score} / {total}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 animate-fadeIn">
  <button
    onClick={handleBackToHome}
    className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition animate-bounce"
  >
    Back to Home
  </button>

  <button
    onClick={() => navigate(-1)} // or your restart logic
    className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transform hover:scale-105 transition"
  >
    Restart Quiz
  </button>

  <button
  onClick={() => navigate('/review', { state: { results: quizResults } })}
  className="bg-purple-500 text-white px-6 py-2 rounded shadow hover:bg-purple-600 transition"
>
  Review Quiz
</button>

</div>

    </div>
  );
};

export default ResultPage;