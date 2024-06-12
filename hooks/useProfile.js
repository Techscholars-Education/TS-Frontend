"use client"

import { useState } from "react";
import { useCookieStore, useProfileStore} from "./useStore";
import { toast } from "react-toastify";
const useProfile = () => { 

  const {profilesData} = useProfileStore()

    const {cookie} = useCookieStore()
	const [loading, setLoading] = useState(false);
		const useprofile = async () => {
			const myHeaders = new Headers();
            myHeaders.append("authorization", cookie);
            try {
              const res = await fetch("https://api.techscholars.in/auth/profile/view", {
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