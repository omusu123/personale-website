"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Case Studies", href: "/projects" },
    { label: "GitHub", href: "/#github" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight gradient-text">
            EC.
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="/assets/downloads/CURRICULUM-VITAE.docx"
              download
              className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:shadow-lg flex items-center gap-2"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center md:hidden gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 relative z-50 text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 glass flex flex-col items-center justify-center space-y-8 md:hidden ${
          isOpen ? "open" : ""
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="text-2xl font-semibold text-white mobile-nav-link"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/assets/downloads/CURRICULUM-VITAE.docx"
          download
          className="px-6 py-3 text-lg font-medium rounded-full bg-indigo-600 text-white"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
