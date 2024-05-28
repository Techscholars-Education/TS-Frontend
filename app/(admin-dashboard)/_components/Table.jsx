
import {
    Card,
    Typography,
    CardBody,
   
} from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TABLE_HEAD = ["Course Name", "Class", "Category", "TS ID", "Name", "Plan Type", "Coupon Used", "Edit"];

const TABLE_ROWS = [
    {
        className: "Ignite Batch",
        class: "Class 11",
        category: "JEE",
        id: "3287483748",
        name: "Rohan",
        type: "Starter",
        coupon: "TS10",
        edit:<FaRegEdit/>,
        delete:<RiDeleteBin6Line/>


    },


];

export function TransactionsTable() {
    return (
        <Card className="h-auto w-full ml-[-.4vw]">

            <CardBody className="overflow-y-auto">
                <table className="w-full  table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y  bg-white p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal max-lg:text-xl leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {TABLE_ROWS.map((i, id) => (
                            <tr key={id} className="border-y">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl "
                                        >
                                            {i.className}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.class}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.category}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.id}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.name}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.type}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="ml-4 max-lg:text-xl"
                                        >
                                            {i.coupon}
                                        </Typography>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <button className="text-gray-400 text-[.9vw] max-lg:text-[4vw] border border-gray-300 rounded-md p-2 hover:border-blue-300 hover:text-blue-300 transition-all ease-in-out duration-200">{i.edit}</button>
                                        <button className="text-[.9vw] max-lg:text-[4vw] text-red-400 border border-gray-300 rounded-md p-2 hover:border-red-300 hover:text-red-300 transition-all ease-in-out duration-200">{i.delete}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}