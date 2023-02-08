import React from 'react';
import { Link } from 'react-router-dom';
import { Datatable, Navbar } from '../components';

const Users = () => {
  return (
    <>
      <Navbar />
      <section className="mt-14 md:mt-6 p-3">
      <div className="flex justify-between items-center text-gray-400 dark:text-gray-200 font-bold mb-4">
        <h1 className="text-xl">Users</h1>
        <Link to="/users/new" className="border border-green-500 p-2 rounded-lg text-sm">Add new</Link>
      </div>
      <Datatable />
      </section>
    </>
  );
};

export default Users;