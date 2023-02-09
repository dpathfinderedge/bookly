import React from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { RiMore2Fill } from 'react-icons/ri'
import { LineChart, Navbar, AreaChart, Table, Widget } from '../components'

const Summary = ({ heading, icon, amt, color }) => (
  <div className="items-center">
    <div className="text-gray-400 text-sm">{heading}</div>
    <div className={`${color} flex items-center text-sm mt-2`}>
      {icon}
      <div>{amt}</div>
    </div>
  </div>  
);

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="mt-14 md:mt-6 p-3">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-3 md:space-y-0">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-6'>
          <div className="flex-[4] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg drop-shadow-lg p-4 rounded-lg">
          <h1 className="text-gray-400 text-lg font-medium mb-4">Last 6 Months (Revenue)</h1>
            <AreaChart />
          </div>

          <div className="flex-[2] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg drop-shadow-lg p-4 rounded-lg">
            <div>
              <div className="flex justify-between items-center text-gray-400">
                <h1 className="text-lg font-medium">Revenue Updates</h1>
                <RiMore2Fill />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-3 p-4">
              <LineChart />

              <p className="text-gray-400 font-medium">Total sales made today</p>
              <p className="text-2xl">$420</p>
              <p className="font-light text-xs text-gray-400">Previous transacting processing. Last payment may not be included.</p>

              <div className="flex justify-between items-center w-full">
                <Summary heading="Target" icon={<BsArrowDown />} amt="$12.4k" color="text-red-400" />
                <Summary heading="Last Week" icon={<BsArrowUp />} amt="$96.2k" color="text-green-400" />  
                <Summary heading="Last Month" icon={<BsArrowUp />} amt="$84.5k" color="text-green-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg drop-shadow-lg p-4 rounded-lg  mt-6">
          <h1 className="text-gray-400 text-lg font-medium mb-4">Latest Transactions</h1>
          <Table />
        </div>
      </section>
    </>
  )
}

export default Dashboard