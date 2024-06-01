import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import TestDetail from '@/components/Dashboard/Test/TestDetail'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
    <div>
            <section className="flex w-full">
                <LeftNavigation/>
                <div className='flex flex-col'>

                  
                    <TestDetail/>
                </div>
            </section></div>
  )
}

export default page