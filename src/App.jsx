import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-h-screen py-4 ">
      {/* <div className="fluid-background"></div> */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg max-h-screen mt-20 p-6 md:p-10 text-center  max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          AI Image Enhancer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Upload an image and enhance it using AI
        </p>
        <Home />
      </div>
      <div className="mt-8 text-sm text-gray-400">
        Powered by <span className="font-semibold text-gray-200">@AI</span>
      </div>
    </div>
  );
};

export default App;