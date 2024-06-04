import CourseDetail from '@/components/Dashboard/Course/CourseDetail'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
    <div>
  <section className="flex w-full">
    <LeftNavigation/>
    <div className='flex flex-col '>

    <DashboardNavbar title="Course"/>
   <CourseDetail/>

    </div>
  </section></div>
  )
}

export default page