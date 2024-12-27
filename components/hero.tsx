"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-foreground/60">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl text-lg text-foreground/60">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}