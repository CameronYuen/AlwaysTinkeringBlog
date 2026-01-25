import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArchiveDropdown from "./ArchiveDropdown";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="px-24 py-4 max-sm:px-5 border-b border-zinc-100 items-center">
      <nav className="flex justify-between items-center" ref={navRef}>
        <div className="logo text-2xl font-bold text-slate-800">
          <Link to="/">Always Tinkering</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 md:flex-row md:gap-6 items-center text-base text-slate-800 max-md:text-neutral-800 font-medium max-md:absolute max-md:right-[10%] max-md:top-[12%] w-48 md:w-fit max-md:py-4 max-md:bg-white max-md:rounded-lg max-md:shadow-lg max-md:border max-md:border-slate-100`}
        >
          <li>
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tennis-gear" className="navLink">
              Tennis Gear
            </Link>
          </li>
          <li>
            <Link to="/tennis-journey" className="navLink">
              Tennis Journey
            </Link>
          </li>
          <li>
            <Link to="/miata" className="navLink">
              Miata
            </Link>
          </li>
          <li>
            <Link to="/travel" className="navLink">
              Travel
            </Link>
          </li>
          <li>
            <Link to="/life" className="navLink">
              Life
            </Link>
          </li>
          <li>
            <ArchiveDropdown />
          </li>
          <li>
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
