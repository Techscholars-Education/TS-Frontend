// app/dashboard/layout.js
"use client";
import React from "react";
import { redirect } from "next/navigation";
import { CookiesProvider } from "react-cookie";

export default function DashboardLayout({ children }) {
  const cookie = "";

  return (
    <>
      {cookie.length > 0 ? (
        <CookiesProvider>
          <div>{children}</div>
        </CookiesProvider>
      ) : (
        <>{redirect("/login")}</>
      )}
    </>
  );
}
