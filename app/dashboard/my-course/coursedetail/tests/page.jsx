
import Tests from '@/components/Dashboard/Course/Tests'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'

import React from 'react'

function page() {
    return (
        <div><section className="flex w-full overflow-x-hidden ">
             <LeftNavigation/>
            <div className='flex flex-col'>

               <DashboardNavbar title="Course"/>
                <Tests/>

            </div>
        </section></div>
    )
}

export default page