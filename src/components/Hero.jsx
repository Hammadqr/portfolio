// src/components/Hero.jsx
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-black to-blue-900 text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto"> {/* Remove or adjust this */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-400">{personalInfo.name}</span></h1>
        <p className="text-xl md:text-2xl mb-6">{personalInfo.title}</p>
        <p className="mb-8 text-gray-300">{personalInfo.bio}</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">View My Work</a>
          <a href="#contact" className="border border-blue-400 hover:bg-blue-900 px-6 py-3 rounded-lg transition">Contact Me</a>
        </div>
        <img
          src="/profile.jpg"
          alt="Mahmood Ali"
          className="w-40 h-40 rounded-full mx-auto mt-10 border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;