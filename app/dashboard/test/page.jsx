import Test from '@/components/Dashboard/Test/Test'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
    <section className="flex w-full">
    <LeftNavigation/>
    <Test/>
    
  </section>
  )
}

export default page