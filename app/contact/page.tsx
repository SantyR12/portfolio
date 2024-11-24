"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CoverParticles } from "../components/cover-particles";
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="relative p-4 bg-gradient-to-r from-color4 to-color2 dark:from-color11 dark:to-color1 background-effects font-[family-name:var(--font-sour-medium)]">
      <CoverParticles />
      
      <header className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={40} 
            height={40} 
            className="md:h-12 lg:h-14" 
          />
        </Link>
      </header>

      <h1 className="mb-4 text-5xl font-bold text-center">Contact</h1>

      <section className="flex items-center justify-center min-h-screen bg-gradient-to-0 to-white font-[family-name:var(--font-sour-thin)]">
        <Navbar />
        <article className="flex flex-col items-center w-full max-w-md gap-8 px-4">
          {!formSubmitted ? (
            <section className="relative p-8 bg-white shadow-lg rounded-2xl w-full -top-20 font-[family-name:var(--font-sour-medium)]">
              <h2 className="mb-4 text-xl font-bold text-center dark:text-gray-800">Contact</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none"
                />
                
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none"
                />
                
                <label htmlFor="company" className="sr-only">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none"
                />
                
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none"
                  rows={4}
                ></textarea>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full py-2 text-white bg-blue-500 rounded-lg"
                >
                  Send <span className="ml-2">➡️</span>
                </button>
              </form>
            </section>
          ) : (
            <section className="relative flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-2xl w-full -top-20">
              <h2 className="mb-4 text-xl font-bold text-center dark:text-gray-600">Thank you so much</h2>
              <p className="mb-6 text-center text-gray-600">I have received it and will review everything carefully.</p>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg">
                Next <span>📧</span>
              </button>
              
              <section className="flex justify-center gap-8 mt-10 text-3xl md:justify-start">
                <a
                  href="mailto:email@example.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  📧
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  🐱
                </a>
              </section>
            </section>
          )}
        </article>
      </section>
    </main>
  );
};

export default Contact;
