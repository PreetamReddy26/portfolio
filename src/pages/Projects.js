function Projects() {
  return (
    <div className="container fade-in">

      <h1 className="project-title">My Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h3>Neural Network (NumPy)</h3>
          <p>
            Built a neural network from scratch using NumPy to understand
            deep learning fundamentals.
          </p>
          <a 
            href="https://github.com/PreetamReddy26/numpy-neural-network" 
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 View Project
          </a>
        </div>

        <div className="project-card">
          <h3>Hello World Project</h3>
          <p>
            A simple project to understand GitHub workflow and version control.
          </p>
          <a 
            href="https://github.com/PreetamReddy26/hello-world" 
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 View Project
          </a>
        </div>

      </div>

    </div>
  );
}

export default Projects;