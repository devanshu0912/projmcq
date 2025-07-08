// // // // import React from "react";
// // // // import { useAuth0 } from "@auth0/auth0-react";
// // // // import { BookOpenIcon, CodeIcon, DatabaseIcon, CpuIcon, BrainIcon } from "lucide-react";

// // // // const subjects = [
// // // //   { name: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// // // // ];

// // // // const HomePage = () => {
// // // //   const { loginWithRedirect } = useAuth0();

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
// // // //       <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
// // // //         Ace your OA and Technical Interview
// // // //       </h1>
// // // //       <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10">
// // // //         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
// // // //       </h2>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-3xl">
// // // //         {subjects.map((subject, idx) => (
// // // //           <div
// // // //             key={idx}
// // // //             className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 hover:bg-blue-100 transition"
// // // //           >
// // // //             {subject.icon}
// // // //             <span className="text-lg font-medium">{subject.name}</span>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <button
// // // //         onClick={() => loginWithRedirect()}
// // // //         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
// // // //       >
// // // //         Get Started
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;
// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   BookOpenIcon,
// // // //   CodeIcon,
// // // //   DatabaseIcon,
// // // //   CpuIcon,
// // // //   BrainIcon,
// // // // } from "lucide-react";

// // // // const subjects = [
// // // //   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// // // // ];

// // // // const HomePage = () => {
// // // //   const navigate = useNavigate();

// // // //   const handleNavigate = (subject) => {
// // // //     navigate(`/quiz/${subject}`);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
// // // //       <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
// // // //         Ace your OA and Technical Interview
// // // //       </h1>
// // // //       <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10">
// // // //         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
// // // //       </h2>

// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl">
// // // //         {subjects.map((subject) => (
// // // //           <button
// // // //             key={subject.name}
// // // //             onClick={() => handleNavigate(subject.name)}
// // // //             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
// // // //           >
// // // //             {subject.icon}
// // // //             {subject.label}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       <button
// // // //         onClick={() => navigate('/login')} // or call loginWithRedirect()
// // // //         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
// // // //       >
// // // //         Get Started
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;


// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   BookOpenIcon,
// // // //   CodeIcon,
// // // //   DatabaseIcon,
// // // //   CpuIcon,
// // // //   BrainIcon,
// // // // } from "lucide-react";
// // // // import { motion } from "framer-motion";

// // // // const subjects = [
// // // //   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// // // // ];

// // // // const containerVariant = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     transition: { staggerChildren: 0.15 },
// // // //   },
// // // // };

// // // // const itemVariant = {
// // // //   hidden: { opacity: 0, y: 30 },
// // // //   visible: { opacity: 1, y: 0 },
// // // // };

// // // // const HomePage = () => {
// // // //   const navigate = useNavigate();

// // // //   const handleNavigate = (subject) => {
// // // //     navigate(`/quiz/${subject}`);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
// // // //       <motion.h1
// // // //         className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
// // // //         initial={{ opacity: 0, y: -30 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.7 }}
// // // //       >
// // // //         Ace your OA and Technical Interview
// // // //       </motion.h1>

// // // //       <motion.h2
// // // //         className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10"
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.3, duration: 0.6 }}
// // // //       >
// // // //         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
// // // //       </motion.h2>

// // // //       <motion.div
// // // //         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl"
// // // //         variants={containerVariant}
// // // //         initial="hidden"
// // // //         animate="visible"
// // // //       >
// // // //         {subjects.map((subject) => (
// // // //           <motion.button
// // // //             key={subject.name}
// // // //             onClick={() => handleNavigate(subject.name)}
// // // //             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
// // // //             variants={itemVariant}
// // // //           >
// // // //             {subject.icon}
// // // //             {subject.label}
// // // //           </motion.button>
// // // //         ))}
// // // //       </motion.div>

// // // //       <motion.button
// // // //         onClick={() => navigate("/login")}
// // // //         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
// // // //         whileHover={{ scale: 1.05 }}
// // // //         whileTap={{ scale: 0.95 }}
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.8, duration: 0.5 }}
// // // //       >
// // // //         Get Started
// // // //       </motion.button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;




// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   BookOpenIcon,
// // // //   CodeIcon,
// // // //   DatabaseIcon,
// // // //   CpuIcon,
// // // //   BrainIcon,
// // // // } from "lucide-react";
// // // // import { motion } from "framer-motion";
// // // // import { useAuth0 } from "@auth0/auth0-react";

// // // // const subjects = [
// // // //   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
// // // //   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// // // // ];

// // // // const containerVariant = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     transition: { staggerChildren: 0.15 },
// // // //   },
// // // // };

// // // // const itemVariant = {
// // // //   hidden: { opacity: 0, y: 30 },
// // // //   visible: { opacity: 1, y: 0 },
// // // // };

// // // // const HomePage = () => {
// // // //   const navigate = useNavigate();
// // // //   const { loginWithRedirect } = useAuth0();

// // // //   const handleNavigate = (subject) => {
// // // //     navigate(`/quiz/${subject}`);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
// // // //       <motion.h1
// // // //         className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
// // // //         initial={{ opacity: 0, y: -30 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.7 }}
// // // //       >
// // // //         Ace your OA and Technical Interview
// // // //       </motion.h1>

// // // //       <motion.h2
// // // //         className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10"
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.3, duration: 0.6 }}
// // // //       >
// // // //         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
// // // //       </motion.h2>

// // // //       <motion.div
// // // //         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl"
// // // //         variants={containerVariant}
// // // //         initial="hidden"
// // // //         animate="visible"
// // // //       >
// // // //         {subjects.map((subject) => (
// // // //           <motion.button
// // // //             key={subject.name}
// // // //             onClick={() => handleNavigate(subject.name)}
// // // //             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
// // // //             variants={itemVariant}
// // // //           >
// // // //             {subject.icon}
// // // //             {subject.label}
// // // //           </motion.button>
// // // //         ))}
// // // //       </motion.div>

// // // //       <motion.button
// // // //         onClick={() => {
// // // //           try {
// // // //             loginWithRedirect();
// // // //           } catch (err) {
// // // //             console.error("Login failed:", err);
// // // //           }
// // // //         }}
// // // //         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
// // // //         whileHover={{ scale: 1.05 }}
// // // //         whileTap={{ scale: 0.95 }}
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.8, duration: 0.5 }}
// // // //       >
// // // //         Get Started
// // // //       </motion.button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;


// // // // import React from 'react';
// // // // import { useAuth0 } from '@auth0/auth0-react';
// // // // import { FaArrowRight } from 'react-icons/fa';
// // // // import { useNavigate } from 'react-router-dom';
// // // // // import Header from './Header';
// // // // // import Footer from './Footer';

// // // // const HomePage = () => {
// // // //   const { isAuthenticated, loginWithRedirect } = useAuth0();
// // // //   const navigate = useNavigate();

// // // //   const handleClick = () => {
// // // //     if (isAuthenticated) {
// // // //       navigate('/choose-subject');
// // // //     } else {
// // // //       loginWithRedirect();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
     

// // // //       <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 animate-fadeIn">
// // // //         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
// // // //           Ace your OA and Technical Interview with <br />
// // // //           <span className="text-indigo-600">MCQ Portal (Devanshu Shukla)</span>
// // // //         </h1>

// // // //         <div className="flex flex-wrap gap-4 justify-center">
// // // //           {['CN', 'OS', 'DBMS', 'OOPs', 'Aptitude'].map((subject) => (
// // // //             <button
// // // //               key={subject}
// // // //               onClick={() => navigate(`/${subject.toLowerCase()}`)}
// // // //               className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
// // // //             >
// // // //               {subject}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         <button
// // // //           onClick={handleClick}
// // // //           className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
// // // //         >
// // // //           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
// // // //           <FaArrowRight />
// // // //         </button>
// // // //       </main>

    
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;


// // // // import React, { useState } from 'react';
// // // // import { useAuth0 } from '@auth0/auth0-react';
// // // // import { FaArrowRight } from 'react-icons/fa';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const HomePage = () => {
// // // //   const { isAuthenticated, loginWithRedirect, isLoading, error: authError } = useAuth0();
// // // //   const navigate = useNavigate();
// // // //   const [navError, setNavError] = useState(null);

// // // //   const handleClick = async () => {
// // // //     try {
// // // //       if (isAuthenticated) {
// // // //         navigate('/choose-subject');
// // // //       } else {
// // // //         await loginWithRedirect();
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Error during navigation or login:', err.message);
// // // //       setNavError('Something went wrong. Please try again.');
// // // //     }
// // // //   };

