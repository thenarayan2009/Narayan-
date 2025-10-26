
import React, { useState } from 'react';
import { FileExplorer } from './components/FileExplorer';
import { CodeViewer } from './components/CodeViewer';
import { Header } from './components/Header';
import { GitHubModal } from './components/GitHubModal';
import { initialFiles } from './constants/files';
import type { FileData } from './types';

const App: React.FC = () => {
    const [files] = useState<FileData[]>(initialFiles);
    const [selectedFile, setSelectedFile] = useState<FileData | null>(initialFiles[0] || null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectFile = (file: FileData) => {
        setSelectedFile(file);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-[#0d1117] text-gray-300 min-h-screen font-sans flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0 border-r border-gray-800 bg-[#161b22] p-2 md:p-4 md:overflow-y-auto">
                    <FileExplorer files={files} selectedFile={selectedFile} onSelectFile={handleSelectFile} />
                </div>
                <div className="flex-grow flex flex-col w-full overflow-auto">
                    <CodeViewer file={selectedFile} onConnectToGitHub={openModal} />
                </div>
            </main>
            {isModalOpen && <GitHubModal onClose={closeModal} />}
        </div>
    );
};

export default App;
