import Course from '@/components/Dashboard/Course/Course'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
   
    <section className="flex w-full overflow-x-hidden">
    <LeftNavigation/>
    <Course/>
    
  </section>
   
  )
}

export default page