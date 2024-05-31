import React from 'react'
import Classes from '../_Components/Course/neet/Classes'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'

const Page = () => {
  return (
    <section className="flex w-full">
    <LeftNavigation />
      <Classes/>
    </section>
  )
}

export default Page