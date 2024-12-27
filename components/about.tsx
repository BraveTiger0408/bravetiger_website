"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-foreground/60">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both front-end and back-end development, I create seamless
              digital experiences that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/60">
              My journey in web development started 5 years ago, and since then, I've worked on various
              projects ranging from small business websites to large-scale enterprise applications.
              I'm constantly learning and staying up-to-date with the latest technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-accent rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm">TailwindCSS</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
              alt="Coding setup"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}