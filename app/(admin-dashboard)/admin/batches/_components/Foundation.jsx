import React from 'react'

const Foundation = () => {
  return (
    <div>Foundation</div>
  )
}

export default Foundation






// "use client";
// import React, { useEffect, useState } from "react";
// import AdminSidebar from "../../_components/AdminSidebar";
// import Nav from "../../_components/Nav";
// import { FaRegHeart } from "react-icons/fa";

// const Page = () => {
//   const [heart, setHeart] = useState(false);
//   const [domLoaded, setDomLoaded] = useState(false);

//   useEffect(() => {
//     setDomLoaded(true);
//   }, []);

//   const batches = [
//     {
//       id: 1,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//     {
//       id: 2,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//     {
//       id: 3,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//     {
//       id: 4,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//     {
//       id: 5,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//     {
//       id: 6,
//       foundation: "Foundation 9th - 2023",
//       student: "78 students",
//       btn: "view now",
//       heart: <FaRegHeart />,
//     },
//   ];

//   return (
//     <>
//       {domLoaded ? (
//         <div className="h-screen w-full">
//           <Nav />
//           <div>
//             <div>
//               <AdminSidebar />
//             </div>
//           </div>
//           <div
//             id="batches"
//             className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
//           >
//             <div>
//               <h1 className="font-semibold text-xl ml-10 mt-2">
//                 Batch - Foundation
//               </h1>
//             </div>

//             <div className="flex flex-wrap ">
//               {batches.map((i, id) => (
//                 <div
//                   className="h-[22vw] w-[18vw] bg-white ml-10 mt-4 rounded-md p-2"
//                   key={id}
//                 >
//                   <div className=" h-[12vw] w-full"></div>
//                   <div className="flex justify-between pt-2">
//                     <div className="flex flex-col gap-2 ml-3">
//                       <h1 className="text-[1.1vw] font-semibold">
//                         {i.foundation}
//                       </h1>
//                       <h1 className="font-normal">{i.student}</h1>
//                       <button className="pl-3 pr-3 pt-2  pb-2 bg-slate-300 rounded-md hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 ">
//                         {i.btn}
//                       </button>
//                     </div>
//                     <div
//                       className={`text-xl rounded-full p-1  h-8 w-8 flex items-center justify-center ${
//                         heart ? "bg-pink-400" : "bg-gray-100"
//                       } ${
//                         heart ? "text-white" : "text-black"
//                       } cursor-pointer transition-all ease-in-out duration-200 hover:bg-pink-400 hover:text-white`}
//                       onClick={() => setHeart(!heart)}
//                     >
//                       {i.heart}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center h-screen w-full">
//           <div className="loader"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Page;
