"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-tr from-white to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-blue-900 mb-4"
      >
        Hey Im Sangeetha 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-6"
      >
        Im a passionate and curious individual who enjoys building meaningful digital experiences.
        I believe in continuous learning and always strive to grow both personally and professionally.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
      >
        <Image
          src="/developer.svg"
          alt="Sangeetha - Developer"
          width={320}
          height={320}
          className="rounded-lg shadow-lg"
        />
      </motion.div>


    </div>
  );
}
