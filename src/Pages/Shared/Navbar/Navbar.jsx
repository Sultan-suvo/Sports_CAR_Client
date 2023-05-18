import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <img className='h-12 w-12 rounded-3xl' src={logo} alt="" />
            </div>
            <div className="ml-3">
              <span className="text-white font-bold text-lg">Supersonic Sports Cars</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaBars></FaBars>
            </button>
          </div>
          <div className={`hidden md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="ml-4 flex items-center">
              <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
              <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
              <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
              <Link to='blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
              <img
                className="h-8 w-8 ml-3 rounded-full"
                src="/path/to/user-profile-picture.png"
                alt="User Profile"
              />
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="ml-4 flex flex-col items-center">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Toys</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Toys</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add A Toy</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
            <img
              className="h-8 w-8 ml-3 rounded-full"
              src="/path/to/user-profile-picture.png"
              alt="User Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
