// components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online store built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400?text=E-commerce",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400?text=Task+App",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my work",
      tags: ["React", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400?text=Portfolio",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}