import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import TestDetail from '@/components/Dashboard/Test/TestDetail'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

function page() {
  return (
    <div>
            <section className="flex w-full overflow-x-hidden">
                <LeftNavigation/>
                <div className='flex md:flex-col'>

                  
                    <TestDetail/>
                </div>
            </section></div>
  )
}

export default page