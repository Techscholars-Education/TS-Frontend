'use client'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import React from 'react'


function CancellationRefound() {
  const router=useRouter()
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='flex flex-col mx-12 mt-12'>
      <div className='my-8'>
        <h2 className='font-[600] text-[44px] text-center'>Cancellation and refund</h2>
        <p>You are entitled to a refund in the case of the purchased course not being assigned to you within the expiration date from your date of purchase or if you have paid twice for the same course. Under any other circumstance, we will not consider any requests for refund as this is a digital course purchase.</p>
      </div>
      <div className='flex justify-center my-8'>
        <button className='bg-[#131249] w-[185px] h-[42px] rounded-lg text-white items-center' onClick={()=>router.push('/')}>Back to home</button>
      </div>
      </div>
    </div>
  )
}

export default CancellationRefound