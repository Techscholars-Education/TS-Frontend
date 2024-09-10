"use client"
import { toast } from "react-toastify";
import { tsUrl } from '@/config';
import Cookies from "js-cookie";
import { useMyCourseStore } from "./useStore";
const useMyCourse = () => { 

  const {my_course_Data} = useMyCourseStore()
  let cookies = Cookies.get("access_token")
		const usemyCourse = async () => {
			const myHeaders = new Headers();
            myHeaders.append("authorization", cookies);
            try {
              const res = await fetch(`${tsUrl}/pdt/v1/product/user`, {
               method: "GET",
               headers: myHeaders,
              });
              const data = await res.json();
            //   console.log(data.products); 
            my_course_Data(data.products)
            } catch (error) {
              toast.error(error.message);
            }
		};

	return {usemyCourse};
};
export default useMyCourse;


