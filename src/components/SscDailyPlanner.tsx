import React, { useState, useEffect, useMemo } from 'react';
import { Topic, TopicStatus, DifficultyLevel } from '../types/syllabus.ts';
import {
  SscMainCategory,
  SSC_MAIN_CATEGORIES,
  SSC_CATEGORY_CONFIG,
  calculateSscProgress,
  generateSscSubjectDailyPlan,
  restorePostponedTopic,
  getStoredPostponedTopics,
  SscDailyPlanResult,
} from '../services/sscSyllabusService.ts';
import {
  CheckCircle2,
  Circle,
  PlayCircle,
  Clock,
  Sparkles,
  AlertCircle,
  ArrowRight,
  RotateCw,
  BookOpen,
  Calendar,
  Layers,
  Keyboard,
  Monitor,
  ChevronRight,
  Undo2,
  Check,
} from 'lucide-react';

interface SscDailyPlannerProps {
  topics: Topic[];
  onUpdateTopicStatus: (topicId: string, status: TopicStatus) => void;
  onSelectTopic: (topic: Topic) => void;
  onClose?: () => void;
}

export const SscDailyPlanner: React.FC<SscDailyPlannerProps> = ({
  topics,
  onUpdateTopicStatus,
  onSelectTopic,
  onClose,
}) => {
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);

  // Study time budget (default: 210 minutes for 5 subjects)
  const [availableMinutes, setAvailableMinutes] = useState<number>(210);
  const [includeComputer, setIncludeComputer] = useState<boolean>(true);
  const [includeDest, setIncludeDest] = useState<boolean>(true);
  const [selectedPostponeTopicId, setSelectedPostponeTopicId] = useState<string | null>(null);

  // Plan result state
  const [planResult, setPlanResult] = useState<SscDailyPlanResult | null>(null);

  // Calculate real-time overall and category progress
  const sscProgress = useMemo(() => calculateSscProgress(topics), [topics]);

  // Generate or refresh the plan
  const generatePlan = (overridePostponeId?: string) => {
    const result = generateSscSubjectDailyPlan({
      allTopics: topics,
      availableMinutes,
      todayDate: todayStr,
      includeComputerKnowledge: includeComputer,
      includeDest: includeDest,
      manualPostponeEasyId: overridePostponeId,
    });
    setPlanResult(result);
  };

  // Initial load
  useEffect(() => {
    generatePlan();
  }, [topics, availableMinutes, includeComputer, includeDest, todayStr]);

  // Handle topic status cycle (Not Started -> In Progress -> Completed)
  const handleToggleStatus = (topicId: string, currentStatus: TopicStatus) => {
    let nextStatus: TopicStatus = 'In Progress';
    if (currentStatus === 'Not Started') nextStatus = 'In Progress';
    else if (currentStatus === 'In Progress') nextStatus = 'Completed';
    else nextStatus = 'Not Started';

    onUpdateTopicStatus(topicId, nextStatus);
  };

  // Handle restoring a postponed topic back to active study
  const handleRestorePostponed = (topicId: string) => {
    restorePostponedTopic(topicId);
    generatePlan();
  };

  // Handle manually postponing an easy topic to relieve pressure
  const handlePostponeEasyTopic = (topicId: string) => {
    generatePlan(topicId);
  };

  // Completion calculation for today's active items
  const activeItems = planResult?.activeItems || [];
  const completedCount = activeItems.filter((i) => {
    const live = topics.find((t) => t.id === i.topicId);
    return live?.status === 'Completed';
  }).length;
  const inProgressCount = activeItems.filter((i) => {
    const live = topics.find((t) => t.id === i.topicId);
    return live?.status === 'In Progress';
  }).length;

  const totalMinutes = planResult?.totalEstimatedMinutes || 0;
  const completedMinutes = activeItems
    .filter((i) => {
      const live = topics.find((t) => t.id === i.topicId);
      return live?.status === 'Completed';
    })
    .reduce((sum, i) => sum + i.estimatedMinutes, 0);

  const dailyPercentage = activeItems.length > 0 ? Math.round((completedCount / activeItems.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 1. System Wordmark & Overview Banner */}
      <div className="bg-white border border-neutral-200 rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-1">
              <span className="font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">
                SSC CGL AAO
              </span>
              <span aria-hidden="true">·</span>
              <span>5-Subject Daily Learning System</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">Active Engine</span>
            </div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Subject-Wise Daily Study Dashboard
            </h2>
            <p className="text-xs text-neutral-600 mt-1 max-w-2xl leading-relaxed">
              Every day assigns exactly 1 topic across the 5 core categories in recommended sequence: <strong>English</strong>, <strong>Reasoning</strong>, <strong>Maths</strong>, <strong>Finance</strong>, and <strong>General Awareness (GK)</strong>. When a difficult topic requires extra time, FocusMe automatically postpones an easy topic to tomorrow to preserve quality retention.
            </p>
          </div>

          {/* Overall SSC Progress Bar */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 sm:min-w-[260px]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-neutral-600 font-medium">Overall SSC AAO Progress</span>
              <span className="font-mono font-bold text-neutral-900 tabular-nums">
                {sscProgress.percentage}%
              </span>
            </div>
            <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden mb-1.5">
              <div
                className="bg-neutral-900 h-full rounded-full transition-all duration-300"
                style={{ width: `${sscProgress.percentage}%` }}
              />
            </div>
            <div className="text-[11px] text-neutral-500 font-mono tabular-nums flex justify-between">
              <span>{sscProgress.completed} of {sscProgress.total} completed</span>
              <span>{sscProgress.remaining} remaining</span>
            </div>
          </div>
        </div>

        {/* 2. 5 Main Subject Categories Progress Matrix */}
        <div className="pt-4 space-y-2">
          <div className="text-xs font-semibold text-neutral-800">
            Syllabus Coverage by Daily Category
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SSC_MAIN_CATEGORIES.map((cat) => {
              const stat = sscProgress.mainCategoryProgress[cat];
              return (
                <div
                  key={cat}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 hover:border-neutral-300 transition-colors"
                >
                  <div className="text-xs font-bold text-neutral-900 truncate">
                    {cat}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                    {stat.completed}/{stat.total} topics
                  </div>
                  <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden my-2">
                    <div
                      className="bg-neutral-800 h-full rounded-full transition-all duration-300"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono tabular-nums">
                    <span>{stat.percentage}%</span>
                    <span>{stat.remaining} left</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rotating Practice Strip (Computer Knowledge & DEST) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-neutral-50/70 border border-neutral-200/80 rounded-lg p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-neutral-500" />
                <div>
                  <span className="font-semibold text-neutral-800">Computer Knowledge</span>
                  <span className="text-[11px] text-neutral-500 ml-1.5">(2–3 sessions/wk)</span>
                </div>
              </div>
              <div className="font-mono text-[11px] text-neutral-600 tabular-nums">
                {sscProgress.rotatingProgress['Computer Knowledge'].completed} / {sscProgress.rotatingProgress['Computer Knowledge'].total} completed
              </div>
            </div>

            <div className="bg-neutral-50/70 border border-neutral-200/80 rounded-lg p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-neutral-500" />
                <div>
                  <span className="font-semibold text-neutral-800">Data Entry Speed Test (DEST)</span>
                  <span className="text-[11px] text-neutral-500 ml-1.5">(10–15m, 3–5 days/wk)</span>
                </div>
              </div>
              <div className="font-mono text-[11px] text-neutral-600 tabular-nums">
                {sscProgress.rotatingProgress['DEST'].completed} / {sscProgress.rotatingProgress['DEST'].total} completed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Daily Workload & Time Configuration */}
      <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
              Adaptive Daily Workload Budget
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Select your available study time. FocusMe calculates topic durations (Easy: 25–35m, Medium: 40–50m, Hard: 60–90m) and adapts the allocation.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => generatePlan()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Refresh Plan</span>
            </button>
          </div>
        </div>

        {/* Time Budget Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-neutral-700 mr-1">Available Study Time:</span>
          {[120, 150, 180, 210, 240, 270, 300].map((mins) => (
            <button
              key={mins}
              type="button"
              onClick={() => setAvailableMinutes(mins)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all font-mono tabular-nums border ${
                availableMinutes === mins
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {mins < 60 ? `${mins}m` : `${mins / 60}h${mins % 60 ? ` ${mins % 60}m` : ''}`}
            </button>
          ))}
          <div className="flex items-center gap-1.5 ml-auto text-xs">
            <span className="text-neutral-500 font-mono tabular-nums">Custom:</span>
            <input
              type="number"
              min={60}
              step={15}
              value={availableMinutes}
              onChange={(e) => setAvailableMinutes(parseInt(e.target.value) || 180)}
              className="w-16 px-2 py-1 bg-white border border-neutral-300 rounded-lg text-center font-mono text-xs"
            />
            <span className="text-neutral-500">mins</span>
          </div>
        </div>

        {/* Practice Toggles */}
        <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-neutral-100 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-neutral-700 font-medium">
            <input
              type="checkbox"
              checked={includeComputer}
              onChange={(e) => setIncludeComputer(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900"
            />
            <span>Include Computer Knowledge Module (+25m)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-neutral-700 font-medium">
            <input
              type="checkbox"
              checked={includeDest}
              onChange={(e) => setIncludeDest(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900"
            />
            <span>Include DEST Typing Practice Drill (+15m)</span>
          </label>
        </div>
      </div>

      {/* 4. Difficult Topic Replacement Rule Explanation Banner */}
      {planResult?.hasHardTopic && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <span>Difficult Topic Replacement Rule Triggered</span>
              <span className="font-mono text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-semibold uppercase">
                Workload Protection
              </span>
            </div>
            <p className="text-amber-900/90 leading-relaxed">
              Today's schedule includes a high-intensity Hard topic: <strong>{planResult.hardTopicName}</strong> (~75m).
              To ensure deep conceptual mastery and prevent mental burnout, FocusMe has automatically preserved this hard topic and rescheduled an easy topic to tomorrow's plan.
            </p>
            {planResult.postponedReasons.length > 0 && (
              <div className="pt-1 text-[11px] text-amber-800 font-medium">
                {planResult.postponedReasons.map((r, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span>↳</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Today's Plan Summary Header */}
      <div className="bg-white border border-neutral-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-600" />
              <span>Today's 5-Subject Agenda</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums text-xs font-semibold text-neutral-600">
                {activeItems.length} Core Topics ({totalMinutes}m allocated)
              </span>
            </div>
            <div className="text-xs text-neutral-500 font-mono tabular-nums">
              Completed: {completedCount} of {activeItems.length} topics ({completedMinutes} of {totalMinutes}m) · {dailyPercentage}%
            </div>
          </div>

          <div className="w-full sm:w-48 bg-neutral-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${dailyPercentage}%` }}
            />
          </div>
        </div>

        {/* 6. Active 5-Subject Topic Cards */}
        {activeItems.length === 0 ? (
          <div className="p-8 text-center bg-neutral-50 rounded-xl border border-neutral-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-bold text-neutral-900 text-sm">All SSC topics completed!</h4>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mt-1">
              Outstanding work! You have finished every sequenced topic across English, Reasoning, Maths, Finance, and GK.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeItems.map((item, index) => {
              const liveTopic = topics.find((t) => t.id === item.topicId);
              const status: TopicStatus = liveTopic?.status || 'Not Started';
              const isCompleted = status === 'Completed';
              const isInProgress = status === 'In Progress';
              const isNextToStudy =
                !isCompleted && activeItems.slice(0, index).every((i) => {
                  const t = topics.find((top) => top.id === i.topicId);
                  return t?.status === 'Completed';
                });

              const difficultyColor =
                item.difficulty === 'Hard'
                  ? 'bg-rose-50 text-rose-800 border-rose-200'
                  : item.difficulty === 'Medium'
                  ? 'bg-blue-50 text-blue-800 border-blue-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <div
                  key={item.topicId}
                  className={`p-4 rounded-xl border transition-all ${
                    isCompleted
                      ? 'bg-neutral-50/70 border-neutral-200 opacity-75'
                      : isNextToStudy
                      ? 'bg-white border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Left: Category Badge & Details */}
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {/* Check / Status Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(item.topicId, status)}
                        title={`Click to advance status (Current: ${status})`}
                        className="mt-0.5 text-neutral-400 hover:text-neutral-900 shrink-0"
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isInProgress ? (
                          <PlayCircle className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-neutral-300 hover:text-neutral-500" />
                        )}
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Main Category Badge */}
                          <span className="font-bold text-xs bg-neutral-900 text-white px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                            {item.sscCategory}
                          </span>

                          {isNextToStudy && (
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.2 rounded uppercase">
                              Next to Study
                            </span>
                          )}

                          <span className="font-mono text-xs text-neutral-400 font-semibold">
                            #{item.sequenceNumber}
                          </span>

                          <span
                            onClick={() => {
                              if (liveTopic) onSelectTopic(liveTopic);
                            }}
                            className={`font-bold text-sm cursor-pointer hover:underline ${
                              isCompleted ? 'line-through text-neutral-400' : 'text-neutral-900'
                            }`}
                          >
                            {item.topicName}
                          </span>
                        </div>

                        {/* Metadata Row */}
                        <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1 flex-wrap">
                          <span className="text-neutral-600">{item.module}</span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={`text-[11px] font-medium px-1.5 py-0.2 rounded border ${difficultyColor}`}
                          >
                            {item.difficulty}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>Importance: {item.importance}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 font-mono tabular-nums text-neutral-700 font-medium">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            {item.estimatedMinutes}m
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Quick Action Controls */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {status === 'Not Started' && (
                        <button
                          type="button"
                          onClick={() => onUpdateTopicStatus(item.topicId, 'In Progress')}
                          className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-md transition-colors"
                        >
                          Start Study
                        </button>
                      )}

                      {status === 'In Progress' && (
                        <button
                          type="button"
                          onClick={() => onUpdateTopicStatus(item.topicId, 'Completed')}
                          className="px-2.5 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-md transition-colors flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Mark Done</span>
                        </button>
                      )}

                      {isCompleted && (
                        <span className="text-xs font-medium text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </span>
                      )}

                      {/* Detail Inspector Button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (liveTopic) onSelectTopic(liveTopic);
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                      >
                        Inspect
                      </button>

                      {/* Manual Postpone Button (only if not completed and easy/medium) */}
                      {!isCompleted && item.difficulty === 'Easy' && (
                        <button
                          type="button"
                          onClick={() => handlePostponeEasyTopic(item.topicId)}
                          title="Postpone this easy topic to tomorrow to relieve today's workload"
                          className="px-2 py-1 text-[11px] text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors"
                        >
                          Postpone
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 7. Rotating Practice Sessions (Computer Knowledge & DEST) */}
      {(planResult?.rotatingPractice.computerKnowledge || planResult?.rotatingPractice.destTyping) && (
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
            <div>
              <div className="text-xs font-bold text-neutral-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-neutral-700" />
                <span>Additional Rotating Practice (Tier 2 Paper 1)</span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Separate from the 5 core subjects: scheduled 2–3 times/week for Computer Knowledge and 3–5 times/week for DEST typing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Computer Knowledge Session */}
            {planResult?.rotatingPractice.computerKnowledge && (
              (() => {
                const item = planResult.rotatingPractice.computerKnowledge;
                const liveTopic = topics.find((t) => t.id === item.topicId);
                const isCompleted = liveTopic?.status === 'Completed';

                return (
                  <div
                    className={`p-3.5 rounded-lg border transition-all ${
                      isCompleted ? 'bg-neutral-50 border-neutral-200 opacity-70' : 'bg-neutral-50/50 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(item.topicId, liveTopic?.status || 'Not Started')}
                          className="mt-0.5"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Circle className="w-4 h-4 text-neutral-300" />
                          )}
                        </button>
                        <div>
                          <div className="text-[10px] font-bold text-neutral-500 font-mono uppercase">
                            Rotating Practice · Computer Module
                          </div>
                          <div
                            onClick={() => liveTopic && onSelectTopic(liveTopic)}
                            className="font-bold text-xs text-neutral-900 cursor-pointer hover:underline mt-0.5"
                          >
                            {item.topicName}
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.estimatedMinutes} mins</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleStatus(item.topicId, liveTopic?.status || 'Not Started')}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        {isCompleted ? 'Done' : 'Mark Done'}
                      </button>
                    </div>
                  </div>
                );
              })()
            )}

            {/* DEST Typing Session */}
            {planResult?.rotatingPractice.destTyping && (
              (() => {
                const item = planResult.rotatingPractice.destTyping;
                const liveTopic = topics.find((t) => t.id === item.topicId);
                const isCompleted = liveTopic?.status === 'Completed';

                return (
                  <div
                    className={`p-3.5 rounded-lg border transition-all ${
                      isCompleted ? 'bg-neutral-50 border-neutral-200 opacity-70' : 'bg-neutral-50/50 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(item.topicId, liveTopic?.status || 'Not Started')}
                          className="mt-0.5"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Circle className="w-4 h-4 text-neutral-300" />
                          )}
                        </button>
                        <div>
                          <div className="text-[10px] font-bold text-neutral-500 font-mono uppercase">
                            Rotating Practice · Typing Cadence
                          </div>
                          <div
                            onClick={() => liveTopic && onSelectTopic(liveTopic)}
                            className="font-bold text-xs text-neutral-900 cursor-pointer hover:underline mt-0.5"
                          >
                            {item.topicName}
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.estimatedMinutes} mins drill</span>
                            <span aria-hidden="true">·</span>
                            <span>2000 keystrokes target</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleStatus(item.topicId, liveTopic?.status || 'Not Started')}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        {isCompleted ? 'Done' : 'Mark Done'}
                      </button>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      )}

      {/* 8. Postponed Topics Section (Visible & Never Silently Discarded) */}
      <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-neutral-100">
          <div>
            <div className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
              <span>Postponed Topics Queue</span>
              <span className="font-mono text-xs bg-neutral-100 text-neutral-700 px-1.5 py-0.2 rounded font-semibold">
                {planResult?.postponedItems.length || 0}
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Topics moved to tomorrow's plan by the Difficult Topic Replacement Rule or workload balancer. They remain incomplete, preserve sequence, and will NOT be repeatedly postponed.
            </p>
          </div>
        </div>

        {planResult?.postponedItems && planResult.postponedItems.length > 0 ? (
          <div className="space-y-2 pt-1">
            {planResult.postponedItems.map((p) => {
              const live = topics.find((t) => t.id === p.topicId);

              return (
                <div
                  key={p.topicId}
                  className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[10px] font-bold bg-neutral-200 text-neutral-800 px-1.5 py-0.2 rounded">
                        {p.sscCategory}
                      </span>
                      <span className="font-semibold text-neutral-900">
                        {p.topicName}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        ({p.difficulty} · {p.estimatedMinutes}m)
                      </span>
                    </div>

                    <div className="text-[11px] text-neutral-600 flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-neutral-400 shrink-0" />
                      <span>{p.postponedReason || 'Moved to tomorrow to balance workload.'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleRestorePostponed(p.topicId)}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 rounded-md transition-colors shadow-2xs"
                    >
                      <Undo2 className="w-3 h-3" />
                      <span>Restore to Today</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => live && onSelectTopic(live)}
                      className="px-2.5 py-1 text-xs text-neutral-500 hover:text-neutral-900"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 text-center text-xs text-neutral-400 bg-neutral-50/50 rounded-lg border border-dashed border-neutral-200">
            No topics currently postponed. All 5 core categories are active in today's study plan.
          </div>
        )}
      </div>
    </div>
  );
};
