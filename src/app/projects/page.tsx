"use client";

import Link from "next/link";
import { ArrowLeft, Activity, Users, ClipboardList } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Assessing Diabetic Risks",
      icon: <Activity className="text-indigo-400" />,
      color: "indigo",
      desc: "A comprehensive data analysis report assessing various factors and risks associated with diabetes.",
      slug: "diabetic-risks"
    },
    {
      title: "Student Performance",
      icon: <Users className="text-purple-400" />,
      color: "purple",
      desc: "An in-depth analysis of student performance metrics utilizing machine learning techniques.",
      slug: "student-performance"
    },
    {
      title: "Data Assignment",
      icon: <ClipboardList className="text-blue-400" />,
      color: "blue",
      desc: "Final assignment focusing on applied statistical methodologies and data cleaning.",
      slug: "#"
    }
  ];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold gradient-text-blue mb-6">Case Studies</h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-16">
          Explore my methodology, tooling, and final visualizations used to transform complex datasets into clear, actionable insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="glow-card p-6 flex flex-col h-full opacity-100 transform-none">
              <div className={`w-12 h-12 rounded-lg bg-${p.color}-500/20 flex items-center justify-center mb-4`}>
                {p.icon}
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{p.desc}</p>
              {p.slug !== "#" ? (
                <Link href={`/projects/${p.slug}`} className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-${p.color}-600/20 hover:bg-${p.color}-600/40 px-4 py-2 rounded-lg transition-colors mt-auto relative z-10`}>
                  Read Case Study
                </Link>
              ) : (
                <a href="/Data_analysis/TAS_00048_022_MIT414_Assignment_final (1).pdf" target="_blank" className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-blue-500/30 py-2 rounded-lg text-blue-400 hover:text-white hover:bg-blue-600 transition-colors mt-auto relative z-10">
                  View Raw PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
