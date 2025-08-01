import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400 border-b inline-block">About Me</h2>
        <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
        <p className="mt-4">I'm passionate about clean code, performance, and user experience. When I'm not coding, I enjoy mentoring and contributing to open-source.</p>
      </div>
    </section>
  );
};

export default About;