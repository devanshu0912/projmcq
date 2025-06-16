import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 font-sans">
      <Header />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className=" w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h2>
          <p className="text-gray-700">
            Tailwind CSS is working perfectly with React + Vite.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );



}
export default App;

  
  
