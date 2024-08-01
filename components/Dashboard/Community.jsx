import React from "react";
import Communitycards from "./Communitycards";
import DashboardNavbar from "./DashboardNavbar";
const Community = (props) => {
  return (
    <div className="bg-white font-Poppins h-screen w-full flex flex-col ">
      <DashboardNavbar title={"Community"} />
      <div className="mb-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto">
        <div className="flex justify-between items-center ml-8">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold font-Poppins text-xl text-darkBlue">
              {props.pageTitle}
            </h1>
            <p className="text-gray-500">
              Join the smartest student community today!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-10 mx-4 ">
          {props.data.map((item) => {
            return (
              <Communitycards
                title={item.title}
                key={item.id}
                subhead={item.subhead}
                btnText={item.btnText}
                linkTo={item.linkTo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;
