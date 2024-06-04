import TestItemList from '@/components/Dashboard/Test/TestItemList'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
    <div>
            <section className="flex w-full">
                <LeftNavigation/>
                <div className='flex flex-col bg-black'>

                  
                    <TestItemList/>
                </div>
            </section></div>
  )
}

export default page