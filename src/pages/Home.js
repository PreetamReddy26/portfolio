function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <div className="hero fade-in">
        <h1>Hi, I'm Preetam 👋</h1>
        <h2>Aspiring UI/UX Designer</h2>

        <p>
          I design and develop clean, user-friendly web experiences 
          with a focus on simplicity and usability.
        </p>

        <div className="buttons">
          <a 
            href="https://github.com/PreetamReddy26" 
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/Preetamreddy/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="section fade-in">
        <h2>About Me</h2>
        <p>
          I am a passionate student with a strong interest in UI/UX design and 
          front-end development. I enjoy creating visually appealing and 
          user-friendly interfaces.
        </p>

        <p>
          My goal is to build modern applications that are both functional and 
          intuitive. I continuously explore new technologies and improve my 
          design thinking skills.
        </p>
      </div>

      {/* SKILLS */}
      <div className="section fade-in">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>C Programming</li>
        </ul>
      </div>

      {/* CONTACT */}
      <div className="section fade-in">
        <h2>Contact</h2>
        <ul>
          <li>Email: preetamreddy2601@gmail.com</li>
          <li>Phone: 9515987442</li>
        </ul>
      </div>

    </div>
  );
}

export default Home;