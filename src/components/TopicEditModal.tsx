import React, { useState } from 'react';
import { Topic, ImportanceLevel, DifficultyLevel, TopicStatus, RevisionStatus } from '../types/syllabus.ts';
import { X, Plus, Save } from 'lucide-react';

interface TopicEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTopic: (topic: Topic) => void;
  learningAreaId: string;
  learningAreaName: string;
  subjectName: string;
  existingModules: string[];
  suggestedSequence: number;
}

export const TopicEditModal: React.FC<TopicEditModalProps> = ({
  isOpen,
  onClose,
  onAddTopic,
  learningAreaId,
  learningAreaName,
  subjectName,
  existingModules,
  suggestedSequence,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [module, setModule] = useState(existingModules[0] || 'Module 1: Programming Fundamentals');
  const [customModule, setCustomModule] = useState('');
  const [sequenceNumber, setSequenceNumber] = useState(suggestedSequence);
  const [importance, setImportance] = useState<ImportanceLevel>('High');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Medium');
  const [estimatedMinutes, setEstimatedMinutes] = useState(60);
  const [notes, setNotes] = useState('');
  const [practiceQuestionInput, setPracticeQuestionInput] = useState('');
  const [practiceQuestionsList, setPracticeQuestionsList] = useState<string[]>([]);

  const handleAddQuestion = () => {
    if (!practiceQuestionInput.trim()) return;
    setPracticeQuestionsList([...practiceQuestionsList, practiceQuestionInput.trim()]);
    setPracticeQuestionInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const finalModule = customModule.trim() ? customModule.trim() : module;
    const newId = `${learningAreaId}_custom_${Date.now()}`;

    const newTopic: Topic = {
      id: newId,
      learningAreaId,
      learningAreaName,
      subjectId: 'sub_core',
      subjectName,
      module: finalModule,
      name: name.trim(),
      sequenceNumber: Number(sequenceNumber) || suggestedSequence,
      importance,
      difficulty,
      estimatedMinutes: Number(estimatedMinutes) || 60,
      status: 'Not Started',
      notes: notes.trim(),
      practiceQuestions: practiceQuestionsList.map((q, idx) => ({
        id: `${newId}_q_${idx + 1}`,
        question: q,
        completed: false,
      })),
      completionDate: null,
      revisionStatus: 'Not Reviewed',
      revisionCount: 0,
      nextRevisionDate: null,
      subtopics: [
        {
          id: `${newId}_sub_1`,
          name: `${name.trim()} Core Principles`,
          sequenceNumber: 1,
          importance,
          difficulty,
          estimatedMinutes: Math.round((Number(estimatedMinutes) || 60) / 2),
          status: 'Not Started',
          notes: '',
          practiceQuestions: [],
          completionDate: null,
          revisionStatus: 'Not Reviewed',
          tasks: [
            { id: `${newId}_task_1`, title: `Study documentation for ${name.trim()}`, completed: false },
            { id: `${newId}_task_2`, title: `Implement hands-on code examples`, completed: false }
          ],
        },
      ],
    };

    onAddTopic(newTopic);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between gap-4 bg-neutral-50/70">
          <div>
            <h3 className="font-bold text-neutral-900 text-sm tracking-tight">
              Add New Syllabus Topic
            </h3>
            <p className="text-[11px] text-neutral-500">
              Adding to: {learningAreaName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs flex-1">
          <div>
            <label className="block text-neutral-700 font-semibold mb-1">Topic Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Template Metaprogramming, Move Semantics..."
              className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-700 font-semibold mb-1">Module</label>
              <select
                value={module}
                onChange={(e) => setModule(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md text-neutral-800 focus:outline-hidden"
              >
                {existingModules.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
                <option value="custom">+ Create New Custom Module</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-700 font-semibold mb-1">Recommended Order #</label>
              <input
                type="number"
                min={1}
                value={sequenceNumber}
                onChange={(e) => setSequenceNumber(parseInt(e.target.value) || 1)}
                className="w-full px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md font-mono text-neutral-800"
              />
            </div>
          </div>

          {module === 'custom' && (
            <div>
              <label className="block text-neutral-700 font-semibold mb-1">Custom Module Name</label>
              <input
                type="text"
                value={customModule}
                onChange={(e) => setCustomModule(e.target.value)}
                placeholder="e.g. Module 9: Advanced Concurrency"
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md"
              />
            </div>
          )}

          <div className="grid grid-cols-3 gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <div>
              <label className="block text-neutral-600 font-medium mb-1">Importance</label>
              <select
                value={importance}
                onChange={(e) => setImportance(e.target.value as ImportanceLevel)}
                className="w-full px-2 py-1.5 bg-white border border-neutral-300 rounded-md text-neutral-800"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-600 font-medium mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                className="w-full px-2 py-1.5 bg-white border border-neutral-300 rounded-md text-neutral-800"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-600 font-medium mb-1">Est. Duration</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min={10}
                  step={5}
                  value={estimatedMinutes}
                  onChange={(e) => setEstimatedMinutes(parseInt(e.target.value) || 45)}
                  className="w-full px-2 py-1.5 bg-white border border-neutral-300 rounded-md font-mono"
                />
                <span className="text-neutral-500">min</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-neutral-700 font-semibold mb-1">Notes & Key Principles</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Summary notes, important edge cases, or documentation links..."
              className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg font-mono text-xs focus:outline-hidden"
            />
          </div>

          {/* Practice Questions */}
          <div>
            <label className="block text-neutral-700 font-semibold mb-1">Practice Questions</label>
            {practiceQuestionsList.length > 0 && (
              <ul className="space-y-1 mb-2">
                {practiceQuestionsList.map((q, i) => (
                  <li key={i} className="flex items-center justify-between p-2 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-neutral-800">Q{i + 1}. {q}</span>
                    <button
                      type="button"
                      onClick={() => setPracticeQuestionsList(practiceQuestionsList.filter((_, idx) => idx !== i))}
                      className="text-neutral-400 hover:text-red-600 px-1"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={practiceQuestionInput}
                onChange={(e) => setPracticeQuestionInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddQuestion();
                  }
                }}
                placeholder="Add a practice question..."
                className="flex-1 px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleAddQuestion}
                className="px-3 py-1.5 bg-neutral-200 hover:bg-neutral-300 rounded-md font-medium text-neutral-800"
              >
                Add
              </button>
            </div>
          </div>

          {/* Footer inside form */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Create Topic</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
