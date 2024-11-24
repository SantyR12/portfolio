'use client';

import { FaHtml5, FaCss3Alt, FaJs, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import Image from 'next/image';

export default function LogoGrid() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full md:w-[350px] md:h-[550px] md:rounded-full md:border-[3px] md:border-transparent">
      <figure>
        <Image
          src="/yo.png"
          alt="Profile"
          width={1000}
          height={200}
          className="rounded-full w-48 h-48 md:w-full md:h-full"
        />
      </figure>
      
      
      <section className="flex flex-wrap justify-center gap-4 mt-6 md:mt-0 md:absolute md:flex md:items-center md:justify-center md:w-full md:h-full">
        <i className="text-4xl text-orange-500 md:absolute md:top-0 md:transform md:-translate-y-4 md:translate-x-10 skill-icon">
          <FaHtml5 />
        </i>
        <i className="text-4xl text-blue-500 md:absolute md:right-0 md:transform md:translate-x-0 md:translate-y-20 skill-icon">
          <FaCss3Alt />
        </i>
        <i className="text-4xl text-yellow-500 md:absolute md:bottom-0 md:transform md:translate-x-20 skill-icon">
          <FaJs />
        </i>
        <i className="text-4xl text-red-600 md:absolute md:left-0 md:transform md:-translate-x-4 md:translate-y-7 skill-icon">
          <FaJava />
        </i>
        <i className="text-4xl text-purple-500 md:absolute md:top-1/2 md:transform md:translate-x-24 md:-translate-y-1/2 skill-icon">
          <RiTailwindCssFill />
        </i>
      </section>
    </section>
  );
}
