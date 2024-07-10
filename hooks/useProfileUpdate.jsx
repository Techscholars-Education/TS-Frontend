"use client"
import { useRouter } from "next/navigation";
import { useCookieStore } from "./useStore";
import { toast } from "react-toastify"
import { tsUrl } from "@/config";
const useProfileUpdate = () => {

   const router = useRouter()

    const {cookie} = useCookieStore()
		const useprofileupdate = async (name,email,gender,phone,imageurl,dob) => {


      const success = handleInputErrors({
        name,email,gender,phone,dob
      });
      if (!success) return;
			const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("authorization", cookie);
            try {
                const res = await fetch(`${tsUrl}/auth/profile/update`, {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify({ 
                        username: name,
                        email: email,
                        phone_country_code: "+91",
                        phone_number: phone,
                        profile_image: imageurl,
                        gender:gender,
                        dob: dob,
                        is_verified: false,
                        role: null,
                        coin: 900,
                        class_s : 12,
                        target_stream : "jee",
                        referal_id : null,
                        sub:null
                     }),
                    credentials: 'include'
                  });
                  const data = await res.json();
                  // console.log(data);
                 if(data.username){
                    toast.success("Profile Updated")
                    router.push("/dashboard/home")
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

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};


function handleInputErrors({
  name,email,gender,phone,dob
}) {
  
  if (!gender) {
    toast.error("Please select gender");
  }

  if (!name || !email || !gender || !phone || !dob) {
    toast.error("Please fill in all fields");
    return false;
  }

 

  if (!validateEmail(email)) {
    toast.error("Invalid email format");
    return;
  }

  return true;
}
export default useProfileUpdate;