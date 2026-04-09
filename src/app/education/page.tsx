"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      institute:
        "Jyothishmathi Institute of Technology and Science, Karimnagar, Telangana",
      score: "CGPA: 7.9",
      year: "2019 – 2022",
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institute: "Govt Polytechnic College, Nizamabad, Telangana",
      score: "Percentage: 92%",
      year: "2016 – 2019",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Zilla Parishad Secondary School, Mancherial, Telangana",
      score: "CGPA: 8.8",
      year: "2015 – 2016",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Education
        </motion.h1>

        <div className="space-y-6">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {edu.institute}
              </p>

              <div className="flex justify-between items-center mt-3 text-sm">

                <span className="text-gray-600 dark:text-gray-400">
                  {edu.score}
                </span>

                <span className="text-gray-500 dark:text-gray-400">
                  {edu.year}
                </span>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}