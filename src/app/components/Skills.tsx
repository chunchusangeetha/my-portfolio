export default function Skills() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Skills</h2>

      {/* Languages */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
          <div className="bg-gray-100 p-4 rounded shadow">HTML</div>
          <div className="bg-gray-100 p-4 rounded shadow">CSS</div>
          <div className="bg-gray-100 p-4 rounded shadow">JavaScript</div>
          <div className="bg-gray-100 p-4 rounded shadow">TypeScript</div>
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Libraries & Frameworks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
          <div className="bg-gray-100 p-4 rounded shadow">React.js</div>
          <div className="bg-gray-100 p-4 rounded shadow">Redux</div>
          <div className="bg-gray-100 p-4 rounded shadow">Next.js</div>
          <div className="bg-gray-100 p-4 rounded shadow">Tailwind CSS</div>
          <div className="bg-gray-100 p-4 rounded shadow">Bootstrap</div>
          <div className="bg-gray-100 p-4 rounded shadow">Node.js</div>
          <div className="bg-gray-100 p-4 rounded shadow">Express.js</div>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Tools & Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
          <div className="bg-gray-100 p-4 rounded shadow">MongoDB</div>
          <div className="bg-gray-100 p-4 rounded shadow">REST APIs</div>
          <div className="bg-gray-100 p-4 rounded shadow">Git & GitHub</div>
          <div className="bg-gray-100 p-4 rounded shadow">Postman</div>
          <div className="bg-gray-100 p-4 rounded shadow">Vercel</div>
          <div className="bg-gray-100 p-4 rounded shadow">Netlify</div>
        </div>
      </div>
    </div>
  );
}
