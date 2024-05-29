import ReferAndEarn from '@/components/Dashboard/ReferAndEarn'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <ReferAndEarn />
    </section>

  )
}

export default Page