import React from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Image from "next/image";
const Feedblog = () => {
  return (
    <div className="bg-white font-Poppins h-screen w-full flex flex-col ">
      <DashboardNavbar title={"Feed"} />
      <div className="mb-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto">
        <div className=" ml-8">
          <div className="flex flex-col gap-1 space-y-4 pr-10 ">
            <h1 className="font-semibold font-Poppins text-2xl text-darkBlue">
              Heading of the blog
            </h1>

            <p className="leading-relaxed text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur voluptas, eaque laboriosam odit nihil dolorem, modi
              iusto autem laborum ut, similique saepe laudantium minima?
              Possimus, eveniet. Ab, sapiente maxime aspernatur iusto ratione
              officiis et neque earum harum voluptates ea odio.
            </p>

            <div className="bg-gray-200 animate-pulse h-96  flex justify-center items-center rounded-md">
              <div className="h-10 w-10 animate-spin border-2 border-gray-400 duration-500  rounded-md">
                {" "}
              </div>
            </div>
            <p className="leading-relaxed text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur voluptas, eaque laboriosam odit nihil dolorem, modi
              iusto autem laborum ut, similique saepe laudantium minima?
              Possimus, eveniet. Ab, sapiente maxime aspernatur iusto ratione
              officiis et neque earum harum voluptates ea odio. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Blanditiis veritatis
              voluptates odit mollitia aut pariatur excepturi ipsa ut, modi
              numquam possimus deleniti corrupti magni omnis explicabo aliquam
              consectetur debitis tempora saepe optio cumque ea esse error
              nulla. Placeat pariatur dolorem perspiciatis dolores nostrum?
              Veniam voluptates nobis optio ex atque molestiae dignissimos velit
              dolorem dicta esse mollitia quam ut commodi, rem sint voluptate
              dolor vitae iste natus accusantium labore debitis, exercitationem
              nisi consectetur? Laboriosam alias facere labore inventore tenetur
              consequuntur modi, eaque quasi odio necessitatibus saepe iure
              tempore culpa, sequi dolores unde nisi quod reprehenderit ad nemo
              illo aliquid obcaecati animi?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 my-10 mx-4 "></div>
      </div>
    </div>
  );
};

export default Feedblog;
