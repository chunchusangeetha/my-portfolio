"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setDark(false);
      } else {
        document.documentElement.classList.add("dark");
        setDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    setOpen(false);
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  if (!mounted) return <div className="p-4" />;

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg md:text-xl font-bold text-blue-600">
          Sangeetha Chunchu
        </h1>

        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/education">Education</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/skills" onClick={() => setOpen(false)}>
            Skills
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/education" onClick={() => setOpen(false)}>
            Education
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-50 text-center"
          >
            Resume
          </a>

          <button onClick={toggleTheme} className="flex items-center gap-2">
            {dark ? <Sun /> : <Moon />}
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}
