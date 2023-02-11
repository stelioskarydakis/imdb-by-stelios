"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currenttheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currenttheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500 ease-out duration-200"
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500 ease-out duration-200"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
