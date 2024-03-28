'use client'
import Sidenavigation from '@/components/Sidenavigation'
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div>
      <div className='flex w-full h-screen'>
        <Sidenavigation />
        <div className="flex flex-col justify-center items-center h-screen w-full ">
        <nav className='flex justify-end w-[60vw] pt-12 '>
            <span>Don’t have an account?</span>
            <a href="/signin" className='font-[600] ml-2'>Sign Up</a>
          </nav>
        <div className="flex flex-col justify-center items-center h-screen w-full">
         
          <div className=" w-[568] h-[418] p-8">
            <form className=" px-8 pt-6 mb-4 h-[463px]  w-[418px] ">
              <h1 className='mb-6 text-[24px] font-[600]'>Login</h1>
              <div className="mb-4">

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-6">

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex flex-col mt-5 items-center justify-between">
                <div className='flex w-full justify-start'>
                  <a href="#" className='text-[14px] fornt-[400]'>
                    Forgot Password?
                  </a>
                </div>

                <button
                  className="bg-[#FFE01B]  mt-5 w-full font-medium py-2 px-4 rounded"
                  type="button"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                <div class="flex w-full  mt-5">
                  <hr class="w-40 h-px my-3 bg-[#DCDCDC] border-0" />
                  <span class=" mx-4 text-[#DCDCDC]">or</span>
                  <hr class="w-40 h-px my-3 bg-[#DCDCDC] border-0" />
                </div>
                <button className="flex items-center ml-4 font-medium py-2 mt-4 border-2 px-12 border-[#DCDCDC] rounded-md" type="button">
                  <FcGoogle className="mr-2" />
                  Google
                </button>


              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Login