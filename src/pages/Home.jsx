// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { BookOpenIcon, CodeIcon, DatabaseIcon, CpuIcon, BrainIcon } from "lucide-react";

// const subjects = [
//   { name: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
//   { name: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
//   { name: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
//   { name: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
//   { name: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// ];

// const HomePage = () => {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
//         Ace your OA and Technical Interview
//       </h1>
//       <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10">
//         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-3xl">
//         {subjects.map((subject, idx) => (
//           <div
//             key={idx}
//             className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 hover:bg-blue-100 transition"
//           >
//             {subject.icon}
//             <span className="text-lg font-medium">{subject.name}</span>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => loginWithRedirect()}
//         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//       >
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default HomePage;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BookOpenIcon,
//   CodeIcon,
//   DatabaseIcon,
//   CpuIcon,
//   BrainIcon,
// } from "lucide-react";

// const subjects = [
//   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
//   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
//   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
//   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
//   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// ];

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (subject) => {
//     navigate(`/quiz/${subject}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
//         Ace your OA and Technical Interview
//       </h1>
//       <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10">
//         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl">
//         {subjects.map((subject) => (
//           <button
//             key={subject.name}
//             onClick={() => handleNavigate(subject.name)}
//             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
//           >
//             {subject.icon}
//             {subject.label}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={() => navigate('/login')} // or call loginWithRedirect()
//         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//       >
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BookOpenIcon,
//   CodeIcon,
//   DatabaseIcon,
//   CpuIcon,
//   BrainIcon,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const subjects = [
//   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
//   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
//   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
//   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
//   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// ];

// const containerVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (subject) => {
//     navigate(`/quiz/${subject}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Ace your OA and Technical Interview
//       </motion.h1>

//       <motion.h2
//         className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl"
//         variants={containerVariant}
//         initial="hidden"
//         animate="visible"
//       >
//         {subjects.map((subject) => (
//           <motion.button
//             key={subject.name}
//             onClick={() => handleNavigate(subject.name)}
//             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
//             variants={itemVariant}
//           >
//             {subject.icon}
//             {subject.label}
//           </motion.button>
//         ))}
//       </motion.div>

//       <motion.button
//         onClick={() => navigate("/login")}
//         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//       >
//         Get Started
//       </motion.button>
//     </div>
//   );
// };

// export default HomePage;




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BookOpenIcon,
//   CodeIcon,
//   DatabaseIcon,
//   CpuIcon,
//   BrainIcon,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { useAuth0 } from "@auth0/auth0-react";

// const subjects = [
//   { name: "cn", label: "CN", icon: <CodeIcon className="w-5 h-5 mr-2" /> },
//   { name: "os", label: "OS", icon: <CpuIcon className="w-5 h-5 mr-2" /> },
//   { name: "dbms", label: "DBMS", icon: <DatabaseIcon className="w-5 h-5 mr-2" /> },
//   { name: "oops", label: "OOPs", icon: <BookOpenIcon className="w-5 h-5 mr-2" /> },
//   { name: "aptitude", label: "Aptitude", icon: <BrainIcon className="w-5 h-5 mr-2" /> },
// ];

// const containerVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const HomePage = () => {
//   const navigate = useNavigate();
//   const { loginWithRedirect } = useAuth0();

//   const handleNavigate = (subject) => {
//     navigate(`/quiz/${subject}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100 text-gray-800 px-4 py-10 flex flex-col items-center">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Ace your OA and Technical Interview
//       </motion.h1>

//       <motion.h2
//         className="text-xl md:text-2xl text-center font-semibold text-blue-700 mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         with MCQ Portal <span className="text-black">(Devanshu Shukla)</span>
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl"
//         variants={containerVariant}
//         initial="hidden"
//         animate="visible"
//       >
//         {subjects.map((subject) => (
//           <motion.button
//             key={subject.name}
//             onClick={() => handleNavigate(subject.name)}
//             className="flex items-center justify-center bg-white text-black font-medium rounded-xl shadow px-4 py-3 hover:bg-blue-100 transition"
//             variants={itemVariant}
//           >
//             {subject.icon}
//             {subject.label}
//           </motion.button>
//         ))}
//       </motion.div>

//       <motion.button
//         onClick={() => {
//           try {
//             loginWithRedirect();
//           } catch (err) {
//             console.error("Login failed:", err);
//           }
//         }}
//         className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//       >
//         Get Started
//       </motion.button>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { FaArrowRight } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// // import Header from './Header';
// // import Footer from './Footer';

// const HomePage = () => {
//   const { isAuthenticated, loginWithRedirect } = useAuth0();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (isAuthenticated) {
//       navigate('/choose-subject');
//     } else {
//       loginWithRedirect();
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
     

//       <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 animate-fadeIn">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
//           Ace your OA and Technical Interview with <br />
//           <span className="text-indigo-600">MCQ Portal (Devanshu Shukla)</span>
//         </h1>

//         <div className="flex flex-wrap gap-4 justify-center">
//           {['CN', 'OS', 'DBMS', 'OOPs', 'Aptitude'].map((subject) => (
//             <button
//               key={subject}
//               onClick={() => navigate(`/${subject.toLowerCase()}`)}
//               className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
//             >
//               {subject}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleClick}
//           className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
//         >
//           {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
//           <FaArrowRight />
//         </button>
//       </main>

    
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
      console.error('Error during navigation or login:', err.message);
      setNavError('Something went wrong. Please try again.');
    }
  };

  // const handleSubjectClick = (subject) => {
  //   try {
  //     navigate(`/${subject.toLowerCase()}`);
  //   } catch (err) {
  //     console.error(`Failed to navigate to ${subject}:`, err.message);
  //     setNavError(`Failed to open ${subject} quiz.`);
  //   }
  // };const handleSubjectClick = (subject) => {
  const handleSubjectClick = (subject) => {
  try {
    navigate(`/quiz/${subject.toLowerCase()}`);
  } catch (err) {
    console.error(`Failed to navigate to ${subject}:`, err.message);
    setNavError(`Failed to open ${subject} quiz.`);
  }
};




  if (isLoading) {
    return (
      // <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-700">
      //   Loading...
      // </div>
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
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
          Ace your OA and Technical Interview with <br />
          <span className="text-indigo-600">MCQ Portal (Devanshu Shukla)</span>
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {['CN', 'OS', 'DBMS', 'OOPs', 'Aptitude'].map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectClick(subject)}
              className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
            >
              {subject}
            </button>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
        >
          {isAuthenticated ? 'Continue Your Learning Journey' : 'Get Started'}
          <FaArrowRight />
        </button>
      </main>
    </div>
  );
};

export default HomePage;
