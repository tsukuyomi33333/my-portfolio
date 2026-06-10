function Hero({ name, title }) {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p>{title}</p>
      <a href="#projects">
        <button>View Projects</button>
      </a>
    </section>
  );
}

export default Hero;