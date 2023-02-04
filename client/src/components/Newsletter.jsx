import React from 'react'
import Button from './Button'

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-b from-[#224893] to-[#34346b] mt-7 py-4">
      <div className="w-full max-w-[1024px] mx-auto px-4 md:px-0">
        <div className="bg-primary-blue text-white px-4 md:px-16 py-4 rounded-lg relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end space-x-0 md:space-x-16 space-y-4 md:space-y-0 w-full">
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold w-full">Get our pro offers</h3>
              <p className="text-sm">Create a visual identity for your company, and an overall brand</p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-2 bg-white border rounded-lg w-full">
              <input type="text" placeholder="Type your email here" className="bg-transparent text-black border-0 outline-0" />
              <div className="hidden md:inline-block">
                <Button bg="bg-black/80" text="Subscribe" />  
              </div>
            </div>
            <div className="block md:hidden">
              <Button bg="bg-black/80" text="Subscribe"  />
            </div>
          </div>
          <div className="absolute top-0">
            {/* <img src={vector} alt="/" /> */}
          </div>
          <div className="absolute right-0 bottom-0">
            {/* <img src={vector1} alt="/" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter