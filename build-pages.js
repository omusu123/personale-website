const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const mainStartStr = '<main id="main-content" tabindex="-1">';
const mainEndStr = '</main>';

const mainStartIdx = indexHtml.indexOf(mainStartStr) + mainStartStr.length;
const mainEndIdx = indexHtml.indexOf(mainEndStr);

const headerEnd = indexHtml.substring(0, mainStartIdx);
let footerStart = indexHtml.substring(mainEndIdx);

// Fix navigation links in the header for sub-pages so they point back to index.html#section
let subHeaderEnd = headerEnd.replace(/href="#/g, 'href="index.html#');
// But Home should just be index.html
subHeaderEnd = subHeaderEnd.replace('href="index.html#home"', 'href="index.html"');

const projectsContent = `
    <section class="relative min-h-screen py-32 px-6">
        <div class="container mx-auto max-w-5xl">
            <a href="index.html" class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Back to Home
            </a>
            
            <h1 class="text-5xl font-bold gradient-text-blue mb-6">Case Studies</h1>
            <p class="text-gray-400 max-w-2xl text-lg mb-16">
                Explore my methodology, tooling, and final visualizations used to transform complex datasets into clear, actionable insights.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Project 1 -->
                <div class="glow-card p-6 flex flex-col h-full rounded-2xl border border-indigo-500/20 bg-indigo-900/10">
                    <div class="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                    <h3 class="font-semibold text-xl text-white mb-2">Assessing Diabetic Risks</h3>
                    <p class="text-gray-400 text-sm mb-6 flex-grow">A comprehensive data analysis report assessing various factors and risks associated with diabetes.</p>
                    <a href="diabetic-risks.html" class="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-indigo-600/20 hover:bg-indigo-600/40 px-4 py-2 rounded-lg transition-colors mt-auto relative z-10 w-full">Read Case Study</a>
                </div>

                <!-- Project 2 -->
                <div class="glow-card p-6 flex flex-col h-full rounded-2xl border border-purple-500/20 bg-purple-900/10">
                    <div class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    </div>
                    <h3 class="font-semibold text-xl text-white mb-2">Student Performance</h3>
                    <p class="text-gray-400 text-sm mb-6 flex-grow">An in-depth analysis of student performance metrics utilizing predictive machine learning techniques.</p>
                    <a href="student-performance.html" class="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-purple-600/20 hover:bg-purple-600/40 px-4 py-2 rounded-lg transition-colors mt-auto relative z-10 w-full">Read Case Study</a>
                </div>

                <!-- Project 3 -->
                <div class="glow-card p-6 flex flex-col h-full rounded-2xl border border-indigo-500/20 bg-indigo-900/10">
                    <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <h3 class="font-semibold text-xl text-white mb-2">Data Assignment</h3>
                    <p class="text-gray-400 text-sm mb-6 flex-grow">Final assignment focusing on applied statistical methodologies and data cleaning.</p>
                    <a href="Data_analysis/TAS_00048_022_MIT414_Assignment_final (1).pdf" target="_blank" class="inline-flex items-center justify-center gap-2 text-sm font-medium border border-blue-500/30 py-2 rounded-lg text-blue-400 hover:text-white hover:bg-blue-600 transition-colors mt-auto relative z-10 w-full">View Raw PDF</a>
                </div>
            </div>
        </div>
    </section>
`;

const diabeticRisksContent = `
    <section class="relative min-h-screen py-32 px-6">
        <div class="container mx-auto max-w-4xl">
            <a href="projects.html" class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 11.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg> Back to Projects
            </a>
            
            <div class="mb-4 text-indigo-400 font-mono text-sm tracking-widest uppercase">Healthcare Analytics</div>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-8">Assessing Diabetic Risks</h1>
            
            <div class="flex flex-wrap gap-3 mb-12">
                <span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">Python</span>
                <span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">Pandas</span>
                <span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">Statistical Analysis</span>
            </div>

            <div class="prose prose-invert max-w-none text-gray-300">
                <h2 class="text-2xl font-semibold mt-10 mb-4 text-white">The Problem</h2>
                <p class="leading-relaxed mb-6">
                    Diabetes is a chronic condition affecting millions worldwide. Early detection of risk factors can significantly improve patient outcomes. 
                    This project aimed to clean and analyze a complex healthcare dataset to identify the leading predictors of diabetic progression in patients over a 5-year period.
                </p>

                <h2 class="text-2xl font-semibold mt-12 mb-6 text-white">Interactive Findings: Age vs Risk Score</h2>
                <div class="w-full bg-white/5 border border-indigo-500/20 rounded-xl p-6 mb-12 relative z-10" style="height: 400px;">
                    <canvas id="diabeticChart"></canvas>
                </div>

                <h2 class="text-2xl font-semibold mt-10 mb-4 text-white">Conclusion</h2>
                <p class="leading-relaxed mb-6">
                    The analysis conclusively demonstrated a non-linear but highly correlated relationship between advanced age demographics and elevated risk scores, accelerated significantly when median glucose levels exceeded 120. These findings can help target preventative care towards high-risk demographics earlier.
                </p>

                <div class="mt-16 p-8 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center">
                    <h3 class="text-white text-xl font-semibold mb-3">Want the full report?</h3>
                    <p class="text-gray-400 mb-6">Download the comprehensive initial .docx document containing the raw statistical readouts.</p>
                    <a href="Data_analysis/ASSESSING DIABETIC RISKS.docx" download class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium relative z-10">
                        Download Full Report
                    </a>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('diabeticChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['20-30', '31-40', '41-50', '51-60', '61-70', '71+'],
                        datasets: [
                            {
                                label: 'Risk Score',
                                data: [12, 28, 45, 68, 85, 92],
                                borderColor: '#818cf8',
                                backgroundColor: 'rgba(129, 140, 248, 0.2)',
                                borderWidth: 3,
                                tension: 0.4,
                                pointBackgroundColor: '#818cf8'
                            },
                            {
                                label: 'Avg Glucose Level',
                                data: [95, 105, 120, 140, 165, 155],
                                borderColor: '#c084fc',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderDash: [5, 5],
                                tension: 0.4
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { labels: { color: '#e2e8f0' } }
                        },
                        scales: {
                            y: {
                                grid: { color: 'rgba(51, 65, 85, 0.5)' },
                                ticks: { color: '#94a3b8' }
                            },
                            x: {
                                grid: { color: 'rgba(51, 65, 85, 0.5)' },
                                ticks: { color: '#94a3b8' }
                            }
                        }
                    }
                });
            });
        </script>
    </section>
`;

const studentPerformanceContent = `
    <section class="relative min-h-screen py-32 px-6">
        <div class="container mx-auto max-w-4xl">
            <a href="projects.html" class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-12 transition-colors relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 11.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg> Back to Projects
            </a>
            
            <div class="mb-4 text-purple-400 font-mono text-sm tracking-widest uppercase">Education Analytics</div>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-8">Student Performance</h1>
            
            <div class="flex flex-wrap gap-3 mb-12">
                <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">Machine Learning</span>
                <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">R Script</span>
                <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">Education</span>
            </div>

            <div class="prose prose-invert max-w-none text-gray-300">
                <h2 class="text-2xl font-semibold mt-10 mb-4 text-white">The Problem</h2>
                <p class="leading-relaxed mb-6">
                    Educational institutions collect vast amounts of data, yet often struggle to leverage it proactively. The goal of this analysis was to use historical student performance, attendance metrics, and socioeconomic factors to predict final grades.
                </p>

                <h2 class="text-2xl font-semibold mt-12 mb-6 text-white">Interactive Findings: Attendance vs Average Score</h2>
                <div class="w-full bg-white/5 border border-purple-500/20 rounded-xl p-6 mb-12 relative z-10" style="height: 400px;">
                    <canvas id="studentChart"></canvas>
                </div>

                <div class="mt-16 p-8 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center">
                    <h3 class="text-white text-xl font-semibold mb-3">View the Original PDF</h3>
                    <p class="text-gray-400 mb-6">Review the detailed mathematics and statistical methodology recorded in the final submission.</p>
                    <a href="Data_analysis/TAS00048022_StudentPerformance_Report.pdf" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-medium relative z-10">
                        Open PDF Report
                    </a>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('studentChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'],
                        datasets: [
                            {
                                label: 'Average Score',
                                data: [65, 72, 78, 85, 94],
                                backgroundColor: '#c084fc',
                                borderRadius: 4
                            },
                            {
                                label: 'Attendance %',
                                data: [75, 82, 88, 92, 97],
                                backgroundColor: '#818cf8',
                                borderRadius: 4
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { labels: { color: '#e2e8f0' } }
                        },
                        scales: {
                            y: {
                                grid: { color: 'rgba(51, 65, 85, 0.5)' },
                                ticks: { color: '#94a3b8' }
                            },
                            x: {
                                grid: { color: 'rgba(51, 65, 85, 0.5)' },
                                ticks: { color: '#94a3b8' }
                            }
                        }
                    }
                });
            });
        </script>
    </section>
`;

const blogContent = `
    <section class="relative min-h-screen py-32 px-6">
        <div class="container mx-auto max-w-4xl">
            <a href="index.html" class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 11.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg> Back to Home
            </a>
            
            <h1 class="text-5xl font-bold gradient-text-blue mb-6">Data Blog</h1>
            <p class="text-gray-400 max-w-2xl text-lg mb-16">
                Thoughts, tutorials, and insights from my journey in data science and analytics.
            </p>

            <div class="grid gap-8">
                <article class="glow-card p-8 border border-indigo-500/20 bg-indigo-900/10 rounded-2xl relative z-10">
                    <div class="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span>Today</span>
                        <span class="px-2 py-0.5 rounded pl-1 bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20">Analytics</span>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors cursor-pointer">
                        Welcome to my new Data Analytics Portfolio
                    </h2>
                    <p class="text-gray-400 leading-relaxed mb-6">
                        I'm extremely excited to launch Version 2 of my personal portfolio. Moving forward, I will be using this space to document my case studies, write about data trends in East Africa, and share snippets of code that have helped me analyze datasets more efficiently.
                    </p>
                    <button class="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">Read more →</button>
                </article>

                <article class="glow-card p-8 border border-gray-700 bg-gray-800/10 rounded-2xl opacity-60">
                    <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>Coming Soon</span>
                        <span class="px-2 py-0.5 rounded pl-1 bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">Tutorial</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-300 mb-3">
                        Cleaning Missing Values in Healthcare Datasets with Pandas
                    </h2>
                    <p class="text-gray-500 leading-relaxed">
                        Handling missing data is the first challenge any analyst faces. In this upcoming post, I'll document my standard protocol for identifying, analyzing, and successfully imputing missing values without biasing the statistical distribution.
                    </p>
                </article>
            </div>
        </div>
    </section>
`;

fs.writeFileSync('projects.html', subHeaderEnd + projectsContent + footerStart);
fs.writeFileSync('diabetic-risks.html', subHeaderEnd + diabeticRisksContent + footerStart);
fs.writeFileSync('student-performance.html', subHeaderEnd + studentPerformanceContent + footerStart);
fs.writeFileSync('blog.html', subHeaderEnd + blogContent + footerStart);

console.log("Created pure HTML sub-pages successfully!");
