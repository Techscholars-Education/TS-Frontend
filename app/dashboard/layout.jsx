// app/dashboard/layout.js
"use client";


import { redirect } from "next/navigation";
import { useState } from "react";
import { CookiesProvider } from "react-cookie";

import Cookies from "js-cookie";




export default function DashboardLayout({ children }) {
  // const [res, setRes] = useState(false)
  // const cooki = Cookies.get("authCookie") 

  // if(cooki.length > 0){
  //   setRes(true);
  // }

 
  

  return (
    <>
     
          <div>{children}</div>
  
      
    </>
  );
}
