import Image from 'next/image';
import { CoverParticles } from "../components/cover-particles";
import Navbar from '../components/Navbar';

export default function AboutMe() {
  return (
    <main className="relative p-4 bg-gradient-to-r from-color4 to-color2 dark:from-color11 dark:to-color1 font-[family-name:var(--font-sour-thin)]">
      <Navbar />
      <CoverParticles />

      <section className="grid w-full h-auto grid-cols-1 gap-8 p-8 mt-4 md:grid-cols-3 font-[family-name:var(--font-sour-medium)]">
        
        <article className="overflow-hidden shadow-md rounded-2xl">
          <header className="p-4 mt-4 dark:bg-color11 rounded-t-2xl">
            <h2 className="text-xl text-center">Video Games</h2>
          </header>
          <figure>
            <Image
              src="/black.jpg"
              alt="Video Games"
              width={400}
              height={200}
              className="object-contain w-full h-auto"
            />
          </figure>
        </article>

        <article className="overflow-hidden shadow-md rounded-2xl">
          <header className="p-4 mt-4 dark:bg-color11 rounded-t-2xl">
            <h2 className="text-xl text-center">Gym</h2>
          </header>
          <figure>
            <Image
              src="/gym.jpeg"
              alt="Gym"
              width={400}
              height={200}
              className="object-contain w-full h-auto"
            />
          </figure>
        </article>


        <article className="overflow-hidden shadow-md rounded-2xl">
          <header className="p-4 mt-4 dark:bg-color11 rounded-t-2xl">
            <h2 className="text-xl text-center">Dog</h2>
          </header>
          <figure>
            <Image
              src="/mascota.jpg"
              alt="Dog"
              width={400}
              height={200}
              className="object-contain w-full h-auto"
            />
          </figure>
        </article>
        
      </section>

      <footer className="flex justify-center gap-8 mt-10 text-3xl md:justify-start">
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
      </footer>
    </main>
  );
}
