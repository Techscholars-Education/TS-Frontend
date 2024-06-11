"use client"

import { useEffect, useState } from "react";
import { useCookieStore } from "./useStore";
const useProfile = () => {

    const {cookie} = useCookieStore()
	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState([])


		const useprofile =  () => {
			const myHeaders = new Headers();
            myHeaders.append("authorization", cookie);
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.techscholars.in/auth/profile/view", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




		};

	return {profile, useprofile };
};
export default useProfile;