"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { ageGroup: '20-30', riskScore: 12, glucose: 95 },
  { ageGroup: '31-40', riskScore: 28, glucose: 105 },
  { ageGroup: '41-50', riskScore: 45, glucose: 120 },
  { ageGroup: '51-60', riskScore: 68, glucose: 140 },
  { ageGroup: '61-70', riskScore: 85, glucose: 165 },
  { ageGroup: '71+', riskScore: 92, glucose: 155 },
];

export default function DiabeticRisksCaseStudy() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors relative z-10">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
        
        <div className="mb-4 text-indigo-400 font-mono text-sm tracking-widest uppercase">Healthcare Analytics</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Assessing Diabetic Risks</h1>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "Pandas", "Statistical Analysis", "Healthcare"].map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">The Problem</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Diabetes is a chronic condition affecting millions worldwide. Early detection of risk factors can significantly improve patient outcomes. 
            This project aimed to clean and analyze a complex healthcare dataset to identify the leading predictors of diabetic progression in patients over a 5-year period.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Methodology</h2>
          <ul className="space-y-3 mb-10 text-gray-400">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={18} /> Data Cleaning: Addressed missing values using KNN imputation and removed statistical outliers utilizing IQR methods.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={18} /> Exploratory Data Analysis: Conducted correlation matrices to identify relationships between BMI, age, and glucose levels.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={18} /> Statistical Testing: Performed T-tests to validate the significance of age demographics on insulin resistance.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-white">Interactive Findings: Age vs Risk Score</h2>
          <div className="h-80 w-full bg-white/5 border border-indigo-500/20 rounded-xl p-6 mb-12 relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="ageGroup" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} 
                  itemStyle={{ color: '#818cf8' }}
                />
                <Line type="monotone" dataKey="riskScore" stroke="#818cf8" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="glucose" stroke="#c084fc" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Conclusion</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            The analysis conclusively demonstrated a non-linear but highly correlated relationship between advanced age demographics and elevated risk scores, accelerated significantly when median glucose levels exceeded 120. These findings can help target preventative care towards high-risk demographics earlier.
          </p>

          <div className="mt-16 p-8 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center">
            <h3 className="text-white text-xl font-semibold mb-3">Want the full report?</h3>
            <p className="text-gray-400 mb-6">Download the comprehensive initial .docx document containing the raw statistical readouts.</p>
            <a href="/Data_analysis/ASSESSING DIABETIC RISKS.docx" download className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium relative z-10">
              <Download size={18} /> Download Full Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
