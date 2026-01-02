
"use client";
import { useEffect, useState } from "react";

export default function ImageFan() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <div className="mt-10 flex justify-center  items-center relative h-[400px]">
      
      <img
        src="/img/shop1.avif"
        className={`w-60 h-70 rounded-3xl origin-top -rotate-12 scale-105 shadow-2xl absolute
        transition-all duration-700
        ${show ? "-translate-x-100 opacity-100" : "translate-x-0 opacity-0"}`}
      />

      <img
        src="/img/shop2.avif"
        className={`w-60 h-70 rounded-3xl origin-bottom rotate-12 scale-110 shadow-2xl absolute
        transition-all duration-700 delay-100
        ${show ? "-translate-x-35 opacity-100" : "translate-x-0 opacity-0"}`}
      />

      <img
        src="/img/shop3.jpg"
        className={`w-60 h-70 rounded-3xl origin-top -rotate-12 scale-110 shadow-2xl absolute
        transition-all duration-700 delay-200
        ${show ? "translate-x-30 opacity-100" : "translate-x-0 opacity-0"}`}
      />

      <img
        src="/img/shop4.avif"
        className={`w-60 h-70 rounded-3xl origin-bottom rotate-12 scale-105 shadow-2xl absolute
        transition-all duration-700 delay-300
        ${show ? "translate-x-95 opacity-100" : "translate-x-0 opacity-0"}`}
      />
      
    </div>
  );
}

