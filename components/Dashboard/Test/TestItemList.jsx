import React from 'react'
import TestItem from './TestItem'
import DashboardNavbar from '../DashboardNavbar'

export default function TestItemList() {
  return (
    <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] ">
        <DashboardNavbar title="Test series Foundation"/>
        <div className="my-2 flex flex-col mx-8"></div>
    <div className='flex flex-col'>
        <TestItem/>
        <TestItem/>
        <TestItem/>
        <TestItem/>
        <TestItem/>
        <TestItem/>
    </div>
    </div>
  )
}
