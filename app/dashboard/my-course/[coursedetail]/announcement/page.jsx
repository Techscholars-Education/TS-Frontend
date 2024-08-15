
import Announcement from '@/components/Dashboard/Course/Announcement'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

export default function page() {
    return (
        <div>
            <section className="flex w-full overflow-x-hidden">
                <LeftNavigation></LeftNavigation>
                <div className='flex flex-col'>

                    <DashboardNavbar title="Course"/>
                    <Announcement/>
                </div>
            </section></div>
    )
}
