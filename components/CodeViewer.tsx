
import React, { useState, useEffect } from 'react';
import type { FileData } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';

interface CodeViewerProps {
    file: FileData | null;
    onConnectToGitHub: () => void;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ file, onConnectToGitHub }) => {
    const [copyButtonText, setCopyButtonText] = useState('Copy');

    useEffect(() => {
        setCopyButtonText('Copy');
    }, [file]);

    const handleCopy = () => {
        if (file) {
            navigator.clipboard.writeText(file.content.trim());
            setCopyButtonText('Copied!');
            setTimeout(() => setCopyButtonText('Copy'), 2000);
        }
    };

    if (!file) {
        return (
            <div className="flex-grow flex items-center justify-center text-gray-500">
                Select a file from the list to view its content.
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-[#0d1117]">
            <div className="flex items-center justify-between bg-[#161b22] p-3 border-b border-gray-800 flex-shrink-0">
                <h3 className="font-mono text-sm text-gray-300">{file.name}</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleCopy}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                    >
                        {copyButtonText}
                    </button>
                    <button
                        onClick={onConnectToGitHub}
                        className="flex items-center px-3 py-1 text-xs font-medium bg-green-600 hover:bg-green-700 rounded-md transition-colors text-white"
                    >
                        <GitHubIcon className="w-4 h-4 mr-1.5" />
                        Connect to GitHub
                    </button>
                </div>
            </div>
            <div className="flex-grow overflow-auto p-4">
                <pre className="text-sm leading-relaxed whitespace-pre-wrap">
                    <code className={`language-${file.language}`}>{file.content.trim()}</code>
                </pre>
            </div>
        </div>
    );
};