// // // //   // const handleSubjectClick = (subject) => {
// // // //   //   try {
// // // //   //     navigate(`/${subject.toLowerCase()}`);
// // // //   //   } catch (err) {
// // // //   //     console.error(`Failed to navigate to ${subject}:`, err.message);
// // // //   //     setNavError(`Failed to open ${subject} quiz.`);
// // // //   //   }
// // // //   // };const handleSubjectClick = (subject) => {
// // // //   const handleSubjectClick = (subject) => {
// // // //   try {
// // // //     navigate(`/quiz/${subject.toLowerCase()}`);
// // // //   } catch (err) {
// // // //     console.error(`Failed to navigate to ${subject}:`, err.message);
// // // //     setNavError(`Failed to open ${subject} quiz.`);
// // // //   }
// // // // };




// // // //   if (isLoading) {
// // // //     return (
// // // //       // <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-700">
// // // //       //   Loading...
// // // //       // </div>
// // // //        <div className="flex items-center justify-center min-h-screen bg-white">
// // // //       <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
// // // //     </div>
// // // //     );
// // // //   }

// // // //   if (authError || navError) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen px-6 text-center">
// // // //         <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md">
// // // //           <h2 className="text-2xl font-bold mb-2">Oops! 🚫</h2>
// // // //           <p>{authError?.message || navError}</p>
// // // //           <button
// // // //             onClick={() => window.location.reload()}
// // // //             className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// // // //           >
// // // //             Reload Page
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
// // // //       <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 animate-fadeIn">
// // // //         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
// // // //           Ace your OA and Technical Interview with <br />
// // // //           <span className="text-indigo-600">MCQ Portal</span>
// // // //         </h1>

// // // //         <div className="flex flex-wrap gap-4 justify-center">
// // // //           {['CN', 'OS', 'DBMS', 'OOPs', 'Aptitude'].map((subject) => (
// // // //             <button
// // // //               key={subject}
// // // //               onClick={() => handleSubjectClick(subject)}
// // // //               className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
// // // //             >
// // // //               {subject}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         <button
// // // //           onClick={handleClick}
// // // //           className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
// // // //         >
// // // //           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
// // // //           <FaArrowRight />
// // // //         </button>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;
// // // import React, { useState } from 'react';
// // // import { useAuth0 } from '@auth0/auth0-react';
// // // import { FaArrowRight, FaDatabase, FaNetworkWired, FaCogs, FaLightbulb, FaCode } from 'react-icons/fa';
// // // import { useNavigate } from 'react-router-dom';
// // // import logo from '../assets/logo.png'; 

// // // const SUBJECTS = [
// // //   { name: 'CN', icon: <FaNetworkWired className="text-blue-500 text-2xl" /> },
// // //   { name: 'OS', icon: <FaCogs className="text-gray-600 text-2xl" /> },
// // //   { name: 'DBMS', icon: <FaDatabase className="text-purple-600 text-2xl" /> },
// // //   { name: 'OOPs', icon: <FaCode className="text-pink-500 text-2xl" /> },
// // //   { name: 'Aptitude', icon: <FaLightbulb className="text-yellow-500 text-2xl" /> },
// // // ];

// // // const HomePage = () => {
// // //   const { isAuthenticated, loginWithRedirect, isLoading, error: authError } = useAuth0();
// // //   const navigate = useNavigate();
// // //   const [navError, setNavError] = useState(null);

// // //   const handleClick = async () => {
// // //     try {
// // //       if (isAuthenticated) {
// // //         navigate('/choose-subject');
// // //       } else {
// // //         await loginWithRedirect();
// // //       }
// // //     } catch (err) {
// // //       console.error('Error during navigation or login:', err.message);
// // //       setNavError('Something went wrong. Please try again.');
// // //     }
// // //   };

// // //   const handleSubjectClick = (subject) => {
// // //     try {
// // //       navigate(`/quiz/${subject.toLowerCase()}`);
// // //     } catch (err) {
// // //       console.error(`Failed to navigate to ${subject}:`, err.message);
// // //       setNavError(`Failed to open ${subject} quiz.`);
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-screen bg-white">
// // //         <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (authError || navError) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen px-6 text-center">
// // //         <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md">
// // //           <h2 className="text-2xl font-bold mb-2">Oops! 🚫</h2>
// // //           <p>{authError?.message || navError}</p>
// // //           <button
// // //             onClick={() => window.location.reload()}
// // //             className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// // //           >
// // //             Reload Page
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
      

