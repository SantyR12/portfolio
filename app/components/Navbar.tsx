"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="md:h-12 lg:h-14"
          />
        </Link>

        <button
          className="text-black md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="font-bold text-black hover:text-gray-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className="font-bold text-black hover:text-gray-800"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="font-bold text-black hover:text-gray-800"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="font-bold text-black hover:text-gray-800"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-bold text-black hover:text-gray-800"
              >
                Contact
              </Link>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </section>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white bg-opacity-80 absolute w-full top-16 left-0 p-4 shadow-lg`}
      >
        <ul className="flex flex-col space-y-4 font-bold text-black">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
}
