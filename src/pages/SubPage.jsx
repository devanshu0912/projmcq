import React from 'react';
import { useParams } from 'react-router-dom';
import QuizPage from "../components/QuizPage";
const SubPage = () => {
  const { subject } = useParams(); // Gets the subject from URL like /quiz/cn or /quiz/os
  return <QuizPage subject={subject} />;
};

export default SubPage;
