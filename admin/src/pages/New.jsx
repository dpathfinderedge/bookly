import React, { useState } from 'react';
import { Navbar } from '../components';

import { MdDriveFolderUpload } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';

const Input = ({ type }) => {
  let data;

  switch (type) {
    case 'firstName':
      data={
        label: 'Fist Name',
        type: 'text',
        placeholder: 'Nirav'
      };
      break;
    case 'lastName':
      data={
        label: 'Last Name',
        type: 'text',
        placeholder: 'Joshi'
      };
      break;
    case 'email':
      data={
        label: 'Email',
        type: 'email',
        placeholder: 'nirav@gmail.com'
      };
      break;
    case 'password':
      data={
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password'
      };
      break;
    case 'phone':
      data={
        label: 'Phone',
        type: 'text',
        placeholder: '+123 456 789 012'
      };
      break;
    case 'address':
      data={
        label: 'Address',
        type: 'text',
        placeholder: 'Elton St. 216 New York'
      };
      break;
    case 'country':
      data={
        label: 'Country',
        type: 'text',
        placeholder: 'USA'
      };
      break;
  
    default:
      break;
  };

  return(
    <div className="md:w-[40%] w-full">
      <label>{data.label}</label>
      <input type={data.type} placeholder={data.placeholder} className="w-full p-2 border-b outline-0 bg-inherit" />
    </div>   
  );
};

const New = () => {
  const {currentColor} = useStateContext();
  const [file, setFile] = useState('');

  return (
    <>
      <Navbar />
      <section className="mt-14 md:mt-6 p-3">
        <div className="drop-shadow-lg rounded-lg p-4 bg-white dark:bg-secondary-dark-bg dark:text-gray-200">Add New User</div>

        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-6 drop-shadow-lg rounded-lg p-4 bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex-[1] flex justify-center">
            <img className="h-32 w-32 object-cover rounded-full" src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="avatar" />
          </div>
          <div className="flex-[2]">
            <form className="flex flex-wrap justify-around gap-3">
              <div className="md:w-[40%] w-full">
                <label className="flex items-center space-x-2" htmlFor="file">
                  <span>Image:</span> <MdDriveFolderUpload style={{ color: currentColor }} className="cursor-pointer text-2xl" />
                  </label>
                <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" className="hidden" />
              </div>
              <Input type="firstName" />
              <Input type="lastName" />
              <Input type="email" />
              <Input type="password" />
              <Input type="phone" />
              <Input type="address" />
              <Input type="country" />
              <button type="submit" className="py-2 px-3 text-white font-semibold border-0 text-sm rounded-lg md:w-32 w-full mt-2" style={{ backgroundColor: currentColor }}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default New;