import React from 'react'

function Profile() {
    return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10">
  <img src="logo.png" alt="Profile" className="rounded-full w-24 h-24 mx-auto mb-4" />
  <h2 className="text-xl font-bold text-center">Devanshu Shukla</h2>
  <p className="text-center text-gray-600">dshukla1234fz@gmail.com</p>
  <p className="text-center mt-2">Role:admin</p>
  <p className="text-center mt-1">Total Quizzes Attempted: 10</p>
  <p className="text-center mt-1">Average Score: 90% </p>
</div>

        
    )
}

export default Profile;
