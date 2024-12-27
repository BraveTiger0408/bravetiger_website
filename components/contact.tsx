"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-foreground/60" />
              <a href="mailto:your.email@example.com" className="text-lg hover:text-primary">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-foreground/60" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary"
              >
                github.com/yourusername
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-foreground/60" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary"
              >
                linkedin.com/in/yourusername
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}