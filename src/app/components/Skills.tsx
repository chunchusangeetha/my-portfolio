"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const languages = ["HTML", "CSS", "JavaScript", "TypeScript"];

  const frameworks = [
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
  ];

  const tools = [
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "Postman",
    "Vercel",
    "Netlify",
    "VS Code"
  ];

  const SkillCard = ({ skill }: { skill: string }) => (
    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-lg p-4 text-center text-gray-800 dark:text-gray-200 font-medium hover:scale-105">
      {skill}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-10"
        >
          Skills & Technologies
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Languages
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {languages.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Libraries & Frameworks
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {frameworks.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Tools & Platforms
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {tools.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}