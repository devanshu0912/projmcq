// import React, { useEffect, useState } from 'react';
// import QuestionCard from './QuestionCard';

// const QuizPage = ({ subject }) => {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//  // question loading
//   useEffect(() => {
//     const loadQuestions = async () => {
//       try {
//         const data = await import(`../data/${subject}.json`);
//         setQuestions(data.default);
//       } catch (err) {
//         console.error('Error loading questions:', err);
//         setError('Unable to load questions for this subject.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadQuestions();
//   }, [subject]);

//   const handleNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   if (loading) return <p className="text-center mt-10 text-gray-600">Loading quiz...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
//       <QuestionCard question={questions[currentIndex]} />

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex === questions.length - 1}
//           className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;
import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';

const QuizPage = ({ subject }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // 🔄 New state: array of selected/submitted per question
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 📦 Load questions dynamically
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${subject}.json`);
        const loadedQuestions = data.default;

        setQuestions(loadedQuestions);

        // ⛳ Initialize answers state to empty for each question
        setAnswers(loadedQuestions.map(() => ({
          selected: null,
          submitted: false
        })));
      } catch (err) {
        console.error('Error loading questions:', err);
        setError('Unable to load questions for this subject.');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subject]);

  // ⏩ Navigate to next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // ⏪ Navigate to previous question
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 🎯 Select an answer (updates answers array immutably)
  const handleSelect = (index) => {
    const updated = [...answers];
    updated[currentIndex].selected = index;
    setAnswers(updated);
  };

  // ✅ Mark current question as submitted
  const handleSubmit = () => {
    const updated = [...answers];
    updated[currentIndex].submitted = true;
    setAnswers(updated);
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading quiz...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      {/* 📊 Progress */}
      <div className="text-sm text-gray-500 text-center mb-4">
        Question {currentIndex + 1} of {questions.length}
      </div>

      {/* 🧠 QuestionCard with controlled props */}
      <QuestionCard
        question={currentQuestion}
        selected={currentAnswer.selected}
        submitted={currentAnswer.submitted}
        onSelect={handleSelect}
        onSubmit={handleSubmit}
      />

      {/* 🔀 Navigation buttons */}
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
        {currentIndex === questions.length - 1 && (
  <div className="text-center mt-4">
    
  </div>
)}

      </div>
    </div>
  );
};

export default QuizPage;
