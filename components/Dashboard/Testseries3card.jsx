import React from "react";

const Testseries3card = () => {
  return (
    <>
      <table className="w-full bg-white rounded-xl my-10 ">
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
        <tbody className="">
          <tr className="text-center font-Poppins ">
            <td className="py-4">
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
          </tr>
          <tr className="text-center font-Poppins ">
            <td className="py-4">
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
          </tr>
          <tr className="text-center font-Poppins ">
            <td className="py-4">
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
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Testseries3card;
