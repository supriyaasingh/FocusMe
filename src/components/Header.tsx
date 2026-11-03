import React from 'react';
import { BookOpen, Calendar, CheckSquare, Download, Upload, Plus } from 'lucide-react';

interface HeaderProps {
  activeTab: 'syllabus' | 'planner' | 'checklist';
  setActiveTab: (tab: 'syllabus' | 'planner' | 'checklist') => void;
  onOpenNewTopic: () => void;
  onExport: () => void;
  onImport: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenNewTopic,
  onExport,
  onImport,
  onReset,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-xs">
            FM
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-neutral-900 whitespace-nowrap">
              FocusMe
            </span>
            <span className="text-[11px] text-neutral-500 font-medium tracking-wide">
              Personal Learning Index & Roadmap
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Single-line, clean typography) */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'syllabus'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Syllabus Index</span>
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'planner'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Daily Study Plan</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>5-Area Roadmap</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1 border-r border-neutral-200 pr-2 mr-1">
            <button
              onClick={onExport}
              title="Export backup as JSON"
              className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onImport}
              title="Import backup JSON"
              className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
            >
              <Upload className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onOpenNewTopic}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Topic</span>
          </button>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="flex md:hidden items-center justify-around border-t border-neutral-200 px-2 py-1.5 bg-neutral-50 text-xs">
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-2 py-1 rounded font-medium ${activeTab === 'syllabus' ? 'text-neutral-900 bg-white shadow-xs' : 'text-neutral-600'}`}
        >
          Syllabus Index
        </button>
        <button
          onClick={() => setActiveTab('planner')}
          className={`px-2 py-1 rounded font-medium ${activeTab === 'planner' ? 'text-neutral-900 bg-white shadow-xs' : 'text-neutral-600'}`}
        >
          Daily Plan
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`px-2 py-1 rounded font-medium ${activeTab === 'checklist' ? 'text-neutral-900 bg-white shadow-xs' : 'text-neutral-600'}`}
        >
          5-Area Roadmap
        </button>
      </div>
    </header>
  );
};
