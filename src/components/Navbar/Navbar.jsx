import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css"; // Add CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  
  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close Menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scrolling for Navigation Links
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          MySite
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link" onClick={(e) => handleScrollToSection(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={(e) => handleScrollToSection(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={(e) => handleScrollToSection(e, "#services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => handleScrollToSection(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef} className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="#home" className="mobile-nav-link" onClick={(e) => { handleScrollToSection(e, "#home"); closeMobileMenu(); }}>
            Home
          </a>
          <a href="#about" className="mobile-nav-link" onClick={(e) => { handleScrollToSection(e, "#about"); closeMobileMenu(); }}>
            About
          </a>
          <a href="#services" className="mobile-nav-link" onClick={(e) => { handleScrollToSection(e, "#services"); closeMobileMenu(); }}>
            Services
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => { handleScrollToSection(e, "#contact"); closeMobileMenu(); }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
