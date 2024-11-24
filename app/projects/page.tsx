'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CoverParticles } from "../components/cover-particles";
import Navbar from '../components/Navbar';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Iniciar Sesion',
      description: "Este es un componente básico de inicio de sesión que utiliza Angular Reactive Forms para manejar el formulario y un servicio de autenticación (AuthService) para realizar la validación del usuario.",
      image: '/project1.png',
    },
    {
      title: 'Editar perfil',
      description: "Es un componente básico de editar perfil que utiliza Angular Reactive Forms para manejar el formulario y un servicio de usuario (UserService) para obtener y actualizar la información del perfil del usuario.",
      image: '/project2.png',
    },
    {
      title: 'Estudio Ghibli',
      description: 'Es un componente de inicio de sesión en Angular para un contexto relacionado con el Estudio Ghibli, para acceder a contenido exclusivo de la plataforma.',
      image: '/project3.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <main className="relative min-h-screen p-4 px-6 md:px-20 bg-gradient-to-r from-color4 to-color2 dark:from-color11 dark:to-color1 font-[family-name:var(--font-sour-thin)]">
      <Navbar />
      <CoverParticles />
      <section className="relative mt-4 top-10 font-[family-name:var(--font-sour-medium)]">
        <article className="overflow-hidden border-transparent rounded-lg shadow-md">
          <header className="relative">
            <footer className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {projects.map((project, index) => (
                <label key={index} className="flex-shrink-0 w-full px-4 sm:px-8 md:px-16 lg:px-20">
                  <header className="p-4 bg-transparent rounded-t-lg text-center">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-gray-700 text-xl dark:text-white">{project.description}</p>
                  </header>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200} 
                    height={800}
                    className="object-cover w-full rounded-b-lg"
                  />
                </label>
              ))}
            </footer>
            <button
              onClick={prevSlide}
              className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full shadow-md top-1/2"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full shadow-md top-1/2"
            >
              &#10095;
            </button>
          </header>
        </article>
      </section>
    </main>
  );
}
