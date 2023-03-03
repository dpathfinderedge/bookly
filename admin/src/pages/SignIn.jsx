import axios from 'axios';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContextProvider';

const SignIn = () => {
  const [showKey, setShowKey] = useState(false);
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const { loading, err, dispatch } = useAuthContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'SIGNIN_START' })

    try {
      const res = await axios.post('/auth/signin', credentials);

      if (res.data.isAdmin) {
        dispatch({ type: 'SIGNIN_SUCCESS', payload: res.data.details });

        navigate('/');
      } else (
        dispatch({ type: 'SIGNIN_FAILURE', payload: { message: 'You are not allowed!' } })  
      )
    } catch (err) {
      dispatch({ type: 'SIGNIN_FAILURE', payload: err.response.data })
    }
  };


  return (
    <div  className="flex justify-center items-center mx-auto md:w-1/3 w-full p-4 h-screen">
      <div className="flex justify-center flex-col p-4 rounded-lg border shadow-lg w-full">
        <h2 className="text-md font-bold text-gray-800 mb-4">Login to your account</h2>
        <div className="w-full mb-3">
          <label className="text-xs text-gray-600 font-semibold">EMAIL</label>
          <div className="w-full rounded-lg border bg-white p-2">
            <input className="w-full bg-inherit text-xs placeholder-neutral-400 border-0 outline-0" type="email" placeholder="Email address" id="email" onChange={handleChange} />
          </div>
        </div>
        <div className="w-full mb-3">
          <label className="text-xs text-gray-600 font-semibold">PASSWORD</label>
          <div className="flex justify-between items-center w-full rounded-lg border bg-white p-2">
            <input className="w-full bg-inherit text-xs placeholder-neutral-400 border-0 outline-0" type={showKey ? "text" : "password"} placeholder="Password" id="password" onChange={handleChange} />
            <span 
              onClick={() => setShowKey(!showKey)}
              className="hover:bg-transparent ml-2 w-max"
              >
                {showKey ? <FiEye /> : <FiEyeOff />}
              </span>
          </div>
        </div>
        <button className="text-sm text-white font-bold bg-blue-600 p-2 w-full rounded-lg" disabled={loading} onClick={handleClick}>Sign In</button>
        {err && <span className="text-sm text-rose-400 mt-3">{err.message}</span>}
      </div>
    </div>
  );
};

export default SignIn;