import Image from 'next/image';
import { CoverParticles } from "../components/cover-particles";
import Navbar from '../components/Navbar';

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen p-4 bg-gradient-to-r from-color4 to-color2 dark:from-color11 dark:to-color1 font-[family-name:var(--font-sour-thin)]">
      < Navbar/>
      <CoverParticles />
      

      <section className="flex flex-col items-center h-auto p-8 bg-gradient-to-  to-white font-[family-name:var(--font-sour-medium)]">
        <h2 className="mb-8 font-bold text-5xl sm:text-5xl md:text-7xl ">
          Expe<span className="dark:text-gray-900">rience </span>
        </h2>
        <section className="flex flex-col sm:flex-row justify-between gap-8 w-full max-w-[90%] mt-10">
          
          <article className="w-full sm:w-1/2 text-center -mt-14">
            <Image 
              src="/ucc-logo.png" 
              alt="UCC Logo" 
              width={200} 
              height={200} 
              className="mx-auto mb-4 h-60 w-full sm:w-auto sm:order-1"
            />
            <h3 className="mt-10 text-xl font-bold dark:text-white sm:order-2">UCC</h3>
            <p className="max-w-lg mx-auto text-lg sm:text-xl tracking-tighter text-justify text-gray-900 dark:text-white">
              Soy Santiago Ramos, estudiante de 5° semestre de ingeniería de software en la
              UCC. Durante mis estudios, he desarrollado habilidades en programación, administración de sistemas y desarrollo de aplicaciones.
            </p>
          </article>

          <article className="w-full sm:w-1/2 -my-14 flex flex-col items-center sm:items-start">
            <h3 className="mt-16 text-xl font-bold sm:text-left text-center sm:ml-16 dark:text-gray-900">
              Revisión de Equipos Informáticos
            </h3>
            <p className="max-w-lg mx-auto text-lg sm:text-xl tracking-tighter text-justify text-gray-600 dark:text-gray-900">
              Durante los últimos meses, he trabajado analizando y reparando equipos
              informáticos, configurando redes y sistemas operativos, y asegurando el
              correcto funcionamiento de estos dispositivos.
            </p>
            <Image 
              src="/laptop-image.jpeg"
              alt="Laptop"
              width={200}
              height={200}
              className="mx-auto mt-20 mb-4 h-60 w-full sm:w-auto sm:order-3"
            />
          </article>
        </section>
      </section>
    </main>
  );
}
