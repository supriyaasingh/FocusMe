/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Topic, LearningArea, TopicStatus } from './types/syllabus.ts';
import { StorageService } from './services/storageService.ts';
import { Header } from './components/Header.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { AreaSelector } from './components/AreaSelector.tsx';
import { TopicList } from './components/TopicList.tsx';
import { TopicDetailModal } from './components/TopicDetailModal.tsx';
import { TopicEditModal } from './components/TopicEditModal.tsx';
import { DailyPlannerModal } from './components/DailyPlannerModal.tsx';
import { ChecklistOverview } from './components/ChecklistOverview.tsx';
import { SscDailyPlanner } from './components/SscDailyPlanner.tsx';
import { OfflineIndicator } from './components/OfflineIndicator.tsx';
import { CheckCircle2, AlertCircle, Info, Calendar } from 'lucide-react';

export default function App() {
  const [areas, setAreas] = useState<LearningArea[]>(() => StorageService.getLearningAreas());
  const [topics, setTopics] = useState<Topic[]>(() => StorageService.getTopics());
  const [selectedAreaId, setSelectedAreaId] = useState<string>(() => StorageService.getSelectedAreaId());
  const [activeTab, setActiveTab] = useState<'syllabus' | 'planner' | 'checklist'>('syllabus');

  // Modals
  const [inspectedTopic, setInspectedTopic] = useState<Topic | null>(null);
  const [isNewTopicOpen, setIsNewTopicOpen] = useState(false);
  const [isDailyPlannerOpen, setIsDailyPlannerOpen] = useState(false);

  // Toast / notification banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Sync selected area with storage
  const handleSelectArea = (id: string) => {
    setSelectedAreaId(id);
    StorageService.setSelectedAreaId(id);
  };

  // Toggle pause/resume for a learning area
  const handleTogglePause = (areaId: string) => {
    const updatedAreas = areas.map((a) => {
      if (a.id === areaId) {
        const nextStatus = a.status === 'active' ? ('paused' as const) : ('active' as const);
        return { ...a, status: nextStatus };
      }
      return a;
    });
    setAreas(updatedAreas);
    StorageService.saveLearningAreas(updatedAreas);
    const area = updatedAreas.find((a) => a.id === areaId);
    showToast(`${area?.name.split('—')[0].trim()} is now ${area?.status === 'active' ? 'Active' : 'Paused'}`);
  };

  // Update topic status
  const handleUpdateTopicStatus = (topicId: string, status: TopicStatus) => {
    const updated = topics.map((t) => {
      if (t.id === topicId) {
        return {
          ...t,
          status,
          completionDate:
            status === 'Completed'
              ? t.completionDate || new Date().toISOString().split('T')[0]
              : null,
        };
      }
      return t;
    });
    setTopics(updated);
    StorageService.saveTopics(updated);

    // If modal is currently viewing this topic, sync modal
    if (inspectedTopic?.id === topicId) {
      setInspectedTopic((prev) => (prev ? { ...prev, status } : null));
    }
  };

  // Move sequence up or down
  const handleMoveTopicSequence = (topicId: string, direction: 'up' | 'down') => {
    const areaTopics = topics
      .filter((t) => t.learningAreaId === selectedAreaId)
      .sort((a, b) => a.sequenceNumber - b.sequenceNumber);

    const index = areaTopics.findIndex((t) => t.id === topicId);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const current = areaTopics[index];
      const previous = areaTopics[index - 1];
      const tempSeq = current.sequenceNumber;
      current.sequenceNumber = previous.sequenceNumber;
      previous.sequenceNumber = tempSeq;

      const updated = topics.map((t) => {
        if (t.id === current.id) return current;
        if (t.id === previous.id) return previous;
        return t;
      });
      setTopics(updated);
      StorageService.saveTopics(updated);
    } else if (direction === 'down' && index < areaTopics.length - 1) {
      const current = areaTopics[index];
      const next = areaTopics[index + 1];
      const tempSeq = current.sequenceNumber;
      current.sequenceNumber = next.sequenceNumber;
      next.sequenceNumber = tempSeq;

      const updated = topics.map((t) => {
        if (t.id === current.id) return current;
        if (t.id === next.id) return next;
        return t;
      });
      setTopics(updated);
      StorageService.saveTopics(updated);
    }
  };

  // Save modified topic from detail modal
  const handleSaveTopic = (updatedTopic: Topic) => {
    const updated = topics.map((t) => (t.id === updatedTopic.id ? updatedTopic : t));
    setTopics(updated);
    StorageService.saveTopics(updated);
    showToast(`Saved changes to "${updatedTopic.name}"`);
  };

  // Delete topic
  const handleDeleteTopic = (topicId: string) => {
    const updated = topics.filter((t) => t.id !== topicId);
    setTopics(updated);
    StorageService.saveTopics(updated);
    showToast('Topic deleted');
  };

  // Add new topic
  const handleAddTopic = (newTopic: Topic) => {
    const updated = [...topics, newTopic];
    setTopics(updated);
    StorageService.saveTopics(updated);
    showToast(`Added "${newTopic.name}" to syllabus`);
  };

  // Export JSON backup
  const handleExport = () => {
    const json = StorageService.exportBackup();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `focusme_syllabus_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup JSON exported successfully');
  };

  // Import JSON backup
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content && StorageService.importBackup(content)) {
          setTopics(StorageService.getTopics());
          setAreas(StorageService.getLearningAreas());
          showToast('Backup imported successfully');
        } else {
          showToast('Failed to import backup: invalid file format');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // Reset to initial seed data
  const handleReset = () => {
    if (window.confirm('Reset all syllabus data to initial defaults? Custom additions will be replaced with clean default seeds.')) {
      StorageService.resetToDefaults();
      setTopics(StorageService.getTopics());
      setAreas(StorageService.getLearningAreas());
      setSelectedAreaId('la_cpp');
      showToast('Syllabus reset to verified defaults');
    }
  };

  // Filter topics for the currently selected learning area
  const currentAreaTopics = topics.filter((t) => t.learningAreaId === selectedAreaId);
  const currentArea = areas.find((a) => a.id === selectedAreaId) || areas[0];

  const existingModules = Array.from(
    new Set(currentAreaTopics.map((t) => t.module).filter(Boolean))
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 selection:bg-neutral-900 selection:text-white">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNewTopic={() => setIsNewTopicOpen(true)}
        onExport={handleExport}
        onImport={handleImport}
        onReset={handleReset}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toast Alert */}
        {toastMessage && (
          <div className="mb-4 p-3 bg-neutral-900 text-white text-xs font-medium rounded-lg flex items-center justify-between shadow-lg animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-neutral-400 hover:text-white text-xs ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tab 1: Syllabus Index View */}
        {activeTab === 'syllabus' && (
          <div>
            {/* Learning Area Selector Tabs & Pause banner */}
            <AreaSelector
              areas={areas}
              selectedAreaId={selectedAreaId}
              onSelectArea={handleSelectArea}
              onTogglePause={handleTogglePause}
              allTopics={topics}
            />

            {/* If the current area has no topics yet (Batch 2+), show helpful prompt */}
            {currentAreaTopics.length === 0 ? (
              <div className="bg-white border border-neutral-200 rounded-xl p-10 text-center space-y-4 shadow-xs">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-500">
                  <Info className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-neutral-900">
                    {currentArea.name}
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-md mx-auto">
                    This learning area is queued as part of the step-by-step phased execution. Batch 1 (C++) is currently complete.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleSelectArea('la_cpp')}
                    className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs"
                  >
                    Switch to Batch 1: C++ (104 Topics)
                  </button>
                  <button
                    onClick={() => setIsNewTopicOpen(true)}
                    className="px-4 py-2 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
                  >
                    Add Custom Topic
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Statistics Bar */}
                <StatsBar topics={currentAreaTopics} areaName={currentArea.name} />

                {/* Topics List & Interactive Data Grid */}
                <TopicList
                  topics={currentAreaTopics}
                  onSelectTopic={(topic) => setInspectedTopic(topic)}
                  onUpdateTopicStatus={handleUpdateTopicStatus}
                  onMoveTopicSequence={handleMoveTopicSequence}
                  onDeleteTopic={handleDeleteTopic}
                  onOpenNewTopic={() => setIsNewTopicOpen(true)}
                />
              </>
            )}
          </div>
        )}

        {/* Tab 2: Daily Planner View */}
        {activeTab === 'planner' && (
          <div className="space-y-6">
            {selectedAreaId === 'la_ssccgl' ? (
              <SscDailyPlanner
                topics={topics}
                onUpdateTopicStatus={handleUpdateTopicStatus}
                onSelectTopic={(topic) => setInspectedTopic(topic)}
                onClose={() => setActiveTab('syllabus')}
              />
            ) : (
              <>
                <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-neutral-500 font-medium mb-1">
                      Focus Engine
                    </div>
                    <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
                      Daily Study Planner
                    </h2>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Reads your incomplete topics in sequence, checks your daily time availability, and generates a realistic plan.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsDailyPlannerOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs transition-colors shrink-0"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Launch Interactive Planner</span>
                  </button>
                </div>

                {/* Embedded planner modal view */}
                <DailyPlannerModal
                  topics={topics}
                  areas={areas}
                  activeAreaId={selectedAreaId}
                  onUpdateTopicStatus={handleUpdateTopicStatus}
                  onSelectTopic={(topic) => setInspectedTopic(topic)}
                  isOpen={true}
                  onClose={() => setActiveTab('syllabus')}
                />
              </>
            )}
          </div>
        )}

        {/* Tab 3: Roadmap Checklist View */}
        {activeTab === 'checklist' && (
          <ChecklistOverview
            areas={areas}
            topics={topics}
            selectedAreaId={selectedAreaId}
            onSelectArea={handleSelectArea}
            onTogglePause={handleTogglePause}
            onNavigateToSyllabus={() => setActiveTab('syllabus')}
          />
        )}
      </main>

      {/* Floating Daily Planner Quick Access Button when on syllabus tab */}
      {activeTab === 'syllabus' && (
        <button
          onClick={() => setIsDailyPlannerOpen(true)}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-full shadow-lg hover:bg-neutral-800 transition-all hover:scale-102"
        >
          <Calendar className="w-4 h-4" />
          <span>Daily Plan</span>
        </button>
      )}

      {/* Topic Detail Modal Inspector */}
      {inspectedTopic && (
        <TopicDetailModal
          topic={inspectedTopic}
          onClose={() => setInspectedTopic(null)}
          onSaveTopic={handleSaveTopic}
          onDeleteTopic={handleDeleteTopic}
        />
      )}

      {/* Add New Topic Modal */}
      {isNewTopicOpen && (
        <TopicEditModal
          isOpen={isNewTopicOpen}
          onClose={() => setIsNewTopicOpen(false)}
          onAddTopic={handleAddTopic}
          learningAreaId={selectedAreaId}
          learningAreaName={currentArea.name}
          subjectName={currentArea.subjects[0]?.name || 'Core Curriculum'}
          existingModules={existingModules}
          suggestedSequence={currentAreaTopics.length + 1}
        />
      )}

      {/* Standalone Daily Planner Modal */}
      {isDailyPlannerOpen && activeTab !== 'planner' && (
        <DailyPlannerModal
          topics={topics}
          areas={areas}
          activeAreaId={selectedAreaId}
          onUpdateTopicStatus={handleUpdateTopicStatus}
          onSelectTopic={(topic) => setInspectedTopic(topic)}
          isOpen={isDailyPlannerOpen}
          onClose={() => setIsDailyPlannerOpen(false)}
        />
      )}
      {/* Offline Mode Indicator */}
      <OfflineIndicator />
    </div>
  );
}
