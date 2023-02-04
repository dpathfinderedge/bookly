import React from 'react';

const Button = ({ bg, text, handleSearch }) => {
  return (  
    <button 
      type="button" 
      className={`${bg} px-4 py-2 text-white font-semibold rounded-lg w-full`}
      onClick={handleSearch}
    >
      {text}
    </button>  
  );
};

export default Button;