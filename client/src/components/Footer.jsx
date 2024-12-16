import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/nameishyam"
          className="text-gray-200 hover:text-blue-400 transition-all duration-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nameishyam/"
          className="text-gray-200 hover:text-blue-400 transition-all duration-200"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
