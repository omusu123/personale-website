const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. ADD CSS FOR TIMELINE AND TOOLTIPS
const cssToInject = `
        /* Tooltip Styles */
        .skill-tooltip {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            bottom: 110%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            z-index: 50;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(99, 102, 241, 0.2);
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.1);
            width: max-content;
            max-width: 280px;
            text-align: center;
        }
        .group:hover .skill-tooltip {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        .skill-tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 6px;
            border-style: solid;
            border-color: rgba(99, 102, 241, 0.2) transparent transparent transparent;
        }

        /* Timeline Styles */
        .timeline-container {
            position: relative;
            padding-left: 2rem;
        }
        .timeline-line {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(168,85,247,0.5));
            border-radius: 9999px;
            box-shadow: 0 0 15px rgba(99,102,241,0.4);
        }
        .timeline-item {
            position: relative;
            padding-bottom: 3rem;
        }
        .timeline-item:last-child {
            padding-bottom: 0;
        }
        .timeline-dot {
            position: absolute;
            left: -2.35rem;
            top: 0.25rem;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #6366f1;
            border: 3px solid #0f172a;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.4), 0 0 10px rgba(99,102,241,0.8);
            z-index: 10;
        }
        .timeline-content {
            transition: all 0.3s ease;
        }
        .timeline-item:hover .timeline-dot {
            background: #a855f7;
            box-shadow: 0 0 0 3px rgba(168,85,247,0.4), 0 0 15px rgba(168,85,247,0.8);
            transform: scale(1.2);
            transition: all 0.3s ease;
        }
        .timeline-item:hover .timeline-content {
            transform: translateX(5px);
        }
`;

if (!content.includes('.skill-tooltip')) {
    content = content.replace('</style>', cssToInject + '\n    </style>');
}

// 2. INJECT TOOLTIPS INTO SKILLS
// Mapping old skill containers to new ones with tooltips
const skillsReplacements = [
    {
        search: `                                <div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">R (Data Cleaning & Analysis)</span>
                                        <span class="text-indigo-400 font-mono">85%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="85"></div></div>
                                </div>`,
        replace: `                                <div class="group relative cursor-pointer">
                                    <div class="skill-tooltip">
                                        <p class="text-sm text-gray-200">Expert in Tidyverse, ggplot2, and data wrangling for deep statistical analysis.</p>
                                    </div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">R (Data Cleaning & Analysis)</span>
                                        <span class="text-indigo-400 font-mono">85%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="85"></div></div>
                                </div>`
    },
    {
        search: `                                <div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">Python (NumPy, Pandas)</span>
                                        <span class="text-indigo-400 font-mono">80%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="80"></div></div>
                                </div>`,
        replace: `                                <div class="group relative cursor-pointer">
                                    <div class="skill-tooltip">
                                        <p class="text-sm text-gray-200">Used for efficient data manipulation, EDA, and building machine learning pipelines.</p>
                                    </div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">Python (NumPy, Pandas)</span>
                                        <span class="text-indigo-400 font-mono">80%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="80"></div></div>
                                </div>`
    },
    {
        search: `                                <div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">SQL & Data Visualization</span>
                                        <span class="text-indigo-400 font-mono">75%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="75"></div></div>
                                </div>`,
        replace: `                                <div class="group relative cursor-pointer">
                                    <div class="skill-tooltip">
                                        <p class="text-sm text-gray-200">Complex queries, database management, and crafting engaging visual dashboards.</p>
                                    </div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">SQL & Data Visualization</span>
                                        <span class="text-indigo-400 font-mono">75%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="75"></div></div>
                                </div>`
    },
    {
        search: `                                <div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">Machine Learning</span>
                                        <span class="text-indigo-400 font-mono">70%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="70"></div></div>
                                </div>`,
        replace: `                                <div class="group relative cursor-pointer">
                                    <div class="skill-tooltip">
                                        <p class="text-sm text-gray-200">Creating predictive models, regression, classification, and evaluating algorithm performance.</p>
                                    </div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">Machine Learning</span>
                                        <span class="text-indigo-400 font-mono">70%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="70"></div></div>
                                </div>`
    },
    {
        search: `                                <div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">SPSS</span>
                                        <span class="text-indigo-400 font-mono">90%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="90"></div></div>
                                </div>`,
        replace: `                                <div class="group relative cursor-pointer">
                                    <div class="skill-tooltip">
                                        <p class="text-sm text-gray-200">Highly proficient in classical statistical testing, ANOVA, and social science data analysis.</p>
                                    </div>
                                    <div class="flex justify-between text-sm mb-1.5">
                                        <span class="text-gray-300">SPSS</span>
                                        <span class="text-indigo-400 font-mono">90%</span>
                                    </div>
                                    <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="90"></div></div>
                                </div>`
    }
];

skillsReplacements.forEach(rep => {
    content = content.replace(rep.search, rep.replace);
});

// 3. INJECT TIMELINE AFTER THE GRID
const timelineHTML = `
                <!-- ===== EXPERIENCE TIMELINE ===== -->
                <div class="reveal mt-28 max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-white tracking-tight">Experience & Education</h2>
                        <p class="text-gray-400 mt-2 text-sm uppercase tracking-wider font-mono">My Journey</p>
                    </div>

                    <div class="timeline-container ml-4 md:ml-0 md:pl-8">
                        <div class="timeline-line"></div>
                        
                        <!-- Timeline Item 1 -->
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content bg-white/5 border border-white/10 rounded-2xl p-6 glow-card">
                                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                                    <h3 class="text-xl font-bold text-white">Data Analyst Member</h3>
                                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">2021 - Present</span>
                                </div>
                                <h4 class="text-indigo-400 font-medium mb-3">Data Science Society of Maseno University (DSSMU)</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Actively contributing to analytical projects, participating in datathons, and collaborating with peers on machine learning research and visualization tasks.
                                </p>
                            </div>
                        </div>

                        <!-- Timeline Item 2 -->
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content bg-white/5 border border-white/10 rounded-2xl p-6 glow-card">
                                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                                    <h3 class="text-xl font-bold text-white">[Your Degree Title]</h3>
                                    <span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">Graduating [Year]</span>
                                </div>
                                <h4 class="text-purple-400 font-medium mb-3">Maseno University</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Focusing on applied statistics, programming logic, and algorithmic data processing. Consistent high performer in core analytical modules.
                                </p>
                            </div>
                        </div>

                        <!-- Timeline Item 3 -->
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content bg-white/5 border border-white/10 rounded-2xl p-6 glow-card">
                                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                                    <h3 class="text-xl font-bold text-white">[Past Experience / Internship]</h3>
                                    <span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">Year - Year</span>
                                </div>
                                <h4 class="text-blue-400 font-medium mb-3">[Company / Project Name]</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    [Replace this text with a description of your accomplishments. Example: Cleaned a dataset of 5,000+ entries using Pandas, reducing data processing time by 15%.]
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
`;

if (!content.includes('<!-- ===== EXPERIENCE TIMELINE ===== -->')) {
    content = content.replace('                </div>\n            </div>\n        </section>', '                </div>\n' + timelineHTML + '\n            </div>\n        </section>');
}

fs.writeFileSync(file, content);
console.log('UI enhancements injected successfully!');
