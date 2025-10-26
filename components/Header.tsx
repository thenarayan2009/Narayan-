
import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';

export const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-[#161b22] border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center space-x-3">
                <GitHubIcon className="w-8 h-8 text-white" />
                <h1 className="text-xl font-semibold text-gray-200">Git Repository Viewer</h1>
            </div>
        </header>
    );
};
