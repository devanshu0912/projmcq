// import React, { useState } from 'react';
// import { FaCheck } from 'react-icons/fa';

// const QuestionCard = ({ question }) => {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleOptionClick = (optionIndex) => {
//     if (!submitted) {
//       setSelected(optionIndex);
//     }
//   };

//   const handleSubmit = () => {
//     if (selected !== null) {
//       setSubmitted(true);
//     }
//   };

//   const isCorrect = (index) => index === question.correct;
//   const isSelected = (index) => index === selected;

//   const getOptionClasses = (index) => {
//     if (submitted) {
//       if (isCorrect(index)) return 'bg-green-100 border-green-600';
//       if (isSelected(index)) return 'bg-red-100 border-red-600';
//       return 'bg-white';
//     }

//     if (isSelected(index)) return 'bg-blue-100 border-blue-600';
//     return 'bg-white hover:bg-gray-100';
//   };

//   const showCheckIcon = (index) => {
//     if (!submitted && isSelected(index)) return true;
//     if (submitted && (isCorrect(index) || isSelected(index))) return true;
//     return false;
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
//       <p className="text-xs text-gray-400 mb-2">ID: {question.id}</p>
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{question.question}</h2>
//       <p className="text-sm text-gray-500 mb-4">
//         Difficulty: <span className="font-semibold">{question.difficulty}</span>
//       </p>

//       <ul className="space-y-3" role="radiogroup" aria-label="Options">
//         {question.options.map((option, index) => (
//           <li
//             key={`${question.id}-${index}`}
//             onClick={() => handleOptionClick(index)}
//             onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(index)}
//             className={`flex items-center gap-2 p-3 rounded border transition ${
//               submitted ? 'cursor-default' : 'cursor-pointer'
//             } ${getOptionClasses(index)}`}
//             role="radio"
//             aria-checked={isSelected(index)}
//             tabIndex={0}
//           >
//             {showCheckIcon(index) && (
//               <FaCheck
//                 className={`text-lg ${
//                   submitted
//                     ? isCorrect(index)
//                       ? 'text-green-700'
//                       : 'text-red-700'
//                     : 'text-blue-700'
//                 }`}
//               />
//             )}
//             <span>{option}</span>
//           </li>
//         ))}
//       </ul>

//       {!submitted && (
//         <div className="mt-5">
//           <button
//             onClick={handleSubmit}
//             disabled={selected === null}
//             className={`px-4 py-2 rounded font-medium transition ${
//               selected !== null
//                 ? 'bg-green-600 text-white hover:bg-green-700'
//                 : 'bg-gray-300 text-gray-700 cursor-not-allowed'
//             }`}
//           >
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionCard;
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const QuestionCard = ({ question, selected, submitted, onSelect, onSubmit }) => {
  const isCorrect = (index) => index === question.correct;
  const isSelected = (index) => index === selected;

  const handleOptionClick = (index) => {
    if (!submitted) onSelect(index);
  };

  const getOptionClasses = (index) => {
    if (submitted) {
      if (isCorrect(index)) return 'bg-green-100 border-green-600';
      if (isSelected(index)) return 'bg-red-100 border-red-600';
      return 'bg-white';
    }

    if (isSelected(index)) return 'bg-blue-100 border-blue-600';
    return 'bg-white hover:bg-gray-100';
  };

  const showCheckIcon = (index) => {
    if (!submitted && isSelected(index)) return true;
    if (submitted && (isCorrect(index) || isSelected(index))) return true;
    return false;
  };
 


  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      {/* <p className="text-xs text-gray-400 mb-2">ID: {question.id}</p> */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{question.question}</h2>
      <p className="text-sm text-gray-500 mb-4">
        Difficulty: <span className="font-semibold">{question.difficulty}</span>
      </p>

      <ul className="space-y-3" role="radiogroup" aria-label="Options">
        {question.options.map((option, index) => (
          <li
            key={`${question.id}-${index}`}
            onClick={() => handleOptionClick(index)}
            onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(index)}
            className={`flex items-center gap-2 p-3 rounded border transition ${
              submitted ? 'cursor-default' : 'cursor-pointer'
            } ${getOptionClasses(index)}`}
            role="radio"
            aria-checked={isSelected(index)}
            tabIndex={0}
          >
            {showCheckIcon(index) && (
              <FaCheck
                className={`text-lg ${
                  submitted
                    ? isCorrect(index)
                      ? 'text-green-700'
                      : 'text-red-700'
                    : 'text-blue-700'
                }`}
              />
            )}
            <span>{option}</span>
          </li>
        ))}
      </ul>

      {/* Submit button only if not submitted */}
      {!submitted && (
        <div className="mt-5">
          <button
            onClick={onSubmit}
            disabled={selected === null}
            className={`px-4 py-2 rounded font-medium transition ${
              selected !== null
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-700 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
