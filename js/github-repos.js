// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
    return `${Math.floor(diffDays / 365)}y ago`;
}

// Function to get language color
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f7df1e',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'TypeScript': '#3178c6',
        'Java': '#b07219',
        'R': '#198CE7',
        'Jupyter Notebook': '#DA5B0B',
    };
    return colors[language] || '#8b949e';
}

// Function to create repository card HTML
function createRepoCard(repo) {
    const langColor = repo.language ? getLanguageColor(repo.language) : null;
    return `
        <div class="glow-card group">
            <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                        </svg>
                        <h3 class="font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors truncate">${repo.name}</h3>
                    </div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${repo.private ? 'border-yellow-500/30 text-yellow-400' : 'border-gray-700 text-gray-500'}">${repo.private ? 'Private' : 'Public'}</span>
                </div>
                <p class="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">${repo.description || 'No description provided'}</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <div class="flex items-center gap-3">
                        ${repo.language ? `
                            <span class="flex items-center gap-1.5">
                                <span class="w-2.5 h-2.5 rounded-full" style="background: ${langColor}"></span>
                                ${repo.language}
                            </span>
                        ` : ''}
                        <span class="flex items-center gap-1">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                            </svg>
                            ${repo.stargazers_count || 0}
                        </span>
                        <span class="flex items-center gap-1">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                            </svg>
                            ${repo.forks_count || 0}
                        </span>
                    </div>
                    <span class="text-gray-600 font-mono">${formatDate(repo.updated_at)}</span>
                </div>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="block px-6 py-3 border-t border-gray-800/50 text-sm text-indigo-400 hover:text-indigo-300 hover:bg-white/[0.02] transition-all flex items-center justify-between">
                <span>View on GitHub</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
        </div>
    `;
}

// Fetch and display GitHub repositories
async function loadGitHubRepos() {
    const container = document.getElementById('github-repos-container');
    const loading = document.getElementById('github-loading');
    const error = document.getElementById('github-error');

    if (!container) return;

    try {
        loading.classList.remove('hidden');
        error.classList.add('hidden');

        const response = await fetch('https://api.github.com/users/omusu123/repos?sort=updated&per_page=6');

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repos = await response.json();
        loading.classList.add('hidden');

        if (repos.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-center col-span-3">No repositories found.</p>';
            return;
        }

        container.innerHTML = repos.map(createRepoCard).join('');

    } catch (err) {
        console.error('Error loading GitHub repositories:', err);
        loading.classList.add('hidden');
        error.textContent = 'Failed to load repositories. Please try again later.';
        error.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', loadGitHubRepos);
