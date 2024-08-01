"use client"

import Image from 'next/image';
import google_1 from  "@/public/gogle_calendar_1.png"
import Calenders from './Calenders';

const ModalCalendar = ({ showModal, setShowModal,initialRange}) => {
    if (!showModal) return null;

    const handleClose = (e) => {
        if (e.target.id === 'modalContainer') {
            setShowModal(false);
        }
    };
    return (
        <div
            id="modalContainer"
            onClick={handleClose}
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
        >
            <div className="bg-white pt-5 pl-8 pr-8 rounded-lg shadow-lg h-[73vh] w-[28vw] flex flex-col gap-2">

                <div id='strike' className='flex items-center text-center gap-6'> <h1 className='font-semibold text-[1.1vw]'>Learning Streak</h1> <p className='text-[.8vw] font-normal -mt-[.1vw]'>0/30 Minutes Today</p></div>
                <div id='bothStrike' className=' border-gray-300 border rounded-lg h-[10vh] p-2 pl-4 pr-4 flex justify-between'>
                    <div id='currentStrike' className=' flex flex-col'>
                        <h1 className='uppercase text-[.9vw] font-semibold'>Current Streak</h1>
                        <p className='text-TechBlue mt-[1px]'><span className='font-semibold text-[1.1vw]'>5</span>days</p>
                    </div>
                    <div id='longestStrike' className=' flex flex-col'>
                        <h1 className='uppercase text-[.9vw] font-semibold'>Longest Streak</h1>
                        <p className='text-TechBlue mt-[1px]'><span className='font-semibold text-[1.1vw]'>5</span>days</p>
                    </div>
                </div>

                <div id='calendar' className='h-[45vh] flex items-center justify-center w-full'>
                <Calenders initialRange={initialRange} onRangeChange={(range) => console.log()} />
                </div>

                <div id='googleCalender' className='border-gray-300 border rounded-lg h-[5vh] w-[12vw]'>
                       <button className=' flex gap-2 items-center'>
                       <Image src={google_1} className='h-auto w-[2vw]'  alt='google'/>
                       <h1 className='text-[.8vw] font-normal'>Add Google Calendar</h1>
                       </button>
                  
                </div>

            </div>
        </div>
    );
};

export default ModalCalendar;
