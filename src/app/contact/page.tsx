"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            Contact Me
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or collaborations. Feel free to reach out if you&apos;d
            like to work together.
          </p>

          <div className="space-y-4">

            <p className="text-gray-700 dark:text-gray-300">
               Email: 
              <span className="ml-2 font-medium">
                geethachunchu2841@gmail.com
              </span>
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/chunchu-sangeethaa-996355224/"
                target="_blank"
                className="ml-2 text-blue-600 hover:underline"
              >
               www.linkedin.com/in/chunchu-sangeethaa-996355224/
              </a>
            </p>

            <p className="text-gray-700 dark:text-gray-300">
               GitHub:
              <a
                href="https://github.com/chunchusangeetha"
                target="_blank"
                className="ml-2 text-blue-600 hover:underline"
              >
                github.com/chunchusangeetha
              </a>
            </p>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8"
        >

          <ContactForm />

        </motion.div>

      </div>

    </div>
  );
}