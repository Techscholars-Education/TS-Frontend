import Course from '@/components/Dashboard/Course/Course'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
   
    <section className="flex w-full">
    <LeftNavigation/>
    <Course/>
  </section>
   
  )
}

export default page