'use client'

import Lecture from '@/components/Dashboard/Course/Lecture'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import { useParams } from 'next/navigation'

export default function Page() { 
    const params  = useParams();
    
    return (
        <div>
            <section className="flex w-full overflow-x-hidden">
                <LeftNavigation />
                <div className='flex flex-col'>
                    <DashboardNavbar title="Course" />
                    <Lecture lecture={params.lecture ? params.lecture : ""} />
                </div>
            </section>
        </div>
    );
}