// // //       <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 animate-fadeIn">
// // //         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
// // //           Ace your OA and Technical Interviews with <br />
// // //           <span className="text-indigo-600">MCQ Portal</span>
// // //         </h2>

// // //         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// // //           {SUBJECTS.map(({ name, icon }) => (
// // //             <button
// // //               key={name}
// // //               onClick={() => handleSubjectClick(name)}
// // //               className="flex items-center gap-3 px-6 py-4 bg-white shadow-md rounded-xl hover:shadow-lg transition border border-gray-200 hover:border-indigo-400"
// // //             >
// // //               {icon}
// // //               <span className="font-semibold text-gray-800 text-lg">{name}</span>
// // //             </button>
// // //           ))}
// // //         </div>

// // //         <button
// // //           onClick={handleClick}
// // //           className="mt-8 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
// // //         >
// // //           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
// // //           <FaArrowRight />
// // //         </button>
// // //       </main>
// // //       <div className="max-w-4xl mx-auto mt-16">
// // //   <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">📚 Syllabus Overview</h3>
// // //   <div className="grid md:grid-cols-2 gap-6">
// // //     {[
// // //       {
// // //         title: "Computer Networks",
// // //         topics: ["OSI & TCP/IP", "Routing", "IP Addressing", "Transport Layer"],
// // //       },
// // //       {
// // //         title: "Operating Systems",
// // //         topics: ["Processes", "Threads", "Memory Management", "Deadlock"],
// // //       },
// // //       // Add more...
// // //     ].map(({ title, topics }) => (
// // //       <div key={title} className="bg-white shadow p-4 rounded-lg border">
// // //         <h4 className="font-semibold text-indigo-600 text-lg mb-2">{title}</h4>
// // //         <ul className="list-disc list-inside text-sm text-gray-700">
// // //           {topics.map((topic) => (
// // //             <li key={topic}>{topic}</li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     ))}
// // //   </div>
// // // </div>
// // // <div className="max-w-4xl mx-auto mt-20">
// // //   <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">💡 Tips & Tricks</h3>
// // //   <ul className="space-y-3 text-gray-700 text-sm">
// // //     <li>🧠 Practice daily 10 questions to build memory recall.</li>
// // //     <li>⏱ Use the built-in timer to simulate exam conditions.</li>
// // //     <li>📑 Bookmark tricky questions to revisit them later.</li>
// // //     <li>📝 Use explanations to understand “why” not just “what”.</li>
// // //   </ul>
// // // </div>
// // // <div className="max-w-3xl mx-auto mt-20 text-center">
// // //   <h3 className="text-2xl font-bold mb-4 text-gray-800">🧾 About MCQ Portal</h3>
// // //   <p className="text-gray-600 text-sm leading-relaxed">
// // //     MCQ Portal is built to help BTech students and exam aspirants practice topic-wise quizzes. 
// // //     With a clean UI, subject selection, AI-generated questions, and instant explanations, 
// // //     it’s your go-to platform for cracking interviews and tests with confidence.
// // //   </p>
// // // </div>
// // // <div className="max-w-3xl mx-auto mt-16">
// // //   <h3 className="text-xl font-semibold mb-4 text-center">❓ Frequently Asked Questions</h3>
// // //   <ul className="text-sm text-gray-700 space-y-2">
// // //     <li><strong>Q:</strong> Is this free? <strong>A:</strong> Yes, 100% free to use.</li>
// // //     <li><strong>Q:</strong> Can I review wrong answers? <strong>A:</strong> Yes, at the end of the quiz.</li>
// // //     <li><strong>Q:</strong> Are explanations available? <strong>A:</strong> Yes, including AI ones.</li>
// // //   </ul>
// // // </div>

// // //     </div>
// // //   );
// // // };

// // // export default HomePage;

// // import React, { useState } from 'react';
// // import { useAuth0 } from '@auth0/auth0-react';
// // import { FaArrowRight, FaDatabase, FaNetworkWired, FaCogs, FaLightbulb, FaCode } from 'react-icons/fa';
// // import { useNavigate } from 'react-router-dom';

