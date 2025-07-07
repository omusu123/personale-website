// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

// Function to get language color
function getLanguageColor(language) {
    const colors = {
        'JavaScript': 'bg-yellow-400',
        'Python': 'bg-blue-400',
        'HTML': 'bg-red-500',
        'CSS': 'bg-blue-500',
        'TypeScript': 'bg-blue-600',
        'Java': 'bg-red-600',
        'R': 'bg-blue-300',
        'Jupyter Notebook': 'bg-orange-500',
        'default': 'bg-gray-500'
    };
    return colors[language] || colors['default'];
}

// Function to create repository card HTML
function createRepoCard(repo) {
    return `
        <div class="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-semibold text-blue-400">${repo.name}</h3>
                    <span class="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded-full">${repo.private ? 'Private' : 'Public'}</span>
                </div>
                <p class="text-gray-400 text-sm mb-4">${repo.description || 'No description provided'}</p>
                <div class="flex items-center text-sm text-gray-400">
                    ${repo.language ? `
                        <span class="flex items-center mr-4">
                            <span class="w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-1"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Updated ${formatDate(repo.updated_at)}
                    </span>
                </div>
            </div>
            <div class="bg-gray-900/50 px-6 py-3 flex justify-between items-center">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                    View on GitHub
                </a>
                <div class="flex items-center">
                    <span class="text-gray-400 text-sm flex items-center mr-4">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        ${repo.forks_count || 0}
                    </span>
                    <span class="text-gray-400 text-sm flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        ${repo.stargazers_count || 0}
                    </span>
                </div>
            </div>
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
        // Show loading state
        loading.classList.remove('hidden');
        error.classList.add('hidden');
        
        // Fetch repositories from GitHub API
        const response = await fetch('https://api.github.com/users/omusu123/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Clear loading state
        loading.classList.add('hidden');
        
        // Display repositories
        if (repos.length === 0) {
            container.innerHTML = '<p class="text-gray-400 text-center col-span-3">No repositories found.</p>';
            return;
        }
        
        container.innerHTML = repos.map(createRepoCard).join('');
        
    } catch (error) {
        console.error('Error loading GitHub repositories:', error);
        loading.classList.add('hidden');
        error.textContent = 'Failed to load repositories. Please try again later.';
        error.classList.remove('hidden');
    }
}

// Load repositories when the page loads
document.addEventListener('DOMContentLoaded', loadGitHubRepos);
