import Navbar from "./Navbar";


export default function BackgroundComponent() {
    return (
      
      <section className="relative w-full h-screen bg-color3">
        <header>
        <Navbar />
      
            
        </header>

        <span className="absolute top-0 left-0 w-1/3 h-full bg-color2 blur-[100px]"></span>
  
         <span className="absolute top-1/2 right-0 w-1/2 h-[50%] bg-color5 blur-[100px]"></span>
  
         <span className="absolute bottom-10 left-20 w-1/3 h-1/4 bg-color2 blur-[100px]"></span>
      </section>
    );
  }
  