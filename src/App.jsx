import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-4"> 
       <Header/>
        <main style={{ padding: "1rem" }}>
        {/* Your main content goes here */}
        <h1>Welcome to My React App</h1>
        <p>This is the main content area.</p>
      </main>







       <Footer/>
    </div>
       
    
    
    
  )
}

export default App;
