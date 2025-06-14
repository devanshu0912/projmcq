import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";
import AuthButton from "./Authbtn";


const Header = () => {

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="src\assets\logo.png" // replace with your actual logo path in /public
            alt=""
            className="h-12 w-12"
          />
          <h1 className="text-xl font-semibold">MCQ Portal</h1>
        </div>
        <div>

        {/* Auth Buttons */}
        {/* Login/Logout Button */}
        <AuthButton />
      
        </div>
      </div>
    </header>
  );
};

export default Header;
// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center p-4">
//         <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-xl w-full">
//           <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to the MCQ Portal</h2>
//           <p className="text-gray-700">
//             Practice multiple choice questions easily and efficiently.
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;

