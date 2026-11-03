import React, { useState, useMemo } from 'react';
import { Topic, TopicStatus, DifficultyLevel, ImportanceLevel, RevisionStatus } from '../types/syllabus.ts';
import {
  Search,
  Filter,
  CheckCircle2,
  Circle,
  PlayCircle,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  Clock,
  BookOpen,
  HelpCircle,
  MoreVertical,
  Plus,
  SlidersHorizontal,
} from 'lucide-react';
import { getSscCategory } from '../services/sscSyllabusService.ts';

interface TopicListProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
  onUpdateTopicStatus: (topicId: string, status: TopicStatus) => void;
  onMoveTopicSequence: (topicId: string, direction: 'up' | 'down') => void;
  onDeleteTopic: (topicId: string) => void;
  onOpenNewTopic: () => void;
}

export const TopicList: React.FC<TopicListProps> = ({
  topics,
  onSelectTopic,
  onUpdateTopicStatus,
  onMoveTopicSequence,
  onDeleteTopic,
  onOpenNewTopic,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');
  const [selectedRevision, setSelectedRevision] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'sequence' | 'importance' | 'difficulty' | 'estimatedTime'>('sequence');
  const [selectedSscCategory, setSelectedSscCategory] = useState<string>('all');

  const isSsc = topics.length > 0 && topics[0].learningAreaId === 'la_ssccgl';

  // Extract unique modules
  const modules = useMemo(() => {
    const set = new Set<string>();
    topics.forEach((t) => {
      if (t.module) set.add(t.module);
    });
    return Array.from(set);
  }, [topics]);

  // Filtered and sorted topics
  const filteredTopics = useMemo(() => {
    return topics
      .filter((topic) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = topic.name.toLowerCase().includes(q);
          const matchNotes = topic.notes.toLowerCase().includes(q);
          const matchModule = topic.module.toLowerCase().includes(q);
          const matchQuestions = topic.practiceQuestions.some((pq) =>
            pq.question.toLowerCase().includes(q)
          );
          if (!matchName && !matchNotes && !matchModule && !matchQuestions) return false;
        }

        if (isSsc && selectedSscCategory !== 'all') {
          const cat = topic.sscCategory || getSscCategory(topic.module);
          if (selectedSscCategory === 'Rotating') {
            if (cat !== 'Computer Knowledge' && cat !== 'DEST') return false;
          } else {
            if (cat !== selectedSscCategory) return false;
          }
        }

        if (selectedModule !== 'all' && topic.module !== selectedModule) return false;
        if (selectedStatus !== 'all' && topic.status !== selectedStatus) return false;
        if (selectedDifficulty !== 'all' && topic.difficulty !== selectedDifficulty) return false;
        if (selectedImportance !== 'all' && topic.importance !== selectedImportance) return false;
        if (selectedRevision !== 'all') {
          if (selectedRevision === 'needs_revision' && topic.revisionStatus !== 'Needs Revision') return false;
          if (selectedRevision === 'reviewed' && topic.revisionStatus === 'Not Reviewed') return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'sequence') {
          return a.sequenceNumber - b.sequenceNumber;
        }
        if (sortBy === 'importance') {
          const rank = { High: 3, Medium: 2, Low: 1 };
          return rank[b.importance] - rank[a.importance];
        }
        if (sortBy === 'difficulty') {
          const rank = { Easy: 1, Medium: 2, Hard: 3 };
          return rank[a.difficulty] - rank[b.difficulty];
        }
        if (sortBy === 'estimatedTime') {
          return a.estimatedMinutes - b.estimatedMinutes;
        }
        return 0;
      });
  }, [
    topics,
    searchQuery,
    selectedModule,
    selectedStatus,
    selectedDifficulty,
    selectedImportance,
    selectedRevision,
    sortBy,
  ]);

  const handleStatusCycle = (e: React.MouseEvent, topic: Topic) => {
    e.stopPropagation();
    let nextStatus: TopicStatus = 'In Progress';
    if (topic.status === 'Not Started') nextStatus = 'In Progress';
    else if (topic.status === 'In Progress') nextStatus = 'Completed';
    else nextStatus = 'Not Started';
    onUpdateTopicStatus(topic.id, nextStatus);
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, concepts, practice questions, or notes..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-50 hover:bg-neutral-100/80 focus:bg-white border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-neutral-900 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Module Selector */}
          <div className="flex items-center gap-2">
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-neutral-700 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 max-w-[220px] truncate"
            >
              <option value="all">All Modules ({modules.length})</option>
              {modules.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-neutral-700 focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
            >
              <option value="sequence">Recommended Order (#)</option>
              <option value="importance">Priority (High to Low)</option>
              <option value="difficulty">Difficulty (Easy to Hard)</option>
              <option value="estimatedTime">Study Duration</option>
            </select>
          </div>
        </div>

        {/* SSC Subject-Wise Category Tabs */}
        {isSsc && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1 border-t border-neutral-100">
            <span className="text-neutral-500 font-semibold mr-1 shrink-0">Category:</span>
            {[
              { id: 'all', label: 'All Topics (251)' },
              { id: 'English', label: 'English (35)' },
              { id: 'Reasoning', label: 'Reasoning (28)' },
              { id: 'Maths', label: 'Maths (42)' },
              { id: 'Finance', label: 'Finance (80)' },
              { id: 'GK', label: 'GK (49)' },
              { id: 'Rotating', label: 'Rotating Practice (17)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSscCategory(tab.id)}
                className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                  selectedSscCategory === tab.id
                    ? 'bg-neutral-900 text-white shadow-2xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Second row: Segmented Quick Filters */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-100 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter */}
            <div className="flex items-center gap-1 p-0.5 bg-neutral-100 rounded-md">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  selectedStatus === 'all' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => setSelectedStatus('Not Started')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  selectedStatus === 'Not Started' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
                }`}
              >
                Not Started
              </button>
              <button
                onClick={() => setSelectedStatus('In Progress')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  selectedStatus === 'In Progress' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setSelectedStatus('Completed')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  selectedStatus === 'Completed' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
                }`}
              >
                Completed
              </button>
            </div>

            {/* Importance filter */}
            <select
              value={selectedImportance}
              onChange={(e) => setSelectedImportance(e.target.value)}
              className="text-[11px] bg-neutral-50 border border-neutral-200 rounded-md px-2 py-1 text-neutral-600 focus:outline-hidden"
            >
              <option value="all">All Importance</option>
              <option value="High">High Importance</option>
              <option value="Medium">Medium Importance</option>
              <option value="Low">Low Importance</option>
            </select>

            {/* Difficulty filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="text-[11px] bg-neutral-50 border border-neutral-200 rounded-md px-2 py-1 text-neutral-600 focus:outline-hidden"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            {/* Revision filter */}
            <button
              onClick={() =>
                setSelectedRevision(selectedRevision === 'needs_revision' ? 'all' : 'needs_revision')
              }
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors border ${
                selectedRevision === 'needs_revision'
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <RotateCcw className="w-3 h-3 text-amber-600" />
              <span>Needs Revision</span>
            </button>
          </div>

          {/* Result counter */}
          <div className="text-[11px] text-neutral-500 font-mono tabular-nums">
            Showing {filteredTopics.length} of {topics.length} topics
          </div>
        </div>
      </div>

      {/* Topics High-Density Table / List */}
      {filteredTopics.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-xl p-12 text-center shadow-xs">
          <BookOpen className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-neutral-800 mb-1">No topics match your filters</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
            Try adjusting your search query, clearing filters, or create a custom topic.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedModule('all');
              setSelectedStatus('all');
              setSelectedDifficulty('all');
              setSelectedImportance('all');
              setSelectedRevision('all');
            }}
            className="text-xs font-medium text-neutral-900 underline hover:text-neutral-700"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs divide-y divide-neutral-100">
          {filteredTopics.map((topic, index) => {
            const completedTasks = topic.subtopics.reduce(
              (acc, sub) => acc + sub.tasks.filter((t) => t.completed).length,
              0
            );
            const totalTasks = topic.subtopics.reduce((acc, sub) => acc + sub.tasks.length, 0);
            const completedQuestions = topic.practiceQuestions.filter((q) => q.completed).length;

            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className={`group px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50/80 transition-colors cursor-pointer ${
                  topic.status === 'Completed' ? 'bg-neutral-50/40' : ''
                }`}
              >
                {/* Left: Sequence, Status Toggle & Title */}
                <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                  {/* Sequence Order Badge */}
                  <div
                    title="Recommended Learning Order Sequence Number"
                    className="w-7 h-7 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-mono font-semibold text-neutral-700 tabular-nums shrink-0"
                  >
                    {topic.sequenceNumber}
                  </div>

                  {/* Quick Status Toggle Button */}
                  <button
                    type="button"
                    onClick={(e) => handleStatusCycle(e, topic)}
                    title={`Current Status: ${topic.status} (Click to advance)`}
                    className="mt-0.5 sm:mt-0 p-1 rounded-md text-neutral-400 hover:text-neutral-900 transition-colors shrink-0"
                  >
                    {topic.status === 'Completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : topic.status === 'In Progress' ? (
                      <PlayCircle className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-neutral-300 group-hover:text-neutral-400" />
                    )}
                  </button>

                  {/* Title & Metadata */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {isSsc && (
                        <span className="font-mono text-[10px] font-bold bg-neutral-100 text-neutral-800 px-1.5 py-0.2 rounded border border-neutral-200">
                          {topic.sscCategory || getSscCategory(topic.module)}
                        </span>
                      )}

                      <span
                        className={`text-sm font-semibold tracking-tight transition-colors ${
                          topic.status === 'Completed'
                            ? 'text-neutral-500 line-through'
                            : 'text-neutral-900 group-hover:text-neutral-950'
                        }`}
                      >
                        {topic.name}
                      </span>

                      {topic.revisionStatus === 'Needs Revision' && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded font-medium">
                          Needs Revision
                        </span>
                      )}
                    </div>

                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5 flex-wrap">
                      {isSsc && topic.examTier && (
                        <>
                          <span className="text-neutral-700 font-medium">{topic.examTier}</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="text-neutral-600">{topic.module.split(':')[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span>Importance: <strong className="font-medium text-neutral-700">{topic.importance}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span>Difficulty: <strong className="font-medium text-neutral-700">{topic.difficulty}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span className="font-mono tabular-nums">{topic.estimatedMinutes}m</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Progress indicators & Reorder actions */}
                <div className="flex items-center gap-4 sm:justify-end shrink-0 pl-10 sm:pl-0">
                  {/* Task & Practice counts */}
                  <div className="text-right hidden md:block text-xs text-neutral-500">
                    <div>
                      <span className="font-mono tabular-nums">{completedTasks}/{totalTasks}</span> tasks
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      <span className="font-mono tabular-nums">{completedQuestions}/{topic.practiceQuestions.length}</span> practice
                    </div>
                  </div>

                  {/* Manual sequence shift up/down buttons */}
                  <div className="flex items-center gap-0.5 border border-neutral-200 rounded-md bg-neutral-50 p-0.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onMoveTopicSequence(topic.id, 'up');
                      }}
                      disabled={topic.sequenceNumber === 1}
                      title="Move Up in Recommended Sequence"
                      className="p-1 text-neutral-500 hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-500 rounded transition-colors"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onMoveTopicSequence(topic.id, 'down');
                      }}
                      disabled={topic.sequenceNumber === topics.length}
                      title="Move Down in Recommended Sequence"
                      className="p-1 text-neutral-500 hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-500 rounded transition-colors"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Status chip (interactive) */}
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap ${
                      topic.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : topic.status === 'In Progress'
                        ? 'bg-blue-50 text-blue-800 border border-blue-200'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {topic.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
