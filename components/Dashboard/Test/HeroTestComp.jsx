"use client";
import React, { useState, useEffect } from "react";
import SeriesNotPurchased from "@/components/Dashboard/Test/SeriesNotPurchased";
import SeriesPurchased from "@/components/Dashboard/Test/SeriesPurchased";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
const HeroTestComp = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const profileStorageString = localStorage.getItem("profile-storage");
    const profileStorage = JSON.parse(profileStorageString);
    const email = profileStorage.state.profiles.email;
    setUserEmail(email);
  }, [userEmail]);

  return (
    <section className="flex w-full">
      <LeftNavigation />
      {userEmail === "cikoxo6917@biscoine.com" ? (
        <SeriesPurchased />
      ) : (
        <SeriesNotPurchased />
      )}
    </section>
  );
};

export default HeroTestComp;
