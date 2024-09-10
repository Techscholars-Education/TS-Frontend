"use client";
import React, { useState, useEffect } from "react";
import Course from "@/components/Dashboard/Course/Course";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import PurCourse from "@/components/PurchaseCourses/PurCourse";
const HeroCoursesSection = () => {
  const [userEmail, setUserEmail] = useState("");
  const [is_premium,setIs_Premium] = useState(null)

  useEffect(() => {
    const profileStorageString = localStorage.getItem("profile-storage");
    const profileStorage = JSON.parse(profileStorageString);
    const email = profileStorage.state.profiles.email;
    const premium = profileStorage.state.profiles.is_premium;
    setIs_Premium(premium)
    setUserEmail(email);
  }, [userEmail,is_premium]);

  <section className="flex w-full overflow-x-hidden">
    <LeftNavigation />
  </section>;
  return (
    <section className="flex w-full">
      <LeftNavigation />
      {is_premium ? <Course /> : <PurCourse />}
    </section>
  );
};

export default HeroCoursesSection;
