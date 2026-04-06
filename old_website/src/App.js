import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ernest Charles</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Ernest Charles</h1>
            <p className="text-2xl md:text-3xl mb-8">Full Stack Developer & Problem Solver</p>
            <a
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl">
                  Highly motivated and skilled data analyst with expertise in data cleaning, analysis, and visualization.
                  Proficient in transforming complex data into actionable insights using statistical methods and machine learning techniques.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Technical Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>R (Data Cleaning & Analysis)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Python (NumPy, Pandas)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>SQL & Data Visualization</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Machine Learning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Soft Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Data Analysis & Interpretation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Problem Solving</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Effective Communication</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        <span>Statistical Analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:order-first"
              >
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Trainings & Certifications</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary-300">Society of Applied Statistics Maseno</h4>
                      <p className="text-sm text-gray-300">Trainee</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-300">Statistical Packages for the Social Sciences (SPSS)</h4>
                      <p className="text-sm text-gray-300">Certificate of Competence</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-300">Python Data Cleaning</h4>
                      <p className="text-sm text-gray-300">Certificate of Achievement</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* Awards Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Awards & Recognition</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary-500/20 p-2 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Certificate of Competence</h3>
                      <p className="text-gray-300">SPSS (Statistical Package for the Social Sciences)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-500/20 p-2 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Certificate of Achievement</h3>
                      <p className="text-gray-300">Python Data Cleaning</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: project * 0.2 }}
                  className="bg-gray-800/50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="mb-4">A brief description of the project goes here. This is where you would describe what the project does and what technologies were used.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary-400 hover:text-primary-300">Live Demo</a>
                    <a href="#" className="text-primary-400 hover:text-primary-300">GitHub</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Ernest Charles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
