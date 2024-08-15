"use client"
import Subject from '@/components/Dashboard/Course/Subject'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import { useParams } from 'next/navigation'


export default function Page() {
    const params  = useParams()
    return (
        <div>
            <section className="flex w-full overflow-x-hidden">
                <LeftNavigation></LeftNavigation>
                <div className='flex flex-col'>

                    <DashboardNavbar title="Course"/>
                   <Subject subject={params.subjects ? params.subjects : "Subject"  } ></Subject>
                </div>
            </section></div>
    )
}
