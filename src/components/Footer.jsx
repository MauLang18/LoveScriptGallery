import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [currentYear]);
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright {currentYear} | CustomCodeCR</p>
      </div>
    </div>
  );
};

export default Footer;
