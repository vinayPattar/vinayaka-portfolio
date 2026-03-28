import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Freelance } from './components/Freelance';
import { Projects } from './components/Projects';
import { Blogs } from './components/Blogs';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-neutral-200 min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
      <Background />

      <Navbar />

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />

        {/* Sections with IDs for scrolling */}
        <div id="experience">
          <Experience />
        </div>



        <div id="projects">
          <Projects />
        </div>

        <div id="blog">
          <Blogs />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

//  <div id="freelance">
//           <Freelance />
//         </div>