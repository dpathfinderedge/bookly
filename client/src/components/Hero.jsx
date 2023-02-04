import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
// import { DateRange } from 'react-date-range';
// import { format } from 'date-fns';

const Hero = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, 
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  };

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <section className="relative mt-16 md:mt-18"> {/**pt-16 md:mt-18 */}
      <div className="hero">
        <div className="w-full max-w-[1024px] mx-auto md:px-0 px-4 flex items-center h-full">
          <h1 className="font-semibold md:text-5xl text-3xl w-[24rem] text-black/90">Book With Us And Enjoy Your Journey!</h1>
        </div>

        {type !== 'list' && <>
          <div className="flex justify-center items-center">
            <div className="md:block hidden w-full max-w-[1024px] mx-auto px-6 py-2 bg-white rounded-xl shadow-xl h-[120px] absolute -bottom-[68px] z-[50]"> {/** min-w-[200px] */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-end space-x-0 md:space-x-10 space-y-4 md:space-y-0 w-full">
                <div className="w-full md:w-[5/6]">
                  <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="border-b-2 border-b-primary-blue pb-2">
                        <p className="font-bold text-sm text-gray-600">🛏 Hotel</p>
                      </div>
                      <div className="pb-2">
                        <p className="font-bold text-sm text-gray-600">✈ Flight</p>
                      </div>
                      <div className="pb-2">
                        <p className="font-bold text-sm text-gray-600">🚗 Car Rental</p>
                      </div>
                    </div>

                    <div className="flex space-x-2 md:space-x-3">
                      <div className="pb-2">
                        <p className="font-bold text-sm text-gray-600">Round trip ▾</p>
                      </div>
                      <div className="pb-2">
                        <p className="font-bold text-sm text-gray-600">1 passenger ▾</p>
                      </div>
                    </div>

                    <div className="relative">
                      <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                      {openOptions && 
                        <div className="absolute top-[50px] bg-white text-gray-400 rounded-lg z-[2]">
                          <div className="w-[200px] flex justify-between items-center m-4">
                            <span>Adult</span>
                            <div className="flex items-center space-x-2 text-xs text-black">
                              <button disabled={options.adult <= 1} type="button" className="w-7 h-7 border border-primary-blue text-primary-blue bg-white disabled:cursor-not-allowed" onClick={() => handleOption('adult', 'd')}>-</button>
                              <span>{options.adult}</span>
                              <button type="button" className="w-7 h-7 border border-[#3671E9] text-primary-blue bg-white" onClick={() => handleOption('adult', 'i')}>+</button>
                            </div>
                          </div>
                          <div className="w-[200px] flex justify-between items-center m-4">
                            <span>Children</span>
                            <div className="flex items-center space-x-2 text-xs text-black">
                              <button disabled={options.children <= 0} type="button" className="w-7 h-7 border border-primary-blue text-primary-blue bg-white disabled:cursor-not-allowed" onClick={() => handleOption('children', 'd')}>-</button>
                              <span>{options.children}</span>
                              <button type="button" className="w-7 h-7 border border-primary-blue text-primary-blue bg-white" onClick={() => handleOption('children', 'i')}>+</button>
                            </div>
                          </div>
                          <div className="w-[200px] flex justify-between items-center m-4">
                            <span>Room</span> 
                            <div className="flex items-center space-x-2 text-xs text-black">
                              <button disabled={options.room <= 1} type="button" className="w-7 h-7 border border-primary-blue text-primary-blue bg-white disabled:cursor-not-allowed" onClick={() => handleOption('room', 'd')}>-</button>
                              <span>{options.room}</span>
                              <button type="button" className="w-7 h-7 border border-primary-blue text-primary-blue bg-white" onClick={() => handleOption('room', 'i')}>+</button>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 mt-4 w-full">
                    

                    <div className="bg-gray-100 rounded-xl px-4 py-2 w-full">
                      <p className="text-sm font-semibold">Location</p>
                      <input 
                        placeholder="Where are you going?" 
                        type="text" 
                        className="text-sm bg-inherit w-full border-0 outline-0" 
                        onChange={e => setDestination(e.target.value)}
                      />
                    </div>

                    <div className="bg-gray-100 rounded-xl px-4 py-2 w-full">
                      <p className="text-sm font-semibold">Check in</p>
                      <input placeholder="Add date" type="text" className="text-sm bg-inherit w-full border-0 outline-0" />
                    </div>
                    <div className="bg-gray-100 rounded-xl px-4 py-2 w-full">
                      <p className="text-sm font-semibold">Check out</p>
                      <input placeholder="Add date" type="text" className="text-sm bg-inherit w-full border-0 outline-0" />
                    </div>

                    {/* <div className="relative">
                      <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'mm/dd/yyyy')} to ${format(date[0].endDate, 'mm/dd/yyyy')}`}</span>
                      {openDate && <DateRange 
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSlection={false}
                        ranges={date}
                        minDate={new Date()}
                        className="absolute top-[50px] z-[2]"
                      />}
                    </div> */}
                  </div>
                </div>

                <div className="md:w-[1/6]">
                  <Button bg="bg-primary-blue" text="Search" handleSearch={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </>}
      </div>
    </section>
  );
};

export default Hero;