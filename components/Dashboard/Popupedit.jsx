"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
const Popupedit = (props) => {
  return (
    <div className="flex justify-center items-center  ">
      <button
        onClick={props.openDialog}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xl rounded-full"
        title="Edit"
      >
        <CiEdit />
      </button>
      {props.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Dialog Box</h2>
              <p>This is a simple dialog box using Tailwind CSS.</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={props.closeDialog}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupedit;
