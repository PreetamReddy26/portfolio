function Home() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Hi, I'm Preetam 👋</h1>
        <h2>Aspiring UI/UX Designer</h2>
        <p>
          I design and develop clean, user-friendly web experiences with a focus
          on simplicity and usability.
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
            href="https://www.linkedin.com/in/Preetam reddy/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate student with a strong interest in UI/UX design and 
          front-end development. I enjoy creating visually appealing and 
          user-friendly interfaces that provide a smooth user experience.
        </p>

        <p>
          My goal is to build modern web applications that are not only functional 
          but also intuitive and engaging. I am continuously learning new 
          technologies and improving my design thinking skills.
        </p>

        <p>
          I am particularly interested in combining creativity with technology to 
          solve real-world problems and enhance user interaction.
        </p>
      </div>

      {/* SKILLS */}
      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>C Programming</li>
          <li>UI/UX Design Basics</li>
        </ul>
      </div>

      {/* INTERESTS */}
      <div className="section">
        <h2>Research Interests</h2>
        <p>Artificial Intelligence, Data Science, Human-Computer Interaction</p>
      </div>

      {/* CONTACT */}
      <div className="section">
        <h2>Contact</h2>
        <ul>
          <li>Name: Preetam Reddy Methukupally</li>
          <li>Email: preetamreddy2601@gmail.com</li>
          <li>Phone: 9515987442</li>
          <li>College Email: SE23UCSE145@mahindrauniversity.edu.in</li>
        </ul>
      </div>

    </div>
  );
}

export default Home;