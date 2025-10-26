
import React from 'react';

interface GitHubModalProps {
    onClose: () => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ onClose }) => {
    const commands = `
# Create a new repository on the command line
git init
git add .
git commit -m "Initial commit: Add project files"
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main

# Push an existing repository from the command line
git remote add origin <YOUR_REPOSITORY_URL>
git branch -M main
git push -u origin main
    `.trim();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div
                className="bg-[#161b22] rounded-lg shadow-xl w-full max-w-2xl border border-gray-700 transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold text-white">Connect to GitHub</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
                </div>
                <div className="p-6">
                    <p className="text-gray-400 mb-4">
                        To connect these files to a GitHub repository, create a new repository on GitHub.com and then run the following commands in your local project terminal.
                    </p>
                    <div className="bg-[#0d1117] p-4 rounded-md">
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                            <code>{commands}</code>
                        </pre>
                    </div>
                </div>
                <div className="p-4 bg-[#0d1117] border-t border-gray-700 text-right rounded-b-lg">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
