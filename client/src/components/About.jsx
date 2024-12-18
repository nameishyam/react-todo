const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-5xl font-extrabold text-white text-center leading-snug mb-6">
          About
        </h1>
        <p className="text-gray-200 text-lg mb-2 tracking-wider">
          Hello Guys! I&apos;m Shyam Gowtham, I made this application with the
          help of React and TailwindCSS. This is a simple task manager
          application where you can add, delete, and update your tasks. I hope
          you like it.
        </p>
      </div>
    </div>
  );
};

export default About;
