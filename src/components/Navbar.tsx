import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="navbar" ref={navRef}>
        <div className="navbar-container">
          <div className="nav-brand">
            <a href="/">MyApp</a>
          </div>
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <a href="/">Home</a>
            <a href="/product">Product</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="toggle" onClick={toggle}>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
};
