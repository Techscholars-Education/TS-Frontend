import Course from '@/components/Dashboard/Course/Course'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'
import PurCourse from '@/components/PurchaseCourses/PurCourse'

function page() {
  return (
   
    <section className="flex w-full overflow-x-hidden">
    <LeftNavigation/>
    
    {  true ? (
      <PurCourse />
    ) :(
      <Course/>
    )

    }
    
  </section>
   
  )
}

export default page