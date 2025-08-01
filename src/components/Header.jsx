import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mahmood Ali</h1>
        <nav className="space-x-8">
          <Link to="#home" className="hover:text-blue-400 transition">Home</Link>
          <Link to="#about" className="hover:text-blue-400 transition">About</Link>
          <Link to="#skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link to="#projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;