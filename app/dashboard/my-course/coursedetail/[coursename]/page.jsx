'use client'
import CourseDetailBefore from '@/components/Dashboard/Course/beforepurchase/CourseDetailBefore'
import CourseDetail from '@/components/Dashboard/Course/CourseDetail'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'

import React from 'react'


function page(props) {
 
  
  return (
    <div>
  <section className="flex w-full overflow-x-hidden">
    <LeftNavigation/>
    <div className='flex flex-col '>

    <DashboardNavbar title="Course"/>{
      true?<CourseDetailBefore/>:
      <CourseDetail/>
    }

    </div>
  </section></div>
  )
}

export default page