'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import Calendar from 'react-calendar';
import { LineChart } from '@mui/x-charts/LineChart';
import CanvasJSReact from 'canvasjs-react-charts';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { FaHandsClapping } from "react-icons/fa6";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';




const Home = () => {

    const options = {
        animationEnabled: true,
        title: {
            text: "Monthly Sales - 2017"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in USD)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 37160 },
                { x: new Date(2017, 11), y: 38400 }
            ]
        }]
    }
    const [isChecked, setIsChecked] = useState(false);


    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const [dateRange, setDateRange] = useState([]);

    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    const data = [
        { x: 1, y: 2 },
        { x: 2, y: 5.5 },
        { x: 3, y: 2 },
        { x: 5, y: 8.5 },
        { x: 8, y: 1.5 },
        { x: 10, y: 5 },
    ];
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <>
            <div className='flex flex-col bg-[#F0F7FF]'>
                <div className='flex w-full'>
                    <div className="w-[60vw] mx-6 mt-2">
                        <div className='flex justify-between m-4'>
                            <div className="relative rounded-full bg-white shadow-md w-[400px] h-[40px]">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <AiOutlineSearch className="text-gray-500" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 rounded-full  "
                                />
                            </div>
                            <div className='flex'>
                                <RiSunLine color='#002657' className='mt-0.5' />
                                <div
                                    className={`relative inline-block w-14 h-5 mx-3 align-middle select-none transition duration-200 ease-in bg-[#002657] rounded-full cursor-pointer ${isChecked ? 'bg-[#002657]' : 'bg-[#002657]'
                                        }`}
                                    onClick={handleToggle}
                                >
                                    <div
                                        className={`toggle-dot absolute w-4 h-4 top-0.5 mx-1 rounded-full bg-[#FED102] transition-transform ${isChecked ? 'transform translate-x-[2vw]' : ''
                                            }`}
                                    ></div>
                                </div>
                                <RiMoonClearLine
                                    color='#002657' className='mt-0.5'
                                />
                            </div>
                        </div>
                        <div className='flex  bg-white rounded-lg my-6 h-[175px] w-[836px]'>
                            <div className='flex flex-col m-6 w-3/5'>
                                <div className='flex'>
                                    <p className='font-[700] text-[35px] text-[#002657]'>Welcome back ,Ankit</p>  <FaHandsClapping className='text-[34px] mt-2.5 mx-3 text-yellow-400' />
                                </div>
                                <p className='text-[#002657] font-[400] text-[15px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias voluptatum porro quia maxime rerum distinctio enim! Natus cumque et explicabo molestiae vitae quisquam corrupti? Nam ex doloribus itaque voluptate!
                                </p>
                            </div>
                            <div className=' w-2/5 flex justify-end my-4'>
                                <Image src={require('../../public/Home/profileimg.jpg')} className='mr-8' />
                            </div>
                        </div>
                        <div className='flex justify-between  h-[250px] w-[818px]'>
                            <div className='bg-white rounded-md'>
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[
                                        {
                                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                                        },
                                    ]}
                                    width={500}
                                    height={300}

                                />
                            </div>
                            <div className=' p-6 bg-white rounded-lg ml-4 w-[273px] '>
                                <div className="flex justify-between mb-2  ">

                                    <span>Topic progress</span>


                                    <select>
                                        <option value="jee">JEE</option>
                                        <option value="neet">NEET</option>
                                    </select>

                                </div>

                                <div className='flex justify-between h-[48.2px]'>
                                    <p>Physics</p>
                                    <CircularProgressWithLabel value={progress} />

                                </div>
                                <div className='flex justify-between h-[48.2px]'>
                                    <p>Physics</p>
                                    <CircularProgressWithLabel value={progress} />

                                </div>
                                <div className='flex justify-between h-[48.2px]'>
                                    <p>Physics</p>
                                    <CircularProgressWithLabel value={progress} />

                                </div>
                                <div className='flex justify-between h-[48.2px]'>
                                    <p>Physics</p>
                                    <CircularProgressWithLabel value={progress} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/4">
                        <div className='m-8'>
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className='flex mx-6 mt-6 bg-white rounded-lg p-6'>
                    <div className='w-[438px] h-[280px]'>
                        <div className='flex justify-between'>
                            <p className='text-[#333333] font-[700] text-[15px]'>Community</p>
                            <p className='text-[#333333] font-[700] text-[15px]'>View All</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar {...stringAvatar('Mayowa Ade')} />
                                   
                                </Stack>
                                <div className='flex flex-col ml-3'>
                                    <h2 className='text-[#333333] font-[700] text-[15px]'>Mayowa Ade</h2>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <button className='bg-white border-slate-400 border px-2 rounded-full'>First Chapter of Project .doc</button>
                                </div>
                            </div>
                            <div>
                                <p>09:31 am</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar {...stringAvatar('Mayowa Ade')} />
                                   
                                </Stack>
                                <div className='flex flex-col ml-3'>
                                    <h2 className='text-[#333333] font-[700] text-[15px]'>Mayowa Ade</h2>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <button className='bg-white border-slate-400 border px-2 rounded-full'>First Chapter of Project .doc</button>
                                </div>
                            </div>
                            <div>
                                <p>09:31 am</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar {...stringAvatar('Mayowa Ade')} />
                                   
                                </Stack>
                                <div className='flex flex-col ml-3'>
                                    <h2 className='text-[#333333] font-[700] text-[15px]'>Mayowa Ade</h2>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <button className='bg-white border-slate-400 border px-2 rounded-full'>First Chapter of Project .doc</button>
                                </div>
                            </div>
                            <div>
                                <p>09:31 am</p>
                            </div>
                        </div>
                    </div>
                    <div></div>

                </div>

            </div>
        </>
    )
}

export default Home


function CircularProgressWithLabel(
    props
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}