import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const topicMap = {
  cn: [
    'Application Layer',
    'Transport Layer',
    'Network Layer',
    'Data Link Layer'
  ],
  os: ['Process Management', 'Memory Management', 'File System'],
  dbms: ['Normalization', 'SQL Queries', 'Transactions'],
  oops: ['Inheritance', 'Polymorphism', 'Encapsulation'],
  aptitude: ['Quantitative', 'Logical', 'Verbal']
};

const TopicsPage = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const topics = topicMap[subject.toLowerCase()] || [];

  const handleTopicClick = (topic) => {
    const confirmStart = window.confirm(`Start quiz on: ${topic}?`);
    if (confirmStart) {
      navigate(`/quiz/${subject.toLowerCase()}?topic=${encodeURIComponent(topic)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Select a Topic - {subject.toUpperCase()}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => handleTopicClick(topic)}
            className="flex items-center justify-between bg-white px-5 py-3 rounded shadow hover:bg-indigo-100 text-indigo-700 font-medium border border-indigo-300 transition"
          >
            <span>{topic}</span>
            <FaArrowRight />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicsPage;
