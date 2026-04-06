import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors relative z-10">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold gradient-text-blue mb-6">Data Blog</h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-16">
          Thoughts, tutorials, and insights from my journey in data science and analytics.
        </p>

        <div className="grid gap-8">
          <article className="glow-card p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Clock size={14} /> Today</span>
              <span className="px-2 py-0.5 rounded pl-1 bg-indigo-500/10 text-indigo-400 text-xs">Analytics</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors cursor-pointer relative z-10">
              Welcome to my new Data Analytics Portfolio
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm extremely excited to launch Version 2 of my personal portfolio. Moving forward, I will be using this space to document my case studies, write about data trends in East Africa, and share snippets of code that have helped me analyze datasets more efficiently.
            </p>
            <button className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors relative z-10">Read more →</button>
          </article>

          <article className="glow-card p-8 opacity-60">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Clock size={14} /> Coming Soon</span>
              <span className="px-2 py-0.5 rounded pl-1 bg-purple-500/10 text-purple-400 text-xs">Tutorial</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-300 mb-3">
              Cleaning Missing Values in Healthcare Datasets with Pandas
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Handling missing data is the first challenge any analyst faces. In this upcoming post, I'll document my standard protocol for identifying, analyzing, and successfully imputing missing values without biasing the statistical distribution.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
