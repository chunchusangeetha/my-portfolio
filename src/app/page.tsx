"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-20">
        
        <div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I'm <span className="text-blue-600">Sangeetha</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl mt-3 text-gray-700 dark:text-gray-300"
          >
            Frontend Developer | React | Next.js
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            Frontend Developer with nearly <b>4 years of experience</b> building
            scalable and high-performance web applications using React,
            Next.js, TypeScript, and modern UI frameworks.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Resume
            </a>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/profile.png"
            alt="Sangeetha Developer"
            width={320}
            height={320}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>

      </section>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-6">

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-4xl font-bold text-blue-600">3+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Years Experience
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Projects Built
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Technologies
            </p>
          </div>



        </div>
      </section>


    </div>
  );
}