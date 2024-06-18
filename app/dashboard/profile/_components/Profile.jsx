'use client'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import Image from 'next/image'
import iconProfile from "../../../../public/Dashboard/profile.gif"
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
  const [userImage,setUserImage] = useState()
  const [call,setCall] = useState(false)

   
  useEffect(()=>{
    const image = window?.localStorage?.getItem("profile-storage");
    const imagejs = JSON.parse(image)
    setUserImage(imagejs.state.profiles.profile_image);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[call])
  
  
  useEffect(()=>{
    useprofile()
    setCall(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[1])


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("")
  const [dob,setDob] = useState("")
  const [imageUrl, setImageUrl] = useState(null)

  const [isModalOpen, setModalOpen] = useState(false);

  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value)
    
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","simvlvoa")
    data.append("cloud_name","dmdgqiaix")
    fetch("https://api.cloudinary.com/v1_1/dmdgqiaix/image/upload",{
      method:"POST",
      body:data
    }).then((res)=> res.json())
    .then((data) => {setImageUrl(data.url)})
  };

 
  const imageurl = imageUrl === null ? userImage : imageUrl
 
  const handleSubmit = () => {   
      try {
      const res = useprofileupdate(name,email,gender,phone,imageurl,dob);
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
    setDob("")   
  }
  const handleReset = (event) => {
    event.preventDefault()
    setName("")
    setEmail("")
    setGender("")
    setPhone("")
    setDob("")
    // useprofile()
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
                                    {userImage ? <Image src={imageUrl ? imageUrl : userImage || iconProfile}  alt='imageuser' className='rounded-full cursor-pointer' width={105} height={105} priority /> : <Image priority src={imageUrl ? imageUrl : iconProfile}  alt='imageuser' className='rounded-full cursor-pointer' width={105} height={105} unoptimized />}
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
                    <div className=' w-full h-[44vh] flex flex-col gap-9'>
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
                          <select  value={gender} onChange={handleGenderChange} className='bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5'>
            <option value="" selected disabled hidden>Choose Gender</option>
        <option value="Male" >Male</option>
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
                      <div className="flex gap-24">
                        <div className="flex flex-col">
                          <label
                            htmlFor="dob"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                           DOB
                          </label>
                          <input
                            type="date"
                            placeholder='Please enter your Date of Birth'
                            id="dob"
                            value={dob}
                            onChange={(e)=>{setDob(e.target.value)}}
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
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