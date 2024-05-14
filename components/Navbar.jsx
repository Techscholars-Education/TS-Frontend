"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
const Navbar = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  return (
    <>
      <nav
        className={`bg-white shadow-md text-stone-800 py-6 md:py-8 w-full  sticky top-0 z-10 `}
      ></nav>
    </>
  );
};

export default Navbar;
