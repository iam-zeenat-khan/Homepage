import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faPinterest, faTumblr, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark-purple text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Brand Section */}
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-bold">Mokerble</h3>
          <p>© 2023 Mokerble</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 sm:mb-0">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-light-pink">
            <li><a href="#" className="hover:text-muted-purple transition-colors duration-300">ORGANISATIONS</a></li>
            <li><a href="#" className="hover:text-muted-purple transition-colors duration-300">YOUR ACCOUNT</a></li>
            <li><a href="#" className="hover:text-muted-purple transition-colors duration-300">EXPLORE</a></li>
            <li><a href="#" className="hover:text-muted-purple transition-colors duration-300">FOLLOW THE MAKERBLE STORY</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#" className="text-light-pink hover:text-muted-purple transition-colors duration-300" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-light-pink hover:text-muted-purple transition-colors duration-300" aria-label="Pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="text-light-pink hover:text-muted-purple transition-colors duration-300" aria-label="Tumblr">
            <FontAwesomeIcon icon={faTumblr} />
          </a>
          <a href="#" className="text-light-pink hover:text-muted-purple transition-colors duration-300" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="text-light-pink hover:text-muted-purple transition-colors duration-300" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
