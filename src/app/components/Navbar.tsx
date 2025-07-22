import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/education">Education</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}