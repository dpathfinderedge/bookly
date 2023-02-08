import React from 'react';
import { Navbar, Table } from '../components';
import avatar from '../assets/avatar.png';

const SingleUser = () => {
  return (
    <>
      <Navbar />
      <section className="mt-14 md:mt-6 p-3">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-[1] drop-shadow-lg rounded-lg p-4 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 relative">
            <span className="absolute top-0 right-0 p-2 cursor-pointer bg-[#7551f818] text-[#7451f8] text-xs rounded-tr-lg">Edit</span>
            <h1 className="text-md font-bold mb-4">User Information</h1>
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0">
              <img className="w-20 h-20 rounded-full object-cover self-center md:self-start" src={avatar} alt="user" />
              <div>
                <h1 className="text-lg font-bold text-gray-600 dark:text-gray-200 mb-2">Nirav Joshi</h1>
                <div className="text-sm mb-1.5">
                  <span className="font-semibold text-sm mr-1.5">Email: </span>
                  <span className="font-light">nirav@gmailc.om</span>
                </div>
                <div>
                  <span className="font-semibold text-sm mr-1.5">Phone: </span>
                  <span className="font-light">+119 893 535 092</span>
                </div>
                <div>
                  <span className="font-semibold text-sm mr-1.5">Address: </span>
                  <span className="font-light">Elton St. 234 Garden Yd. New York</span>
                </div>
                <div>
                  <span className="font-semibold text-sm mr-1.5">Country: </span>
                  <span className="font-light">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2] drop-shadow-lg rounded-lg p-4 bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
            <h1 className="text-md font-bold mb-4">User Spending (Last 6 months)</h1>
            <div>Area Chart</div>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg drop-shadow-lg p-4 rounded-lg  mt-6">
          <h1 className="text-gray-400 text-lg font-medium mb-4">Latest Transactions</h1>
          <Table />
        </div>
      </section>
    </>
  );
};

export default SingleUser;