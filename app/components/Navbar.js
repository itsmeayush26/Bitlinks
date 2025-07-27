import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-blue-600 flex justify-between px-3 items-center text-white">
      <div className="logo font-bold text-lg">
        <Link href="/">Bitlinks</Link>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shorten">Shortner</Link>
        </li>
        <li>
          {/* 👇 Scrolls to #contact section on the same page */}
          <Link href="/contact" className="cursor-pointer hover:underline">
            Contact Us
          </Link>
        </li>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-blue-400 rounded-lg shadow-lg px-4 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/itsmeayush26/Bitlinks" target="_blank">
            <button className="bg-blue-400  rounded-lg shadow-lg px-4 py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
  