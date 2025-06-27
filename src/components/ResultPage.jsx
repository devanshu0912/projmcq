// ResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || {};

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

      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
