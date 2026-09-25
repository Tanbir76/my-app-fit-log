"use client"
import Image from "next/image";
import NavLogo from "@/assets/logo.png"
import Link from "next/link";
import { useContext } from "react";
import { FitLogContext } from "@/context/FitLogContext";
const link = <>

    <div className="grid md:flex gap-2 text-[1rem] cursor-alias  ">
        <button className="btn rounded-2xl border-none px-5  hover:bg-[#c2f8002c]">
            <Link href='/' className="hover:text-[#C2F800]">Home</Link>
        </button>
         <button className="btn rounded-3xl px-5 border-none  hover:bg-[#c2f80033] ">
            <Link href='/workouts' className="hover:text-[#C2F800]">Workouts</Link>
        </button>
        <button className="btn rounded-3xl  px-5 border-none  hover:bg-[#c2f80028]">
            <Link href='/my-plan' className="hover:text-[#C2F800]" >My Plan</Link>
        </button>
       
    </div>
</>
const Navber = () => {
        const { todaysPlan } = useContext(FitLogContext)
        const { saveWorkout } = useContext(FitLogContext)

    return (
          <header className="sticky top-0 z-50    border border-base-200/60 bg-base-100/90  shadow-lg backdrop-blur-md lg:px-6">
      <div className="navbar container mx-auto ">

        {/* Left: Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu dropdown-content text-[10px] z-50 mt-3 w-52 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {link}
              
            </ul>
          </div>

          <div className="ml-2 flex cursor-pointer items-center gap-2">
            
             <Link href='/'>
                        <div className="flex  items-center gap-2 text-xl">
                            <Image src={NavLogo} alt="logo"></Image>
                            <h1 className="font-bold ">FITLOG</h1>
                        </div>
                        </Link>

           
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium ">
            {link}
         
          </ul>
        </div>
        <div className="navbar-end gap-2">
         <div className="space-x-2.5 flex items-center ">
              <button className="btn btn-success">Plan({`${todaysPlan.length}`})</button>
                  <button className="btn btn-success">Saved({`${saveWorkout.length}`})</button>
             </div>
          
        </div>
      </div>
    </header>

    );
};

export default Navber;





