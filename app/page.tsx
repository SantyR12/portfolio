"use client";

import Navbar from "./components/Navbar";
import LogoGrid from "./components/LogoGrid";
import { CoverParticles } from "./components/cover-particles";

export default function Home() {
  const playAudio = () => {
    const audio = new Audio('/aboutme.mp3'); 
    audio.play();
  };
  return (
    <main className="relative bg-gradient-to-r from-color4 to-color2 dark:from-color11 dark:to-color1 font-[family-name:var(--font-sour-thin)]">
      <Navbar />
      <CoverParticles />

      <section className="flex flex-col items-center justify-center min-h-screen px-8 space-y-8 md:grid md:grid-cols-2 md:items-center md:px-20 md:space-y-0">
        <article className="order-2 md:order-1">
          <h1 className="mb-6 text-4xl font-bold text-center text-coral md:text-left md:text-6xl lg:text-9xl font-[family-name:var(--font-sour-medium)]">
            Santiago Ramos
          </h1>

          <button 
          onClick={playAudio} 
          className="block px-6 py-2 mx-auto mt-4 text-xl text-black transition rounded-lg md:mx-0 md:px-20 bg-dark-color11 hover:bg-color5">
            Audio
          </button>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-center text-coral md:text-left md:text-4xl">
              Contact
            </h2>
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
        </article>

        <article className="flex items-center justify-center order-1 md:order-2">
          <LogoGrid />
        </article>
      </section>
    </main>
  );
}
