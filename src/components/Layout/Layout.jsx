import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // Ocultar Navbar y Footer en la página de confirmación de email
    if (location.pathname.startsWith('/confirm')) {
      setShowLayout(false);
    } else {
      setShowLayout(true);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {showLayout && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showLayout && <Footer />}
    </div>
  );
};

export default Layout;