// // const SUBJECTS = [
// //   { name: 'CN', icon: <FaNetworkWired className="text-blue-500 text-2xl" /> },
// //   { name: 'OS', icon: <FaCogs className="text-gray-600 text-2xl" /> },
// //   { name: 'DBMS', icon: <FaDatabase className="text-purple-600 text-2xl" /> },
// //   { name: 'OOPs', icon: <FaCode className="text-pink-500 text-2xl" /> },
// //   { name: 'Aptitude', icon: <FaLightbulb className="text-yellow-500 text-2xl" /> },
// // ];

// // const SYLLABUS = [
// //   {
// //     title: "Computer Networks",
// //     topics: ["OSI & TCP/IP", "Routing Algorithms", "IP Addressing", "Transport Layer"]
// //   },
// //   {
// //     title: "Operating Systems",
// //     topics: ["Processes & Threads", "Deadlocks", "Memory Management", "Scheduling"]
// //   },
// //   {
// //     title: "DBMS",
// //     topics: ["ER Models", "SQL Queries", "Normalization", "Transactions"]
// //   },
// //   {
// //     title: "OOPs",
// //     topics: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"]
// //   },
// // ];

// // const HomePage = () => {
// //   const { isAuthenticated, loginWithRedirect, isLoading, error: authError } = useAuth0();
// //   const navigate = useNavigate();
// //   const [navError, setNavError] = useState(null);

// //   const handleClick = async () => {
// //     try {
// //       if (isAuthenticated) {
// //         navigate('/choose-subject');
// //       } else {
// //         await loginWithRedirect();
// //       }
// //     } catch (err) {
// //       setNavError('Something went wrong. Please try again.');
// //     }
// //   };

// //   const handleSubjectClick = (subject) => {
// //     try {
// //       navigate(`/quiz/${subject.toLowerCase()}`);
// //     } catch (err) {
// //       setNavError(`Failed to open ${subject} quiz.`);
// //     }
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-white">
// //         <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
// //       </div>
// //     );
// //   }

// //   if (authError || navError) {
// //     return (
// //       <div className="flex items-center justify-center h-screen px-6 text-center">
// //         <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-bold mb-2">Oops! 🚫</h2>
// //           <p>{authError?.message || navError}</p>
// //           <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
// //             Reload Page
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
// //       <main className="flex-grow flex flex-col items-center text-center p-8 space-y-10 animate-fadeIn">
// //         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
// //           Ace your OA and Technical Interviews with <br />
// //           <span className="text-indigo-600">MCQ Portal</span>
// //         </h2>

// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// //           {SUBJECTS.map(({ name, icon }) => (
// //             <button
// //               key={name}
// //               onClick={() => handleSubjectClick(name)}
// //               className="flex items-center gap-3 px-6 py-4 bg-white shadow-md rounded-xl hover:shadow-lg transition border border-gray-200 hover:border-indigo-400"
// //             >
// //               {icon}
// //               <span className="font-semibold text-gray-800 text-lg">{name}</span>
// //             </button>
// //           ))}
// //         </div>

// //         <button
// //           onClick={handleClick}
// //           className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
// //         >
// //           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
// //           <FaArrowRight />
// //         </button>

// //         <section className="w-full max-w-5xl mt-12">
// //           <h3 className="text-2xl font-bold text-gray-800 mb-6">📚 Syllabus Overview</h3>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {SYLLABUS.map(({ title, topics }) => (
// //               <div key={title} className="bg-white shadow p-4 rounded-lg border">
// //                 <h4 className="font-semibold text-indigo-600 text-lg mb-2">{title}</h4>
// //                 <ul className="list-disc list-inside text-sm text-gray-700">
// //                   {topics.map((topic) => <li key={topic}>{topic}</li>)}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <section className="w-full max-w-3xl mt-16">
// //           <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Tips & Tricks</h3>
// //           <ul className="space-y-3 text-gray-700 text-sm">
// //             <li>🧠 Practice daily 10 questions to build memory recall.</li>
// //             <li>⏱ Use the built-in timer to simulate exam conditions.</li>
// //             <li>📑 Bookmark tricky questions to revisit them later.</li>
// //             <li>📝 Use explanations to understand “why” not just “what”.</li>
// //           </ul>
// //         </section>

