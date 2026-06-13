function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Node.js",
    "MongoDB"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul>
        {skills.map((skill,index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;