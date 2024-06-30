import React from 'react'
import Courses from './_Components/Courses'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'

const Page = () => {
  return (
    <section className="flex w-full overflow-x-hidden">
      <LeftNavigation />
      <Courses />
    </section>

  )
}

export default Page