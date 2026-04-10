const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// Update Form HTML
content = content.replace(
    '<form id="contact-form" action="https://formspree.io/f/xrgnqgag" method="POST" class="reveal space-y-5" style="transition-delay: 0.3s;">',
    '<form id="contact-form" action="mailto:ernestomusula1@gmail.com" method="POST" enctype="text/plain" class="reveal space-y-5" style="transition-delay: 0.3s;">'
);

// Remove the JS that prevents default redirect
const jsStart = content.indexOf('// ===== Contact Form =====');
const jsEnd = content.indexOf('})();', jsStart) + 5;

if (jsStart !== -1 && content.indexOf('})();', jsStart) !== -1) {
    content = content.substring(0, jsStart) + content.substring(jsEnd);
}

fs.writeFileSync(file, content);
console.log('Form updated to mailto redirect.');
