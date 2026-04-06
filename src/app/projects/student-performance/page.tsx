"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockPerformanceData = [
  { group: 'Group A', avgScore: 65, attendance: 75 },
  { group: 'Group B', avgScore: 72, attendance: 82 },
  { group: 'Group C', avgScore: 78, attendance: 88 },
  { group: 'Group D', avgScore: 85, attendance: 92 },
  { group: 'Group E', avgScore: 94, attendance: 97 },
];

export default function StudentPerformanceCaseStudy() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors relative z-10">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
        
        <div className="mb-4 text-purple-400 font-mono text-sm tracking-widest uppercase">Education Analytics</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Student Performance</h1>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {["Machine Learning", "R Script", "Predictive Modeling", "Education"].map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">The Problem</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Educational institutions collect vast amounts of data, yet often struggle to leverage it proactively. The goal of this analysis was to use historical student performance, attendance metrics, and socioeconomic factors to predict final grades and identify at-risk students before final examinations.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Interactive Findings: Attendance vs Average Score</h2>
          <div className="h-80 w-full bg-white/5 border border-purple-500/20 rounded-xl p-6 mb-12 relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="group" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} 
                  itemStyle={{ color: '#c084fc' }}
                  cursor={{fill: '#4c1d95', opacity: 0.2}}
                />
                <Bar dataKey="avgScore" fill="#c084fc" name="Average Score" radius={[4, 4, 0, 0]} />
                <Bar dataKey="attendance" fill="#818cf8" name="Attendance %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center">
            <h3 className="text-white text-xl font-semibold mb-3">View the Original PDF</h3>
            <p className="text-gray-400 mb-6">Review the detailed mathematics and statistical methodology recorded in the final submission.</p>
            <a href="/Data_analysis/TAS00048022_StudentPerformance_Report.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-medium relative z-10">
              <ExternalLink size={18} /> Open PDF Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
