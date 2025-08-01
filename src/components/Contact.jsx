const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Get In Touch</h2>
        <p className="mb-8">I'm always open to discussing new opportunities, collaborations, or freelance work.</p>
        <a
          href="mailto:mahmood@example.com"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact; 