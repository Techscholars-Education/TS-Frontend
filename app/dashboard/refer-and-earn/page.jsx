import ReferAndEarn from '@/components/Dashboard/ReferAndEarn'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

const Page = () => {
  return (
    <div className="h-screen overflow-auto">
    <section className="flex">
      <LeftNavigation />
      <ReferAndEarn />
    </section>
  </div>
  )
}

export default Page