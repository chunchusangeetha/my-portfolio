"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      
      <div className="max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-8"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          <p>
            Hi, I&apos;m <span className="font-semibold">Ch Sangeetha</span>, a 
            <span className="font-semibold"> Frontend Developer with nearly 4 years of experience</span> 
            specializing in building scalable, high-performance, and user-centric web applications.
          </p>

          <p>
            I have strong expertise in 
            <span className="font-medium"> React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS</span>, 
            with a focus on creating clean UI architectures, reusable components, and responsive designs 
            that deliver seamless user experiences across devices.
          </p>

          <p>
            Over the years, I have developed and contributed to multiple projects including 
            dashboards, real-time applications, and enterprise-level platforms. 
            I enjoy solving complex UI challenges, improving performance, and ensuring 
            accessibility and scalability in modern web applications.
          </p>

          <p>
            I am also expanding my knowledge in full-stack development using Node.js and exploring 
            areas like system design, performance optimization, and scalable frontend architecture.
            I enjoy collaborating with teams and continuously learning to build better products.
          </p>
        </motion.div>



        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="https://github.com/chunchusangeetha"
            target="_blank"
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chunchu-sangeethaa-996355224/"
            target="_blank"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Download Resume
          </a>

        </div>

      </div>
    </div>
  );
}