import React from 'react'

function page() {
    return (
        <div><section className="flex w-full">
            <LeftNavigation />
            <div className='flex flex-col'>

                <DashboardNavbar />
                <CourseDetail />

            </div>
        </section></div>
    )
}

export default page