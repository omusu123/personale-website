const fs = require('fs');

const files = ['index.html', 'projects.html', 'blog.html', 'diabetic-risks.html', 'student-performance.html'];

const openGraph = `
    <!-- OpenGraph SEO -->
    <meta property="og:title" content="Ernest Charles - Data Analyst">
    <meta property="og:description" content="Personal portfolio and case studies showcasing data analytics, machine learning, and problem solving.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200">
`;

const scrollCss = `
        /* ===== Scroll Progress ===== */
        #scroll-progress {
            position: fixed; top: 0; left: 0; width: 0%; height: 3px;
            background: linear-gradient(90deg, #6366f1, #c084fc);
            z-index: 10000; pointer-events: none;
        }
`;

const scrollDiv = `\n    <!-- Scroll Progress -->\n    <div id="scroll-progress"></div>`;

const scrollJs = `
    <script>
        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const el = document.getElementById("scroll-progress");
            if (el) {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                el.style.width = (winScroll / height) * 100 + "%";
            }
        });
    </script>`;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Add OG tags
    if (!content.includes('og:title')) {
        content = content.replace('<script src="https://cdn.tailwindcss.com"></script>', openGraph + '    <script src="https://cdn.tailwindcss.com"></script>');
    }
    
    // Add Scroll CSS
    if (!content.includes('#scroll-progress {')) {
        content = content.replace('/* ===== Misc ===== */', scrollCss + '        /* ===== Misc ===== */');
    }

    // Add Scroll Div
    if (!content.includes('id="scroll-progress"')) {
        content = content.replace('<body>', '<body>' + scrollDiv);
    }
    
    // Add Scroll JS
    if (!content.includes('Scroll Progress Bar')) {
        content = content.replace('</body>', scrollJs + '\n</body>');
    }

    fs.writeFileSync(f, content);
});

console.log('Global edits applied!');
