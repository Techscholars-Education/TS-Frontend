"use client";
import React, { useState } from "react";
import Popupedit from "./Popupedit";
import Popupdelete from "./Popupdelete";
const Testseries3card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <table className="w-full bg-white rounded-3xl my-10 ">
        <thead>
          <tr className="font-Poppins ">
            <th className="font-normal py-4 text-lg">Check Box</th>
            <th className="font-normal py-4 text-lg">Task Name</th>
            <th className="font-normal py-4 text-lg">Start Date</th>
            <th className="font-normal py-4 text-lg">End Date</th>
            <th className="font-normal py-4 text-lg">Marks</th>
            <th className="font-normal py-4 text-lg">Status</th>
            <th className="font-normal py-4 text-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center font-Poppins ">
            <td className="py-6">
              <input type="checkbox" className="checkbox" />
            </td>
            <td>
              <p className="text-indigo-600">Probability</p>
            </td>
            <td>
              <p className="text-gray-600">3/12/23</p>
            </td>
            <td>
              <p className="text-red-600">3/12/24</p>
            </td>
            <td>
              <p className="text-gray-600">92/100</p>
            </td>
            <td>
              <span className="bg-red-400 px-2 py-2 rounded-xl text-white">
                Pending
              </span>
            </td>
            <td className="flex justify-evenly  py-6">
              <Popupedit
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
              <Popupdelete
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
            </td>
          </tr>
          <tr className="text-center font-Poppins ">
            <td className="py-6">
              <input type="checkbox" className="checkbox" />
            </td>
            <td>
              <p className="text-indigo-600">Probability</p>
            </td>
            <td>
              <p className="text-gray-600">3/12/23</p>
            </td>
            <td>
              <p className="text-red-600">3/12/24</p>
            </td>
            <td>
              <p className="text-gray-600">92/100</p>
            </td>
            <td>
              <span className="bg-red-400 px-2 py-2 rounded-xl text-white">
                Pending
              </span>
            </td>

            <td className="flex justify-evenly  py-6">
              <Popupedit
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
              <Popupdelete
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
            </td>
          </tr>
          <tr className="text-center font-Poppins my-auto   ">
            <td className="py-6">
              <input type="checkbox" className="checkbox" />
            </td>
            <td>
              <p className="text-indigo-600">Probability</p>
            </td>
            <td>
              <p className="text-gray-600">3/12/23</p>
            </td>
            <td>
              <p className="text-red-600">3/12/24</p>
            </td>
            <td>
              <p className="text-gray-600">92/100</p>
            </td>
            <td>
              <span className="bg-red-400 px-2 py-2 rounded-xl text-white">
                Pending
              </span>
            </td>
            <td className="flex justify-evenly  py-6">
              <Popupedit
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
              <Popupdelete
                isOpen={isOpen}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Testseries3card;
