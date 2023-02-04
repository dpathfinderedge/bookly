import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Hero, Navbar, SearchItem } from '../components';
// import { format } from 'date-fns';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <>
      <Navbar />
      <Hero type="list" />
      <section className="w-full max-w-[1024px] mx-auto mt-7 md:px-0 px-4">
        <div className="flex flex-col md:flex-row space-x-5">
          <div className="flex-1 bg-[#febb02] rounded-lg p-2 sticky top-5 h-max">
            <h1 className="font-semibold text-xl mb-2 text-gray-900">Search</h1>
            <div className="flex flex-col mb-2 space-y-1">
              <label className="text-xs">Destination</label>
              <input type="text" placeholder={destination} onChange={e => setDestination(e.target.value)} className="h-7 border-0 p-2" />
            </div>
            <div className="flex flex-col mb-2 space-y-1">
              <label className="text-xs">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)} className="h-7 p-2 bg-white flex items-center cursor-pointer">
                {/* {`${format(date[0].startDate, 'mm,dd,yyyy')} to ${format(date[0].startDate, 'mm,dd,yyyy')}`}  */}
              </span>
              {/* {openDate && <DateRange 
                // editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                // moveRangeOnFirstSlection={false}
                ranges={date}
                minDate={new Date()}
                // className="absolute top-[50px] z-[2]"
              />} */}
            </div>
            <div className="flex flex-col mb-2 space-y-1">
              <label className="text-xs">Options</label>
              <div className="p-2">
                <div className="flex justify-between mb-2 text-gray-900 text-xs">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-gray-900 text-xs">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-gray-900 text-xs">
                  <span>
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-gray-900 text-xs">
                  <span>
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-gray-900 text-xs">
                  <span>
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} className="w-12" />
                </div>
              </div>
            </div>
            <Button bg="bg-primary-blue" text="Search" />
          </div>
          <div className="flex-[3] flex flex-col space-y-4">
            <SearchItem />  
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default List