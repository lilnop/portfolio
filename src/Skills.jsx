import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', level: 90 },
    { id: 2, name: 'CSS', level: 90 },
    { id: 3, name: 'JavaScript', level: 80 },
    { id: 4, name: 'React', level: 60 },
    { id: 5, name: 'PHP', level: 60 },
    { id: 7, name: 'Git', level: 50 },
    { id: 8, name: 'Python', level: 50 },
  ];

  return (
    <section id="Skills" className="skills">
      <div className="skills-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Skills</h2>
          <p>These are the technologies I've worked with</p>

          <div className="skills-grid">
            {skills.map(({ id, name, level }) => (
              <motion.div
                key={id}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
              >
                <h3>{name}</h3>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;