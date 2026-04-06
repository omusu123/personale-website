"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Download, Brain, MessageSquare, 
  BarChart, ExternalLink, Activity, Users, ClipboardList 
} from "lucide-react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const phrases = ["Data Analyst", "Problem Solver", "Python Expert", "Statistical Thinker", "Machine Learner"];
  
  // Typing Effect
  useEffect(() => {
    let phraseIdx = 0, charIdx = 0, deleting = false, timeoutId: NodeJS.Timeout;

    const type = () => {
      const current = phrases[phraseIdx];
      if (deleting) {
        setTypedText(current.substring(0, charIdx--));
        if (charIdx < 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timeoutId = setTimeout(type, 400);
          return;
        }
        timeoutId = setTimeout(type, 40);
      } else {
        setTypedText(current.substring(0, charIdx++));
        if (charIdx > current.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
        timeoutId = setTimeout(type, 80);
      }
    };
    timeoutId = setTimeout(type, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  // Scroll Reveal & Skill Bar Animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Check for skill bars
            const bar = entry.target.querySelector(".skill-bar-fill") as HTMLElement;
            if (bar) {
              const width = bar.getAttribute("data-width");
              bar.style.width = width + "%";
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="floating-shape w-72 h-72 bg-indigo-600 -top-20 -left-20" style={{ animationDelay: "0s" }}></div>
        <div className="floating-shape w-96 h-96 bg-purple-600 -bottom-32 -right-32" style={{ animationDelay: "-7s" }}></div>
        <div className="floating-shape w-56 h-56 bg-blue-500 top-1/2 left-1/3" style={{ animationDelay: "-13s" }}></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8" style={{ transitionDelay: "0.1s" }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="reveal text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight" style={{ transitionDelay: "0.2s" }}>
            <span>Ernest</span><br />
            <span className="gradient-text">Charles</span>
          </h1>

          <p className="reveal text-xl sm:text-2xl text-gray-400 mb-4 font-light" style={{ transitionDelay: "0.3s" }}>
            <span>{typedText}</span><span className="typing-cursor"></span>
          </p>

          <p className="reveal text-gray-500 text-base max-w-lg mx-auto mb-10 leading-relaxed" style={{ transitionDelay: "0.4s" }}>
            Transforming raw data into compelling stories and actionable insights through analysis, visualization, and machine learning.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: "0.5s" }}>
            <Link href="#contact" className="group px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="px-8 py-3.5 rounded-full border border-gray-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-gray-300 hover:text-indigo-400 font-semibold transition-all">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative py-28 px-6">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="reveal text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">Get to know me</p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold gradient-text-blue" style={{ transitionDelay: "0.1s" }}>About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <p className="reveal-left text-lg text-gray-300 leading-relaxed" style={{ transitionDelay: "0.1s" }}>
                Highly motivated and skilled data analyst with expertise in data cleaning, analysis, and visualization.
                Proficient in transforming complex data into actionable insights using statistical methods and machine learning techniques.
              </p>
              <p className="reveal-left text-gray-400 leading-relaxed" style={{ transitionDelay: "0.2s" }}>
                I'm an active member of the <a href="https://dssmu-data-careers-hub.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30 underline-offset-4 transition-all">Data Science Society of Maseno University (DSSMU)</a>,
                where I collaborate with like-minded individuals to explore the latest trends in data science.
              </p>

              <div className="reveal-left space-y-5 pt-4" style={{ transitionDelay: "0.3s" }}>
                <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
                <div className="space-y-4">
                  {[
                    { name: "R (Data Cleaning & Analysis)", p: 85 },
                    { name: "Python (NumPy, Pandas)", p: 80 },
                    { name: "SQL & Data Visualization", p: 75 },
                    { name: "Machine Learning", p: 70 },
                    { name: "SPSS", p: 90 },
                  ].map((skill) => (
                    <div key={skill.name} className="reveal">
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-indigo-400 font-mono">{skill.p}%</span>
                      </div>
                      <div className="skill-bar-bg"><div className="skill-bar-fill" data-width={skill.p}></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {[
                { title: "Problem Solving", icon: <Brain />, text: "Analytical thinker who approaches challenges with data-driven methodologies and creative solutions.", color: "indigo" },
                { title: "Communication", icon: <MessageSquare />, text: "Skilled at translating complex data findings into clear, actionable narratives for diverse audiences.", color: "purple" },
                { title: "Statistical Analysis", icon: <BarChart />, text: "Deep understanding of statistical methods to extract meaningful patterns from large datasets.", color: "blue" },
              ].map((card, i) => (
                <div key={card.title} className="reveal-right glow-card p-6" style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${card.color}-500/20 flex items-center justify-center text-${card.color}-400`}>
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section id="portfolio" className="relative py-28 px-6">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 relative">
            <p className="reveal text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">My Work</p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold gradient-text-blue mb-6" style={{ transitionDelay: "0.1s" }}>Data Analysis Case Studies</h2>
            <Link href="/projects" className="reveal inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium pb-1 border-b border-indigo-500/30 hover:border-indigo-400 transition-all">
                View detailed case studies <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal glow-card p-6 flex flex-col h-full" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <Activity className="text-indigo-400" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">Assessing Diabetic Risks</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">A comprehensive data analysis report assessing various factors and risks associated with diabetes, including statistical evaluation and insights.</p>
              
              <div className="flex flex-col gap-3 mt-auto relative z-10">
                <Link href="/projects/diabetic-risks" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-indigo-600/20 hover:bg-indigo-600/40 px-4 py-2 rounded-lg transition-colors justify-center">
                  Read Case Study
                </Link>
                <a href="/Data_analysis/ASSESSING DIABETIC RISKS.docx" download className="inline-flex items-center justify-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Download size={16} /> Download Docx
                </a>
              </div>
            </div>

            <div className="reveal glow-card p-6 flex flex-col h-full" style={{ transitionDelay: "0.3s" }}>
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <Users className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">Student Performance</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">An in-depth analysis of student performance metrics, utilizing statistical machine learning techniques to identify patterns and predict outcomes.</p>
              <div className="flex flex-col gap-3 mt-auto relative z-10">
                 <Link href="/projects/student-performance" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-purple-600/20 hover:bg-purple-600/40 px-4 py-2 rounded-lg transition-colors justify-center">
                  Read Case Study
                </Link>
                <a href="/Data_analysis/TAS00048022_StudentPerformance_Report.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={16} /> View Original PDF
                </a>
              </div>
            </div>

            <div className="reveal glow-card p-6 flex flex-col h-full" style={{ transitionDelay: "0.4s" }}>
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <ClipboardList className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">Data Assignment</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Final assignment focusing on applied statistical methodologies, data cleaning, and interpretation of complex datasets for actionable insights.</p>
              <div className="flex flex-col gap-3 mt-auto relative z-10">
                <a href="/Data_analysis/TAS_00048_022_MIT414_Assignment_final (1).pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-blue-500/30 py-2 rounded-lg text-blue-400 hover:text-white hover:bg-blue-600 transition-colors">
                  <ExternalLink size={16} /> View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AWARDS SECTION ===== */}
      <section id="awards" className="relative py-28 px-6">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="reveal text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">Achievements</p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold gradient-text-blue" style={{ transitionDelay: "0.1s" }}>Certifications</h2>
          </div>

          <div className="relative pl-12 space-y-10">
            <div className="timeline-line"></div>
            {[
              { type: "Training", name: "Society of Applied Statistics Maseno", desc: "Completed hands-on training in applied statistical methods.", color: "indigo" },
              { type: "Certificate", name: "SPSS - Certificate of Competence", desc: "Demonstrated proficiency in Statistical Package for Social Sciences.", color: "purple" },
              { type: "Certificate", name: "Python Data Cleaning", desc: "Mastered data wrangling and cleaning techniques using Python, NumPy, Pandas.", color: "blue" },
            ].map((award, i) => (
              <div key={award.name} className="reveal relative" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <div className="timeline-dot"></div>
                <div className="glow-card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-${award.color}-500/20 text-${award.color}-400`}>{award.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{award.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative py-28 px-6">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <p className="reveal text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">Let's connect</p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold gradient-text-blue" style={{ transitionDelay: "0.1s" }}>Get in Touch</h2>
            <p className="reveal text-gray-400 mt-4 max-w-md mx-auto" style={{ transitionDelay: "0.2s" }}>Have a project in mind or want to collaborate? Send me a message and I'll get back to you.</p>
          </div>

          <form action="https://formspree.io/f/xrgnqgag" method="POST" className="reveal space-y-5" style={{ transitionDelay: "0.3s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all relative z-10" placeholder="Ernest Charles" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" id="email" name="_replyto" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all relative z-10" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all relative z-10 resize-none" placeholder="Let's talk about..."></textarea>
            </div>
            <button type="submit" className="relative z-10 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