// //         <section className="w-full max-w-2xl mt-16 text-center">
// //           <h3 className="text-2xl font-bold mb-4 text-gray-800">🧾 About MCQ Portal</h3>
// //           <p className="text-gray-600 text-sm leading-relaxed">
// //             MCQ Portal helps BTech students and competitive exam aspirants practice topic-wise quizzes with explanations. Featuring subject selection, AI-generated questions, and performance tracking, it’s the smart way to prepare for your future.
// //           </p>
// //         </section>

        
// //       </main>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { FaArrowRight, FaDatabase, FaNetworkWired, FaCogs, FaLightbulb, FaCode } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const SUBJECTS = [
//   { name: 'CN', icon: <FaNetworkWired className="text-blue-500 text-2xl" /> },
//   { name: 'OS', icon: <FaCogs className="text-gray-600 text-2xl" /> },
//   { name: 'DBMS', icon: <FaDatabase className="text-purple-600 text-2xl" /> },
//   { name: 'OOPs', icon: <FaCode className="text-pink-500 text-2xl" /> },
//   { name: 'Aptitude', icon: <FaLightbulb className="text-yellow-500 text-2xl" /> },
// ];

// const SYLLABUS = [
//   {
//     title: "Computer Networks",
//     topics: ["OSI & TCP/IP", "Routing Algorithms", "IP Addressing", "Transport Layer"]
//   },
//   {
//     title: "Operating Systems",
//     topics: ["Processes & Threads", "Deadlocks", "Memory Management", "Scheduling"]
//   },
//   {
//     title: "DBMS",
//     topics: ["ER Models", "SQL Queries", "Normalization", "Transactions"]
//   },
//   {
//     title: "OOPs",
//     topics: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"]
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const HomePage = () => {
//   const { isAuthenticated, loginWithRedirect, isLoading, error: authError } = useAuth0();
//   const navigate = useNavigate();
//   const [navError, setNavError] = useState(null);

//   const handleClick = async () => {
//     try {
//       if (isAuthenticated) {
//         navigate('/choose-subject');
//       } else {
//         await loginWithRedirect();
//       }
//     } catch (err) {
//       setNavError('Something went wrong. Please try again.');
//     }
//   };

//   const handleSubjectClick = (subject) => {
//     try {
//       navigate(`/quiz/${subject.toLowerCase()}`);
//     } catch (err) {
//       setNavError(`Failed to open ${subject} quiz.`);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (authError || navError) {
//     return (
//       <div className="flex items-center justify-center h-screen px-6 text-center">
//         <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-2">Oops! 🚫</h2>
//           <p>{authError?.message || navError}</p>
//           <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
//             Reload Page
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
//       <main className="flex-grow flex flex-col items-center text-center p-8 space-y-10 animate-fadeIn">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
//           Ace your OA and Technical Interviews with <br />
//           <span className="text-indigo-600">MCQ Portal</span>
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {SUBJECTS.map(({ name, icon }) => (
//             <button
//               key={name}
//               onClick={() => handleSubjectClick(name)}
//               className="flex items-center gap-3 px-6 py-4 bg-white shadow-md rounded-xl hover:shadow-lg transition border border-gray-200 hover:border-indigo-400"
//             >
//               {icon}
//               <span className="font-semibold text-gray-800 text-lg">{name}</span>
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleClick}
//           className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
//         >
//           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
//           <FaArrowRight />
//         </button>

//         <section className="w-full max-w-5xl mt-12">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">📚 Syllabus Overview</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {SYLLABUS.map(({ title, topics }) => (
//               <motion.div
//                 key={title}
//                 className="bg-white shadow p-4 rounded-lg border"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <h4 className="font-semibold text-indigo-600 text-lg mb-2">{title}</h4>
//                 <ul className="list-disc list-inside text-sm text-gray-700">
//                   {topics.map((topic) => <li key={topic}>{topic}</li>)}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="w-full max-w-3xl mt-16">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Tips & Tricks</h3>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             <li>🧠 Practice daily 10 questions to build memory recall.</li>
//             <li>⏱ Use the built-in timer to simulate exam conditions.</li>
//             <li>📑 Bookmark tricky questions to revisit them later.</li>
//             <li>📝 Use explanations to understand “why” not just “what”.</li>
//           </ul>
//         </section>

//         <section className="w-full max-w-2xl mt-16 text-center">
//           <h3 className="text-2xl font-bold mb-4 text-gray-800">🧾 About MCQ Portal</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             MCQ Portal helps BTech students and competitive exam aspirants practice topic-wise quizzes with explanations. Featuring subject selection, AI-generated questions, and performance tracking, it’s the smart way to prepare for your future.
//           </p>
//         </section>
//       </main>

//       <footer className="bg-gray-100 w-full text-center text-xs text-gray-500 py-4">
//         Made with ❤️ by Devanshu Shukla · © {new Date().getFullYear()} MCQ Portal
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaArrowRight, FaDatabase, FaNetworkWired, FaCogs, FaLightbulb, FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SUBJECTS = [
  { name: 'CN', icon: <FaNetworkWired className="text-blue-500 text-2xl" /> },
  { name: 'OS', icon: <FaCogs className="text-gray-600 text-2xl" /> },
  { name: 'DBMS', icon: <FaDatabase className="text-purple-600 text-2xl" /> },
  { name: 'OOPs', icon: <FaCode className="text-pink-500 text-2xl" /> },
  { name: 'Aptitude', icon: <FaLightbulb className="text-yellow-500 text-2xl" /> },
];

const SYLLABUS = [
  {
    title: "Computer Networks",
    topics: ["OSI & TCP/IP", "Routing Algorithms", "IP Addressing", "Transport Layer"]
  },
  {
    title: "Operating Systems",
    topics: ["Processes & Threads", "Deadlocks", "Memory Management", "Scheduling"]
  },
  {
    title: "DBMS",
    topics: ["ER Models", "SQL Queries", "Normalization", "Transactions"]
  },
  {
    title: "OOPs",
    topics: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"]
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, error: authError } = useAuth0();
  const navigate = useNavigate();
  const [navError, setNavError] = useState(null);

  const handleClick = async () => {
    try {
      if (isAuthenticated) {
        navigate('/choose-subject');
      } else {
        await loginWithRedirect();
      }
    } catch (err) {
      setNavError('Something went wrong. Please try again.');
    }
  };

  const handleSubjectClick = (subject) => {
    try {
      navigate(`/quiz/${subject.toLowerCase()}`);
    } catch (err) {
      setNavError(`Failed to open ${subject} quiz.`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError || navError) {
    return (
      <div className="flex items-center justify-center h-screen px-6 text-center">
        <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Oops! 🚫</h2>
          <p>{authError?.message || navError}</p>
          <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
      <main className="flex-grow flex flex-col items-center text-center p-8 space-y-10 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
          Ace your OA and Technical Interviews with <br />
          <span className="text-indigo-600">MCQ Portal</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {SUBJECTS.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => handleSubjectClick(name)}
              className="flex items-center gap-3 px-6 py-4 bg-white shadow-md rounded-xl hover:shadow-lg transition border border-gray-200 hover:border-indigo-400"
            >
              {icon}
              <span className="font-semibold text-gray-800 text-lg">{name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
          <FaArrowRight />
        </button>

        <section className="w-full max-w-6xl mt-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📚 Syllabus Overview</h3>
          <div className="flex space-x-6 pb-4">
            {SYLLABUS.map(({ title, topics }) => (
              <motion.div
                key={title}
                className="min-w-[260px] bg-white shadow p-4 rounded-lg border"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-indigo-600 text-lg mb-2">{title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-3xl mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Tips & Tricks</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>🧠 Practice daily 10 questions to build memory recall.</li>
            <li>⏱ Use the built-in timer to simulate exam conditions.</li>
            <li>📑 Bookmark tricky questions to revisit them later.</li>
            <li>📝 Use explanations to understand “why” not just “what”.</li>
          </ul>
        </section>

        <section className="w-full max-w-2xl mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">🧾 About MCQ Portal</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            MCQ Portal helps BTech students and competitive exam aspirants practice topic-wise quizzes with explanations. Featuring subject selection, AI-generated questions, and performance tracking, it’s the smart way to prepare for your future.
          </p>
        </section>
      </main>

     
    </div>
  );
};

export default HomePage;


