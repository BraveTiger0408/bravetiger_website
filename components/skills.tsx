"use client";

import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "HTML5/CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Jest", "Cypress", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I work with a variety of technologies and tools to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-accent rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}