import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currenTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [headerPosition, setHeaderPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setHeaderPosition(window.scrollY);
  }, [setHeaderPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, headerPosition]);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {headerPosition < 70 && (
        <div className="fixed mb-10 z-10 shadow-lg shadow-[#185ee041] w-10/12 bg-white animate-animate bg-gradient-to-r from-blue-400 via-blue-300 to-pink-300 items-center dark:bg-gradient-to-r dark:from-blue-800 dark:via-blue-700 dark:to-pink-500 rounded-lg bg-opacity-10 top-4 md:w-2/4 h-46 justify-between flex flex-row text-2xl p-8">
          <img width={50} height={20} src="/altura.png" />
          <h1 className=" font-bold text-4xl">ALTURA</h1>

          {mounted && currenTheme === "dark" && (
            <BsSunFill
              className=" cursor-pointer "
              role="button"
              onClick={() => {
                setTheme("light");
              }}
            />
          )}

          {mounted && currenTheme === "light" && (
            <BsMoonFill
              className=" cursor-pointer "
              role="button"
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
