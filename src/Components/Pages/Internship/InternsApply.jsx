import React from "react";
import { useNavigate } from "react-router-dom";
const handleGoogleSignIn = () => {
  window.location.href = "https://accounts.google.com/signin";
};

const InternshipApply = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Video Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-200 p-4">
        <video className="rounded-lg w-full md:w-3/4" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Welcome</h1>
        <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-2 text-center">
          to the #1 platform for
          <span className="text-teal-500"> guaranteed internship placement</span>
        </h2>
        <p className="text-gray-500 text-center mb-6 px-4 md:px-0">
          Please enter your email ID & take your first step towards building a strong profile and connecting with companies around the world!
        </p>
        
        {/* Google Sign-In Button */}
        <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 font-semibold bg-white hover:bg-gray-100 mb-4">
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
          Continue With Google
        </button>
        
        <div className="w-full flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-3 text-gray-400">Or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        
        {/* Email Input */}
        <input type="email" placeholder="Email address" className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        
        {/* Continue Button */}
        <button className="w-full py-3 bg-gray-300 text-white font-semibold rounded-lg cursor-not-allowed">
          Continue
        </button>
      </div>
    </div>
  );
};

export default InternshipApply;