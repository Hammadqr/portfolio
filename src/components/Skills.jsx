import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-400">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            {skills.technical.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <ul className="space-y-2">
              {skills.professional.map((skill, index) => (
                <li key={index} className="bg-gray-800 px-4 py-2 rounded-lg inline-block mr-2 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;  