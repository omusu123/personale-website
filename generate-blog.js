const fs = require('fs');

const blogFile = 'blog.html';
let content = fs.readFileSync(blogFile, 'utf8');

// Replace the <main> block with the article
const mainStart = content.indexOf('<main id="main-content" tabindex="-1">');
const mainEnd = content.indexOf('</main>') + 7;

const articleHTML = `
    <main id="main-content" tabindex="-1">
        <section class="relative min-h-[50vh] flex items-center pt-32 pb-16 px-6">
            <div class="container mx-auto max-w-3xl relative z-10">
                <a href="blog.html" class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 11.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg> Back to Articles
                </a>
                
                <div class="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        Today
                    </span>
                    <span class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        5 min read
                    </span>
                    <span class="px-2 py-0.5 rounded pl-1 bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">Tutorial</span>
                </div>

                <h1 class="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Handling Missing Values in Healthcare Datasets with Pandas</h1>
                
                <div class="flex items-center gap-4 border-t border-b border-gray-800/50 py-4 mb-12">
                    <div class="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">EC</div>
                    <div>
                        <p class="text-white font-medium">Ernest Charles</p>
                        <p class="text-gray-500 text-sm">Data Analyst & Problem Solver</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Article Body -->
        <section class="py-12 px-6">
            <div class="container mx-auto max-w-3xl article-content text-gray-300 space-y-6 leading-relaxed">
                
                <p class="text-xl text-gray-400 leading-relaxed">
                    Healthcare data is notoriously messy. When analyzing clinical records—such as evaluating patient risk factors for diabetes—missing data isn't just an inconvenience; dropping it improperly can completely bias your statistical modeling.
                </p>

                <h2 class="text-2xl font-bold text-white mt-12 mb-4">1. Understanding the Mechanism of Missingness</h2>
                <p>Before writing any code, it is critical to understand <em>why</em> the data is missing. Is it Missing Completely at Random (MCAR), Missing at Random (MAR), or Missing Not at Random (MNAR)?</p>
                <ul class="list-disc pl-6 space-y-2 mt-4 mb-8 text-gray-400">
                    <li><strong class="text-gray-200">MCAR:</strong> The missing data has no relation to any other variable. You can often drop these rows safely if they are few.</li>
                    <li><strong class="text-gray-200">MNAR:</strong> The data is missing <em>because</em> of its value. (e.g., Obese patients actively refusing to state their weight).</li>
                </ul>

                <h2 class="text-2xl font-bold text-white mt-12 mb-4">2. Identifying Nulls with Pandas</h2>
                <p>Let's load up a clinical dataset and visualize our missing values. This gives us a bird's eye view of our data density.</p>
                
                <div class="bg-gray-900 rounded-xl p-4 my-6 font-mono text-sm border border-gray-800 overflow-x-auto">
<pre><code class="text-indigo-400">import <span class="text-white">pandas</span> as <span class="text-white">pd</span>
import <span class="text-white">seaborn</span> as <span class="text-white">sns</span>

<span class="text-gray-500"># Load our clinical data</span>
df = pd.read_csv(<span class="text-green-400">'diabetic_dataset.csv'</span>)

<span class="text-gray-500"># Check missing value counts per column</span>
missing_data = df.isnull().sum()
print(missing_data[missing_data > 0])</code></pre>
                </div>

                <h2 class="text-2xl font-bold text-white mt-12 mb-4">3. The Imputation Strategy</h2>
                <p>In my recent <em>Diabetic Risks Assessment Case Study</em>, several columns like <code>blood_pressure</code> and <code>BMI</code> had intermittent null values. Simply using <code>df.dropna()</code> would have decimated our sample size.</p>
                <p>Instead, we use targeted imputation based on the distribution shape:</p>
                
                <div class="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 my-8">
                    <h4 class="text-indigo-400 font-bold mb-2">My Standard Protocol:</h4>
                    <ul class="list-none space-y-3">
                        <li class="flex items-start gap-3"><svg class="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Normally Distributed:</strong> Fill with the column <em>Mean</em>.</span></li>
                        <li class="flex items-start gap-3"><svg class="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Highly Skewed:</strong> Fill with the column <em>Median</em> to avoid outlier drag.</span></li>
                        <li class="flex items-start gap-3"><svg class="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Categorical (e.g. Smoker Status):</strong> Use the <em>Mode</em> (most frequent).</span></li>
                    </ul>
                </div>

                <div class="bg-gray-900 rounded-xl p-4 my-6 font-mono text-sm border border-gray-800 overflow-x-auto">
<pre><code class="text-indigo-400"><span class="text-gray-500"># Fill skewed BMI values with Median</span>
bmi_median = df['BMI'].median()
df['BMI'].fillna(bmi_median, inplace=True)</code></pre>
                </div>

                <h2 class="text-2xl font-bold text-white mt-12 mb-4">Conclusion</h2>
                <p>By shifting from reckless row dropping to strategic, distribution-aware imputation, we preserve statistical power and prevent artificial variance from creeping into our machine learning models. Clean data is the core of accurate analysis!</p>
                
                <br><br><br>
            </div>
        </section>
    </main>
`;

const newPageContent = content.substring(0, mainStart) + articleHTML + content.substring(mainEnd);
fs.writeFileSync('blog-missing-data.html', newPageContent);
console.log('blog-missing-data.html generated.');
