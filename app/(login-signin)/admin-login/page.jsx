"use client"

import React, { useEffect, useState } from 'react'
import img1 from "../../../public/AdminDashboard/admin-login.png"
import Image from 'next/image'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif1 from "../../../public/Ts-Loader.gif";
import useLogin from '@/hooks/useLogin';

const Page = () => {
    const { login } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [domLoaded, setDomLoaded] = useState(false);


    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      };

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!email) {
            toast.error("Email is required");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Invalid email format");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        // console.log(email,password);

        try {
            
            const res = await login(email, password);  
          } catch (error) {
            console.log("Some error occured in login");
          }
    }

    useEffect(() => {
        setTimeout(() => {
            setDomLoaded(true);
        }, 2000);
    }, []);

    return (
       <>
        {domLoaded ? (
            <>
            <ToastContainer />
            <div className='h-screen w-full relative'>
                <Image src={img1} className='h-screen w-full absolute' alt='logo' />
                <div className=' h-screen w-full absolute z-30 flex items-center justify-center '>
                    <div className=' lg:h-[67vh] lg:w-[30vw] h-[55vh] w-[40vh] bg-white rounded-md p-5 pl-10 pr-10 relative'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='font-semibold text-2xl'>Login to Account</h1>
                            <p className='lg:text-[.8vw] text-[2.5vw]  text-gray-500'>Please enter your email and password to continue</p>
                        </div>
                        <div className='mt-10'>
                            <form className="">
                                <div className='mb-5'>
                                    <label htmlFor="email" className="block mb-2 lg:text-[1vw] text-[3vw] font-semibold text-gray-600">Email Address</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="esteban_schiller@gmail.com" required 
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className='absolute right-10 mt-[-2vw] lg:mt-0'>
                                    <button className='text-gray-600  lg:text-[1vw] text-[3vw] hover:text-red-400 transition-all ease-in-out duration-200'>Forget Password?</button>
                                </div>
                                <div >
                                    <label htmlFor="password" className="block mb-2  lg:text-[1vw] text-[3vw] font-semibold text-gray-600">Password</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="&#9679; &#9679; &#9679; &#9679; &#9679;" required 
                                         onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                {/* <div className="flex items-start mt-5">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-semibold text-gray-600 ">Remember me</label>
                                </div> */}
                                <div className='flex items-center justify-center lg:mt-[3vw] mt-[7vw]'>

                                    <button type='submit' onClick={handleSubmit} className='flex items-center justify-center text-white bg-TechBlue pl-4 pr-4 pt-2 pb-2 lg:w-[20vw] w-[50vw] rounded-lg hover:bg-black transition-all ease-in-out duration-200'>Sign In</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </>
        ):(
            <>
        <div className="h-screen w-full flex items-center justify-center"> 

<Image src={gif1} alt="gif-loader" className="lg:h-[20vh] lg:w-[10vw] h-[20vh] w-[35vw] " priority={true} />

</div>
        </>
        )}
       </>
    )
}

export default Page