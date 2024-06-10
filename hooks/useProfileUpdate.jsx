"use client"
import { useCookieStore } from "./useStore";
import { toast } from "react-toastify"
const useProfileUpdate = () => {

    const {cookie} = useCookieStore()


		const useprofileupdate = async (name,email,gender,phone) => {
			const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("authorization", cookie);
            try {
                const res = await fetch("https://api.techscholars.in/auth/profile/update", {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify({ 
                        username: name,
                        email: email,
                        phone_country_code: "+91",
                        phone_number: phone,
                        profile_image: null,
                        gender:gender,
                        dob: null,
                        is_verified: false,
                        role: null
                     }),
                    credentials: 'include'
                  });
                  const data = await res.json();
                 if(data.username){
                    toast.success("Profile Updated")
                 }
            
                  if (data.error) {
                    throw new Error(data.error);
                  }
                
                
            } catch (error) {
                toast.error(error.message);
            }

		};

	return {useprofileupdate };
};
export default useProfileUpdate;