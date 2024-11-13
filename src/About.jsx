import { motion } from 'framer-motion';
import './About.css';
import me from "./assets/me.png";

const About = () => {
  return (
    <section id="About" className="about">
      <div className="about-content">
        <div className="about-text">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in web
              technologies. My journey in software development started with a curiosity
              about how things work on the internet, which led me to dive deep into
              various programming languages and frameworks.
            </p>
            <p>
              With experience in both front-end and back-end development, I enjoy
              creating responsive and user-friendly applications that solve real-world
              problems. I'm constantly learning and adapting to new technologies to
              stay current in this ever-evolving field.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
              <img className="placeholder-image" src={me} alt="me" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;