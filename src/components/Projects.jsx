import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-900 transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;