import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';  // Asegúrate de que la ruta es correcta

const NavbarLink = ({ to, children }) => (
  <li>
    <Link to={ to } className="text-gray-500 font-medium hover:text-blue-600 hover:border-b-blue-600">
      { children }
    </Link>
  </li>
);

const NavbarButtonLink = ({ to, text, bgClass, onClick }) => (
  <Link to={ to } className={ `px-4 py-2 font-bold ${bgClass} rounded-md hover:bg-gray-100 border border-gray-300` } onClick={ onClick }>
    { text }
  </Link>
);

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          BrainRush
        </Link>
        <ul className="flex space-x-4">
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/plans">Plans</NavbarLink>
          <NavbarLink to="/contacts">Contacts</NavbarLink>
        </ul>
        <div className="flex items-center space-x-2">
          { !authState.isAuthenticated ? (
            <>
              <NavbarButtonLink to="/login" text="Log in" bgClass="bg-zinc-100 hover:bg-zinc-300" />
              <NavbarButtonLink to="/register" text="Sign up" bgClass="bg-zinc-500 text-white hover:bg-zinc-700" />
            </>
          ) : (
            <NavbarButtonLink to="/" text="Log out" bgClass="bg-red-500 text-white hover:bg-red-700" onClick={ logout } />
          ) }
          <GlobeIcon />
        </div>
      </div>
    </nav>
  );
};

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

export default Navbar;
