'use client'

import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import Image from 'next/image'
import men from "../../../../public/Dashboard/men_nav.jpg"
import { TbEdit } from "react-icons/tb";
import { useEffect, useState } from 'react';
import ConfirmationModal from './Modal';
import useProfile from '@/hooks/useProfile';
import useProfileUpdate from '@/hooks/useProfileUpdate';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
   
  const { useprofile} = useProfile()
  const {useprofileupdate} = useProfileUpdate()


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("")
  const [bio,setBio] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const [isModalOpen, setModalOpen] = useState(false);

  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value)
    
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleSaveClick = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(file)
    console.log(imageUrl);
  };

  const handleSubmit = () => {   
    
    if(!gender){
      toast.error("Gender is required");
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!phone) {
      toast.error("Phone Number is required");
      return;
    }
    if (!name) {
      toast.error("Name is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {

      const res = useprofileupdate(name,email,gender,phone);
    } catch (error) {
      console.log("Some error occured in login");
    }

        setModalOpen(false);
        resetSubmit()
  }
  const resetSubmit = () => {
    setName("")
    setEmail("")
    setGender("")
    setPhone("")
    setBio("")
    
  }


  const handleReset = (event) => {
    event.preventDefault()
    setName("")
    setEmail("")
    setGender("")
    setPhone("")
    setBio("")

  }




    return (

      <>
      <ToastContainer />
          <div className="bg-white font-Poppins w-full overflow-hidden">
            <DashboardNavbar title={"Profile"} />
            <div className="flex flex-col mr-2 bg-blue-50 h-[86vh] max-w-full pl-5 pr-5 pt-5 gap-1">
                <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-xl'>Edit Profile</h1>
                    <p className=' font-normal text-gray-400 text-[.9vw]'>Personal Info</p>
                </div>
                <form className='bg-white h-[73vh] w-full rounded-lg flex flex-col gap-1 pt-2 pl-8 pr-4'>
                    <div className='w-full h-[16vh]'>
                        <div className="flex items-center gap-2 relative">
                            <div className="camera">
                                <label htmlFor="image" >
                                    <Image src={men} alt='imageuser' className='rounded-full h-[7vw] w-[7vw] cursor-pointer'  />
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    className="outline-none hidden "
                                    onChange={handleFileChange}
                                />
                            </div>
                            <h1 className=" text-[.9vw] font-semibold">
                                Upload Photo
                            </h1>
                        <div className='bg-white text-black h-8 w-8 rounded-full p-2 shadow-lg absolute left-20 top-16'> <TbEdit className='cursor-pointer' /></div>
                        </div>
                    </div>
                    <div className=' w-full h-[44vh] flex flex-col gap-2'>
                    <div className="flex gap-24">
                        <div className="flex flex-col">
                          <label
                            htmlFor="full_name"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                           Full Name
                          </label>
                          <input
                            type="text"
                            placeholder='Please enter your name'
                            id="full_name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="email"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                          Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder='Please enter your email'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className="bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                      </div>
                    <div className="flex gap-24">
                        <div className="flex flex-col">
                          <label
                            htmlFor=" gender"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                         Gender
                          </label>
                          <select value={gender} onChange={handleGenderChange} className='bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5'>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="Phone_Number"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                         Phone Number
                          </label>
                          <input
                            type="number"
                            id="Phone_Number"
                            placeholder='+880 123 456 789'
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            className="bg-blue-50   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                      </div>
                    <div className="">
                        <div className="flex flex-col">
                          <label
                            htmlFor="Bio"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                          Bio
                          </label>
                          <textarea
                            type="text"
                            placeholder='Write your Bio here e.g your hobbies, interests ETC'
                            id="Bio"
                            value={bio}
                            onChange={(e)=>{setBio(e.target.value)}}
                            className="bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[16vh] p-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-9'>
                                <button  className='outline-none bg-[#0079FC] flex items-center justify-center h-14 text-white text-[.9vw] w-40 rounded-full hover:bg-black transition-all ease-linear duration-300 hover:shadow-md hover:shadow-black' onClick={handleSaveClick} >Save Change</button>
                                <button className='outline-none flex items-center justify-center h-14 text-black border-2 border-black text-[.9vw] w-40 rounded-full hover:border-red-400 hover:text-red-600 transition-all ease-linear duration-300' onClick={handleReset}>Reset All</button>
                    </div>
                </form>
                {/* Modal */}
                <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSubmit}
      />
            </div>

        </div>
      </>
    )
}

export default Profile