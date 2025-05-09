export const RecentWork = () => {
    const projects = [
      { name: "Decodable.co", tag: "@conflicting", author: "Nikolai-Grossman", location: "Wichicago" },
      { name: "Gofirefly.io", tag: "@conflicting", author: "Nikolai-Grossman", location: "Wichicago" },
      { name: "Blinkops.com", tag: "@conflicting", author: "Nikolai-Grossman", location: "Wichicago" },
      { name: "Withkanvas.com", tag: "@conflicting", author: "Nikolai-Grossman", location: "Wichicago" },
    ]
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:items-baseline">
              <span className="font-medium sm:w-48 flex-shrink-0">{project.name}</span>
              <span className="text-gray-600 text-sm sm:ml-4">
                {project.tag} - {project.author} - {project.location}
              </span>
            </li>
          ))}
        </ul>
      </section>
    )
  }