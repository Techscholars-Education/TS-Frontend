import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'
import Classes from '../_Components/Course/foundation/Classes'

const Page = () => {
  return (
    <section className="flex w-full">
    <LeftNavigation />
     <Classes/>
    </section>
  )
}

export default Page