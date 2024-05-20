"use client"

import Cookies from "js-cookie";
import toast from "react-hot-toast"


const useLogin = () => {
 
  const login = async(username, password) => {

    const success = handleInputErrors({ username, password });
    if (!success) return;

    try {
        const res = await fetch("https://api.techscholars.co.in/auth/v1/login",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({username,password})
        })
        const data  = await res.json()

              
        if(data.error){
          throw new Error(data.error)
      }
           
        console.log(data.access_token);

        if(data.access_token){
          console.log("wow");

          const sessionExpirationTime = 5 * 60 * 60
          Cookies.set('authCookie',data.access_token,{ expires: sessionExpirationTime } );
          window.location.reload()
           
        }else{
          toast.error("Enter Correct Username and Password")
          console.log("himi");
        
          }
          
        

    } catch (error) {
        toast.error(error.message)
        
    } 
  }
  return {login};
}

export default useLogin


function handleInputErrors({ username, password }) {
	if (!username || !password ) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}