// components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Hammad Qaiser</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I build exceptional digital experiences with React and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Me
              </a>
              <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 overflow-hidden border-4 border-blue-200">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}