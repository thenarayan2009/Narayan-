
import React from 'react';
import type { FileData } from '../types';
import { PythonIcon } from './icons/PythonIcon';
import { TextFileIcon } from './icons/TextFileIcon';

interface FileExplorerProps {
    files: FileData[];
    selectedFile: FileData | null;
    onSelectFile: (file: FileData) => void;
}

const FileIcon: React.FC<{ language: FileData['language'] }> = ({ language }) => {
    switch (language) {
        case 'python':
            return <PythonIcon className="w-5 h-5 mr-3 flex-shrink-0" />;
        case 'text':
            return <TextFileIcon className="w-5 h-5 mr-3 flex-shrink-0" />;
        default:
            return null;
    }
};

export const FileExplorer: React.FC<FileExplorerProps> = ({ files, selectedFile, onSelectFile }) => {
    return (
        <nav>
            <h2 className="text-xs font-bold uppercase text-gray-500 mb-3 px-2">Files</h2>
            <ul>
                {files.map((file) => (
                    <li key={file.name}>
                        <button
                            onClick={() => onSelectFile(file)}
                            className={`w-full text-left flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                                selectedFile?.name === file.name
                                    ? 'bg-blue-600/30 text-white'
                                    : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                            }`}
                        >
                            <FileIcon language={file.language} />
                            <span className="truncate">{file.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
