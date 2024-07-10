"use client"

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Cookies from "js-cookie";
import { useCookieStore } from '@/hooks/useStore';
import Image from 'next/image';
import google from "@/public/google_loader.gif";

const Page = () => {
    const params = useParams();
    const router = useRouter()
    const id  = params.id;
    const { cookieData } = useCookieStore();
    
    useEffect(()=>{
        if (!id) return;
          if (id) {
      const sessionExpirationTime = new Date(
        new Date().getTime() + 5 * 60 * 60 * 1000
      );
      Cookies.set("access_token", id, { expires: sessionExpirationTime });
      cookieData(id);

      router.replace("/dashboard/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[id])
  return (
    <div className='h-screen w-ful flex items-center justify-center'>
          
    <Image src={google} alt='google-loader' className='h-[50%] w-[50%]' priority/>

    </div>
  )
}

export default Page