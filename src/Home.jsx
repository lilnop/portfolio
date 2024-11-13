import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <section id='Home' className="home">
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">Hi, my name is</p>
          <h1 className="name">Robert Nana Sarpong</h1>
          <h2 className="title">I'm a Full Stack Developer.</h2>
          <p className="description">
            A full-stack developer with a focus on front-end development. Also a Cyber-Security Enthusiast with several certifications.
          </p>

          <div className="cta-container">
            <Link to="projects" smooth duration={500}>
              <button className="cta-button">
                View Work
                <span className="arrow">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>

            <div className="social-links">
              <a
                href="https://github.com/lilnop"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/lilnop"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;