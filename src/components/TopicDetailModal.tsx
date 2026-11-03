import React, { useState } from 'react';
import {
  Topic,
  TopicStatus,
  ImportanceLevel,
  DifficultyLevel,
  RevisionStatus,
  PracticeQuestion,
  Subtopic,
  LearningTask,
} from '../types/syllabus.ts';
import {
  X,
  Save,
  Trash2,
  Plus,
  CheckCircle2,
  Circle,
  PlayCircle,
  RotateCcw,
  Clock,
  BookOpen,
  HelpCircle,
  Calendar,
  AlertTriangle,
} from 'lucide-react';

interface TopicDetailModalProps {
  topic: Topic | null;
  onClose: () => void;
  onSaveTopic: (updatedTopic: Topic) => void;
  onDeleteTopic: (topicId: string) => void;
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  onClose,
  onSaveTopic,
  onDeleteTopic,
}) => {
  if (!topic) return null;

  // Local state for editing
  const [name, setName] = useState(topic.name);
  const [module, setModule] = useState(topic.module);
  const [subjectName, setSubjectName] = useState(topic.subjectName);
  const [sequenceNumber, setSequenceNumber] = useState(topic.sequenceNumber);
  const [importance, setImportance] = useState<ImportanceLevel>(topic.importance);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(topic.difficulty);
  const [estimatedMinutes, setEstimatedMinutes] = useState(topic.estimatedMinutes);
  const [status, setStatus] = useState<TopicStatus>(topic.status);
  const [notes, setNotes] = useState(topic.notes);
  const [completionDate, setCompletionDate] = useState(topic.completionDate || '');
  const [revisionStatus, setRevisionStatus] = useState<RevisionStatus>(topic.revisionStatus);
  const [revisionCount, setRevisionCount] = useState(topic.revisionCount || 0);

  const [practiceQuestions, setPracticeQuestions] = useState<PracticeQuestion[]>(
    topic.practiceQuestions || []
  );
  const [subtopics, setSubtopics] = useState<Subtopic[]>(topic.subtopics || []);

  const [newQuestionText, setNewQuestionText] = useState('');
  const [newSubtopicName, setNewSubtopicName] = useState('');
  const [newTaskInput, setNewTaskInput] = useState<{ [subtopicId: string]: string }>({});
  const [isDeleting, setIsDeleting] = useState(false);

  // Status change handler that manages completion date
  const handleStatusChange = (newStatus: TopicStatus) => {
    setStatus(newStatus);
    if (newStatus === 'Completed' && !completionDate) {
      setCompletionDate(new Date().toISOString().split('T')[0]);
    } else if (newStatus !== 'Completed') {
      setCompletionDate('');
    }
  };

  // Practice questions handlers
  const handleToggleQuestion = (id: string) => {
    setPracticeQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, completed: !q.completed } : q))
    );
  };

  const handleAddQuestion = () => {
    if (!newQuestionText.trim()) return;
    const newQ: PracticeQuestion = {
      id: `${topic.id}_q_${Date.now()}`,
      question: newQuestionText.trim(),
      completed: false,
    };
    setPracticeQuestions((prev) => [...prev, newQ]);
    setNewQuestionText('');
  };

  const handleDeleteQuestion = (id: string) => {
    setPracticeQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  // Subtopics & Tasks handlers
  const handleToggleTask = (subtopicId: string, taskId: string) => {
    setSubtopics((prev) =>
      prev.map((sub) => {
        if (sub.id !== subtopicId) return sub;
        return {
          ...sub,
          tasks: sub.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
        };
      })
    );
  };

  const handleAddTask = (subtopicId: string) => {
    const text = newTaskInput[subtopicId];
    if (!text || !text.trim()) return;

    setSubtopics((prev) =>
      prev.map((sub) => {
        if (sub.id !== subtopicId) return sub;
        const newTask: LearningTask = {
          id: `${sub.id}_task_${Date.now()}`,
          title: text.trim(),
          completed: false,
        };
        return { ...sub, tasks: [...sub.tasks, newTask] };
      })
    );

    setNewTaskInput((prev) => ({ ...prev, [subtopicId]: '' }));
  };

  const handleDeleteTask = (subtopicId: string, taskId: string) => {
    setSubtopics((prev) =>
      prev.map((sub) => {
        if (sub.id !== subtopicId) return sub;
        return { ...sub, tasks: sub.tasks.filter((t) => t.id !== taskId) };
      })
    );
  };

  const handleAddSubtopic = () => {
    if (!newSubtopicName.trim()) return;
    const newSub: Subtopic = {
      id: `${topic.id}_sub_${Date.now()}`,
      name: newSubtopicName.trim(),
      sequenceNumber: subtopics.length + 1,
      importance,
      difficulty,
      estimatedMinutes: 30,
      status: 'Not Started',
      notes: '',
      practiceQuestions: [],
      completionDate: null,
      revisionStatus: 'Not Reviewed',
      tasks: [],
    };
    setSubtopics((prev) => [...prev, newSub]);
    setNewSubtopicName('');
  };

  const handleDeleteSubtopic = (subId: string) => {
    setSubtopics((prev) => prev.filter((s) => s.id !== subId));
  };

  // Save changes
  const handleSave = () => {
    const updated: Topic = {
      ...topic,
      name,
      module,
      subjectName,
      sequenceNumber: Number(sequenceNumber) || topic.sequenceNumber,
      importance,
      difficulty,
      estimatedMinutes: Number(estimatedMinutes) || topic.estimatedMinutes,
      status,
      notes,
      completionDate: completionDate || null,
      revisionStatus,
      revisionCount: Number(revisionCount) || 0,
      practiceQuestions,
      subtopics,
    };
    onSaveTopic(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between gap-4 bg-neutral-50/70">
          <div className="flex items-center gap-2 text-xs text-neutral-500 flex-wrap">
            <span>{topic.learningAreaName}</span>
            <span aria-hidden="true">·</span>
            <span>{subjectName}</span>
            {topic.sscCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono font-bold bg-neutral-200 text-neutral-800 px-1.5 py-0.2 rounded text-[10px]">
                  Category: {topic.sscCategory}
                </span>
              </>
            )}
            {topic.examTier && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[11px] text-neutral-600 font-medium">{topic.examTier}</span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Main Title & Sequence edit */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <label className="text-neutral-500 font-medium">Order #</label>
                <input
                  type="number"
                  min={1}
                  value={sequenceNumber}
                  onChange={(e) => setSequenceNumber(parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 bg-white border border-neutral-300 rounded-md font-mono font-semibold text-center text-neutral-900 focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Topic Name"
                  className="w-full text-base sm:text-lg font-bold text-neutral-900 px-3 py-1.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 rounded-lg focus:outline-hidden transition-all"
                />
              </div>
            </div>

            {/* Module Name Selector / Editor */}
            <div className="flex items-center gap-2">
              <label className="text-neutral-500 font-medium shrink-0">Module:</label>
              <input
                type="text"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-800 focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>

          {/* Core Properties Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/70">
            {/* Status */}
            <div>
              <label className="block text-neutral-500 font-medium mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => handleStatusChange(e.target.value as TopicStatus)}
                className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md font-medium text-neutral-800 focus:outline-hidden"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Importance */}
            <div>
              <label className="block text-neutral-500 font-medium mb-1">Importance</label>
              <select
                value={importance}
                onChange={(e) => setImportance(e.target.value as ImportanceLevel)}
                className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md font-medium text-neutral-800 focus:outline-hidden"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-neutral-500 font-medium mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md font-medium text-neutral-800 focus:outline-hidden"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Estimated Minutes */}
            <div>
              <label className="block text-neutral-500 font-medium mb-1">Est. Duration</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min={5}
                  step={5}
                  value={estimatedMinutes}
                  onChange={(e) => setEstimatedMinutes(parseInt(e.target.value) || 45)}
                  className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md font-mono text-neutral-800 focus:outline-hidden"
                />
                <span className="text-neutral-500">min</span>
              </div>
            </div>
          </div>

          {/* Revision & Completion Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/70">
            <div>
              <label className="block text-neutral-500 font-medium mb-1">Revision Status</label>
              <select
                value={revisionStatus}
                onChange={(e) => setRevisionStatus(e.target.value as RevisionStatus)}
                className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md text-neutral-800 focus:outline-hidden"
              >
                <option value="Not Reviewed">Not Reviewed</option>
                <option value="Needs Revision">Needs Revision</option>
                <option value="In Review">In Review</option>
                <option value="Mastered">Mastered</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-500 font-medium mb-1">Revision Count</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={revisionCount}
                  onChange={(e) => setRevisionCount(parseInt(e.target.value) || 0)}
                  className="w-20 px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md font-mono text-neutral-800 focus:outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => {
                    setRevisionCount((prev) => prev + 1);
                    setRevisionStatus('Mastered');
                  }}
                  className="px-2 py-1 text-xs bg-neutral-200 hover:bg-neutral-300 rounded font-medium text-neutral-700"
                >
                  +1 Review
                </button>
              </div>
            </div>

            <div>
              <label className="block text-neutral-500 font-medium mb-1">Completion Date</label>
              <div className="flex items-center gap-1">
                <input
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded-md text-neutral-800 focus:outline-hidden font-mono"
                />
                <button
                  type="button"
                  onClick={() => setCompletionDate(new Date().toISOString().split('T')[0])}
                  className="px-2 py-1 text-xs bg-neutral-200 hover:bg-neutral-300 rounded text-neutral-700 font-medium whitespace-nowrap"
                >
                  Today
                </button>
              </div>
            </div>
          </div>

          {/* Hierarchy Section: Subtopics & Actionable Tasks */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-neutral-900 text-sm">
                  Subtopics & Learning Tasks
                </h4>
                <p className="text-neutral-500 text-[11px]">
                  Hierarchy: Topic → Subtopic → Learning Task
                </p>
              </div>
            </div>

            {/* Subtopic list */}
            <div className="space-y-3">
              {subtopics.map((sub, sIdx) => {
                const subTaskInputValue = newTaskInput[sub.id] || '';
                return (
                  <div
                    key={sub.id}
                    className="border border-neutral-200 rounded-lg p-3 bg-neutral-50/50 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="w-5 h-5 rounded bg-neutral-200 text-neutral-700 font-mono text-[10px] flex items-center justify-center font-bold">
                          {sIdx + 1}
                        </span>
                        <span className="font-medium text-neutral-900 text-xs">
                          {sub.name}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDeleteSubtopic(sub.id)}
                        className="text-neutral-400 hover:text-red-600 p-1 rounded transition-colors"
                        title="Delete subtopic"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Actionable Tasks under Subtopic */}
                    <div className="pl-6 space-y-1.5">
                      {sub.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between gap-2 py-1 px-2 rounded bg-white border border-neutral-200/80 group"
                        >
                          <label className="flex items-center gap-2 cursor-pointer flex-1">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => handleToggleTask(sub.id, task.id)}
                              className="w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900 focus:ring-0"
                            />
                            <span
                              className={`text-xs ${
                                task.completed
                                  ? 'text-neutral-400 line-through'
                                  : 'text-neutral-800'
                              }`}
                            >
                              {task.title}
                            </span>
                          </label>

                          <button
                            onClick={() => handleDeleteTask(sub.id, task.id)}
                            className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-600 p-0.5 transition-opacity"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}

                      {/* Add task inline input */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="text"
                          value={subTaskInputValue}
                          onChange={(e) =>
                            setNewTaskInput({ ...newTaskInput, [sub.id]: e.target.value })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddTask(sub.id);
                            }
                          }}
                          placeholder="Add a new learning task under this subtopic..."
                          className="flex-1 px-2.5 py-1 text-xs bg-white border border-neutral-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddTask(sub.id)}
                          className="px-2.5 py-1 text-xs bg-neutral-900 hover:bg-neutral-800 text-white rounded-md font-medium"
                        >
                          Add Task
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add New Subtopic */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={newSubtopicName}
                  onChange={(e) => setNewSubtopicName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSubtopic();
                    }
                  }}
                  placeholder="Create new subtopic..."
                  className="flex-1 px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={handleAddSubtopic}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg font-medium"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Subtopic</span>
                </button>
              </div>
            </div>
          </div>

          {/* Practice Questions Section */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-neutral-500" />
              <span>Practice Questions & Exercises</span>
            </h4>

            <div className="space-y-2">
              {practiceQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="flex items-start justify-between gap-2 p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg group"
                >
                  <label className="flex items-start gap-2.5 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={q.completed}
                      onChange={() => handleToggleQuestion(q.id)}
                      className="mt-0.5 w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900 focus:ring-0"
                    />
                    <div className="text-xs">
                      <span className="font-mono text-neutral-400 mr-1.5 font-medium">Q{idx + 1}.</span>
                      <span
                        className={
                          q.completed ? 'text-neutral-400 line-through' : 'text-neutral-800'
                        }
                      >
                        {q.question}
                      </span>
                    </div>
                  </label>

                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-600 p-1 transition-opacity"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {/* Add practice question */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddQuestion();
                    }
                  }}
                  placeholder="Add a new practice question or coding challenge..."
                  className="flex-1 px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={handleAddQuestion}
                  className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg font-medium"
                >
                  Add Question
                </button>
              </div>
            </div>
          </div>

          {/* Notes & Guidance Editor */}
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-500" />
              <span>Study Notes & Reference Summary</span>
            </h4>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your study notes, key formulas, edge cases, compiler flags, or syntax reminders..."
              className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-800 font-mono focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3">
          {isDeleting ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-600 font-medium">Permanently delete?</span>
              <button
                type="button"
                onClick={() => {
                  onDeleteTopic(topic.id);
                  onClose();
                }}
                className="px-3 py-1.5 text-xs bg-red-600 hover:bg-red-700 text-white rounded-md font-medium"
              >
                Yes, Delete
              </button>
              <button
                type="button"
                onClick={() => setIsDeleting(false)}
                className="px-3 py-1.5 text-xs bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-md font-medium"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsDeleting(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete Topic</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-200/60 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
