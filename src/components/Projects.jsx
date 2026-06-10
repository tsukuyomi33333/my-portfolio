function Projects() {
  const projects = [
    {
      title: "River Sweepstakes Clone",
      description: "Promotional platform built with PHP and MySQL",
    },
    {
      title: "Portfolio Website",
      description: "Modern React portfolio website",
    },
    {
      title: "Future AI Project",
      description: "AI automation project coming soon",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;