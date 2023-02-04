import React from 'react';
import dummy from '../assets/hero.png';
import Button from './Button';

const SearchItem = () => {
  return (
    <div className="flex justify-between space-x-4 border rounded-lg p-4">
      <img src={dummy} alt="/" className="w-48 h-48 object-cover" />    
      <div className="flex flex-[2] flex-col space-y-2">
        <h1 className="text-xl text-[#3671E9] font-bold">Tower Street Apartment</h1>
        <span className="text-xs">500m from center</span>
        <span className="text-xs bg-[#008009] text-white w-max p-1 rounded-md">Free airpot taxi</span>
        <span className="text-xs font-bold">Studio apartment with Air conditioning</span>
        <span className="text-xs">Entire Studio . 1 bathroom . 21m 1 full bed</span>
        <span className="text-xs text-[#008009] font-bold">Free Cancellation</span>
        <span className="text-xs text-[#008009]">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-medium">Excellent</span>
          <button type="button" className="bg-[#003580] text-white border-0 p-0.5">8.9</button>
        </div>
        <div className="flex flex-col space-y-2 text-right">
          <span className="text-2xl">$123</span>
          <span className="text-xs text-gray-400">Includes taxes and fees</span>
          <Button bg="bg-primary-blue" text="See availability" />
        </div>
      </div>
    </div>
  )
}

export default SearchItem