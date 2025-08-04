// components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">About Image</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer with expertise in React.js and modern JavaScript frameworks. 
              I love creating beautiful, responsive, and user-friendly web applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-600">React.js</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-600">JavaScript/TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-600">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-600">HTML5/CSS3</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700">Your Degree</h5>
                    <p className="text-sm text-gray-500">University Name · 20XX-20XX</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700">Other Education</h5>
                    <p className="text-sm text-gray-500">Institution · 20XX-20XX</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}