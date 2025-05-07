import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader animate-spin ease-linear rounded-full border-8 border-t-transparent border-blue-800 h-16 w-16"></div>
      <h1 className="text-gray-800 text-xl mt-4">Loading...</h1>
    </div>
  );
};

export default Loading;
