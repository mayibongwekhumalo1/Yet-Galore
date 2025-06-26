import React from "react";
import { CiLogin } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const NavbarLinks = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "shop",
      path: "/shop",
    },
    {
      id: 2,
      name: "Collections",
      path: "/collections",
      dropdown: [
        { name: "Summer collection", path: "/her" },
        { name: "New collection", path: "/new-collection" },
        { name: "Winter collection", path: "/arrivals" },
      ],
    },
    {
      id: 3,
      name: "Him",
      path: "/him",
    },
    {
      id: 4,
      name: "Her",
      path: "/her",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const hundredVh = window.innerHeight * 0.1; 
      setScrolled(window.scrollY > hundredVh);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const LoginModal = () => {

   
  
    return (
      <div className=" inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 absolute">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Login</h2  >
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 h-16' : 'h-20'
    }`}>
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold flex align-middle gap-1.5">
          <Link to="/" className="hover:text-gray-400 flex items-center w-10 h-10">
            <img
              src="/Logo.svg"
              alt=""
              className="w-fit h-fit rounded-full hover:shadow-blue-200 shadow-2xl text-white hover:shadow-lg transition-all duration-300 cursor-pointer "
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between gap-x-4 items-center">
          <ul className="space-x-4 flex items-center">
            {NavbarLinks.map((link) => (
              <li key={link.id} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      className="text-white  hover:text-blue-400 capitalize font-extrabold cursor-pointer "
                      onClick={() => toggleDropdown(link.id)}
                    >
                      {link.name}
                    </button>
                    {activeDropdown === link.id && (
                      <div className="absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[200px] z-10">
                        <ul className="py-1">
                          {link.dropdown.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.path}
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 capitalize"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="text-white font-bold hover:text-blue-400 capitalize"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-4">
            <button onClick={{LoginModal}} className="text-white font-bold hover:text-blue-400 flex items-center">

              
                Login
                <CiLogin className="text-white text-2xl mr-1 hover:text-blue-400" />
              
            </button>

            <button>
              <Link to="/cart">
                <RiShoppingBag3Fill className="text-white text-2xl hover:text-blue-400" />
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl hover:text-blue-400"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <RxCross1 /> : <CiMenuFries />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg z-50">
            <ul className="py-4 px-4">
              {NavbarLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <div className="flex flex-col">
                    {link.dropdown ? (
                      <>
                        <button
                          className="text-white font-bold hover:text-blue-400 capitalize py-2 flex justify-between items-center w-full"
                          onClick={() => toggleDropdown(link.id)}
                        >
                          {link.name}
                          <span>{activeDropdown === link.id ? '−' : '+'}</span>
                        </button>
                        {activeDropdown === link.id && (
                          <ul className="ml-4 mt-2 bg-gray-800 rounded-lg p-2">
                            {link.dropdown.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2 text-gray-200 hover:text-blue-400 capitalize"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white font-bold hover:text-blue-400 capitalize py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-around items-center py-4 px-4 border-t border-gray-700">
              <button>
                <Link
                  to="/login"
                  className="text-white font-bold hover:text-blue-400 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                  <CiLogin className="text-white text-2xl mr-1 hover:text-blue-400" />
                </Link>
              </button>

              <button>
                <Link 
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <RiShoppingBag3Fill className="text-white text-2xl hover:text-blue-400" />
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;