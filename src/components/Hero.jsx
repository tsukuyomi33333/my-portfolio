function Hero({ name, title }) {
  return (
    <section className="hero">
      <h1>Hi, I'm {name}</h1>

      <h2>{title}</h2>

      <p>
        Building web applications, learning MERN stack,
        and creating real-world projects.
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a
          href="https://github.com/tsukuyomi33333"
          target="_blank"
          rel="noreferrer"
        >
          <button>GitHub</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;