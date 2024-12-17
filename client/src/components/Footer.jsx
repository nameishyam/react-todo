const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 fixed bottom-0 left-0 w-screen z-10">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/nameishyam"
          className="text-gray-200 hover:text-blue-400 transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nameishyam/"
          className="text-gray-200 hover:text-blue-400 transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
