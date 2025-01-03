"use client";
import { FaSun, FaMoon } from "react-icons/fa"
import { useState, useEffect } from "react";
export default function Home() {
  const [darkMode,setDarkMode] = useState(true)
  useEffect(()=>{
  
  if(typeof window !== "undefined"){
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
},[darkMode])
  return (
      <div>
        <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer  sm:p-2 rounded-full hover:bg-gray-200  sm:pr-[27px] absolute top-[16px] right-[60px] sm:right-[-6px] sm:top-[5px] md:top-[33px] lg:top-[43px] lg:right-[100px]"
                >
                  {darkMode ? (
                    <FaMoon size={20} className="text-yellow-500" />
                  ) : (
                    <FaSun size={20} className="text-blue-500" />
                  )}
                </button>
      </div>
  );
}