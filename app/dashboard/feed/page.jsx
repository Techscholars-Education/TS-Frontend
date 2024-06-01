import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'
import Feed from './_Components/Feed'

const Page = () => {
  return (
    <section className="flex w-full">
    <LeftNavigation />
    <Feed/>
    </section>
  )
}

export default Page