'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useRouter } from 'next/navigation'

function Contact() {
  const router=useRouter()
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex justify-center items-center mt-12 flex-col'>
        <h2 className="text-[44px] font-[600] text-[#002657]">Contact us</h2>

        <div className="text-[#002657] font-[400] text-[14px] my-5"><p className='text-[#002657] font-[600] text-[20px] text-center'>WhatsApp:</p> <a href="https://wa.me/8334860061" target="_blank" rel="noopener noreferrer">https://wa.me/8334860061</a></div>

        <div className="text-[#002657] font-[400] text-[14px] my-5"><p className='text-[#002657] font-[600] text-[20px] text-center'>Email: </p><a href="mailto:admin.hrm@techscholarseducation.com" target="_blank" rel="noopener noreferrer">admin.hrm@techscholarseducation.com</a></div>
      </div>
      <div className='flex justify-center my-8'>
        <button className='bg-[#131249] w-[185px] h-[42px] rounded-lg text-white items-center' onClick={()=>router.push('/')}>Back to home</button>
      </div>
    </div>
  )
}

export default Contact