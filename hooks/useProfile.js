"use client"

import { useState } from "react";
import {useProfileStore} from "./useStore";
import { toast } from "react-toastify";
import { tsUrl } from '@/config';
import Cookies from "js-cookie";
const useProfile = () => { 

  const {profilesData} = useProfileStore()
  let cookies = Cookies.get("access_token")
	const [loading, setLoading] = useState(false);
		const useprofile = async () => {
			const myHeaders = new Headers();
            myHeaders.append("authorization", cookies);
            try {
              const res = await fetch(`${tsUrl}/auth/profile/view`, {
               method: "GET",
               headers: myHeaders,
              });
              const data = await res.json();
              // console.log(data);
              profilesData(data)
              
            } catch (error) {
              toast.error(error.message);
            }


		};

	return {useprofile };
};
export default useProfile;