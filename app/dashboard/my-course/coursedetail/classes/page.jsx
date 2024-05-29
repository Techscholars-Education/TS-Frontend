
import Classes from '@/components/Dashboard/Course/Classes'
import CourseDetail from '@/components/Dashboard/Course/CourseDetail'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'

export default function page() {
    return (
        <div>
            <section className="flex w-full">
                <LeftNavigation></LeftNavigation>
                <div className='flex flex-col py-8'>

                    <DashboardNavbar title="Course"/>
                    <Classes/>
                </div>
            </section></div>
    )
}
