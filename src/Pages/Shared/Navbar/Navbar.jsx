import { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.error(error);
      });
  }
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
              <Link to='/allToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
              <Link to='blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
              {user ? (
                <div className='flex items-center'>
                  <Link to='/myToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
                  <Link to='/addToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
            

                  <div className="flex mt-2 items-center justify-center gap-6">
                    <img
                      title={user.displayName}
                      className="w-12 h-12 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <button
                      onClick={handleLogOut}
                      className="btn border-0 text-white bg-success px-2 font-bold rounded-md flex items-center gap-1"
                    >
                      Logout
                    </button>
                  </div>
                </div>

              ) : (

                <button className="btn border-0  bg-success mt-2 px-2 fw-bold rounded-md flex items-center gap-1">
                  <Link className='text-decoration-none text-white' to='/login'>Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="ml-4 flex flex-col items-center">
            <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='/allToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
            <Link to='blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
            {user ? (
              <div className='flex flex-col items-center'>
                <Link to='/myToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
                <Link to='/addToys' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
          

                <div className="flex mt-2 items-center justify-center gap-6">
                  <img
                    title={user.displayName}
                    className="w-12 h-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn border-0 text-white bg-success px-2 font-bold rounded-md flex items-center gap-1"
                  >
                    Logout
                  </button>
                </div>
              </div>

            ) : (

              <button className="btn border-0  bg-success mt-2 px-2  fw-bold rounded-md flex items-center gap-1">
                <Link className='text-decoration-none text-white' to='/login'>Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
