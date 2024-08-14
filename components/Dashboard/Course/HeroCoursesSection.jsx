"use client";
import React, { useState, useEffect } from "react";
import Course from "@/components/Dashboard/Course/Course";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import PurCourse from "@/components/PurchaseCourses/PurCourse";
const HeroCoursesSection = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const profileStorageString = localStorage.getItem("profile-storage");
    const profileStorage = JSON.parse(profileStorageString);
    const email = profileStorage.state.profiles.email;
    setUserEmail(email);
  }, [userEmail]);

  <section className="flex w-full overflow-x-hidden">
    <LeftNavigation />
  </section>;
  return (
    <section className="flex w-full">
      <LeftNavigation />
      {userEmail === "cikoxo6917@biscoine.com" ? <Course /> : <PurCourse />}
    </section>
  );
};

export default HeroCoursesSection;
