import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TodoList Application",
      description: "React,localstorage",
      demo: "https://todolist2-f58kc8of3-robert-nana-sarpong-s-projects.vercel.app",
      code: "https://github.com/lilnop/todolist2"
    },
    {
      id: 2,
      title: "Weather App",
      description: "React, OpenWeatherMap API, Lucide React Icons",
      demo: "https://react-weather-app-ten-rho.vercel.app/",
      code: "https://github.com/lilnop/react-weather-app"
    },
    {
      id: 3,
      title: "Movie Search App",
      description: "React, Movie Database API",
      demo: "https://lilnop.github.io/moviesearch/",
      code: "https://github.com/lilnop/moviesearch"
    },
    {
      id: 4,
      title: "Gym Website",
      description: "HTML/CSS",
      demo: "https://lilnop.github.io/gym-site/",
      code: "https://github.com/lilnop/gym-site"
    },
    {
      id: 5,
      title: "Green Website",
      description: "HTML/CSS",
      demo: "https://lilnop.github.io/green/",
      code: "https://github.com/lilnop/green"
    },
    {
      id: 6,
      title: "Login Form",
      description: "React, Redux, Express",
      demo: "https://github.com/lilnop/login-form-1/",
      code: "https://lilnop.github.io/login-form-1/"
    }
  ];

  return (
    <section id='Projects' className="projects" >
      <div className="projects-content" >
        <div className="projects-header" >
          <h2>Projects</h2>
          <p>Check out some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map(({ id, title, description, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="project-card"
            >
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button>Demo</button>
                  </a>
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;