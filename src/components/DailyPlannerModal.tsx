import React, { useState, useEffect } from 'react';
import { Topic, DailyStudyPlan, DailyStudyPlanItem, LearningArea, TopicStatus } from '../types/syllabus.ts';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Circle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  X,
  Play,
  RotateCw,
} from 'lucide-react';
import { StorageService } from '../services/storageService.ts';
import { SscDailyPlanner } from './SscDailyPlanner.tsx';

interface DailyPlannerModalProps {
  topics: Topic[];
  areas: LearningArea[];
  activeAreaId: string;
  onUpdateTopicStatus: (topicId: string, status: TopicStatus) => void;
  onSelectTopic: (topic: Topic) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DailyPlannerModal: React.FC<DailyPlannerModalProps> = ({
  topics,
  areas,
  activeAreaId,
  onUpdateTopicStatus,
  onSelectTopic,
  isOpen,
  onClose,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [availableMinutes, setAvailableMinutes] = useState<number>(90);
  const [includeRevision, setIncludeRevision] = useState<boolean>(true);
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<string>(activeAreaId || 'all');
  const [currentPlan, setCurrentPlan] = useState<DailyStudyPlan | null>(null);

  // Load existing plan for today if available
  useEffect(() => {
    if (isOpen) {
      const existing = StorageService.getDailyPlan(todayStr);
      if (existing) {
        // Sync item completion status with actual topic status
        const syncedItems = existing.items.map((item) => {
          const liveTopic = topics.find((t) => t.id === item.topicId);
          return {
            ...item,
            completed: liveTopic?.status === 'Completed' || item.completed,
          };
        });
        setCurrentPlan({ ...existing, items: syncedItems });
      }
    }
  }, [isOpen, todayStr, topics]);

  if (!isOpen) return null;

  // Generate a realistic, sequenced study plan
  const handleGeneratePlan = () => {
    // 1. Filter incomplete topics
    let eligible = topics.filter((t) => {
      // Area match
      if (selectedAreaFilter !== 'all' && t.learningAreaId !== selectedAreaFilter) {
        return false;
      }
      // Check if area is active
      const area = areas.find((a) => a.id === t.learningAreaId);
      if (area && area.status === 'paused') {
        return false;
      }
      return t.status !== 'Completed';
    });

    // 2. Identify topics needing revision
    const revisionTopics = eligible.filter((t) => t.revisionStatus === 'Needs Revision');
    const freshTopics = eligible
      .filter((t) => t.revisionStatus !== 'Needs Revision')
      .sort((a, b) => a.sequenceNumber - b.sequenceNumber);

    let planItems: DailyStudyPlanItem[] = [];
    let accumulatedTime = 0;

    // Slot revision topics first if enabled
    if (includeRevision) {
      for (const rev of revisionTopics) {
        if (accumulatedTime + rev.estimatedMinutes <= availableMinutes + 15) {
          planItems.push({
            topicId: rev.id,
            topicName: rev.name,
            module: rev.module,
            learningAreaName: rev.learningAreaName,
            sequenceNumber: rev.sequenceNumber,
            estimatedMinutes: rev.estimatedMinutes,
            difficulty: rev.difficulty,
            importance: rev.importance,
            isRevision: true,
            completed: false,
          });
          accumulatedTime += rev.estimatedMinutes;
        }
      }
    }

    // Slot sequenced fresh topics
    for (const fresh of freshTopics) {
      if (accumulatedTime + fresh.estimatedMinutes <= availableMinutes + 15 || planItems.length === 0) {
        planItems.push({
          topicId: fresh.id,
          topicName: fresh.name,
          module: fresh.module,
          learningAreaName: fresh.learningAreaName,
          sequenceNumber: fresh.sequenceNumber,
          estimatedMinutes: fresh.estimatedMinutes,
          difficulty: fresh.difficulty,
          importance: fresh.importance,
          isRevision: false,
          completed: false,
        });
        accumulatedTime += fresh.estimatedMinutes;
      } else {
        break;
      }
    }

    const newPlan: DailyStudyPlan = {
      date: todayStr,
      allocatedMinutes: availableMinutes,
      selectedAreaId: selectedAreaFilter,
      items: planItems,
    };

    setCurrentPlan(newPlan);
    StorageService.saveDailyPlan(newPlan);
  };

  const handleTogglePlanItem = (item: DailyStudyPlanItem) => {
    if (!currentPlan) return;
    const nextCompleted = !item.completed;
    const updatedItems = currentPlan.items.map((i) =>
      i.topicId === item.topicId ? { ...i, completed: nextCompleted } : i
    );
    const updatedPlan = { ...currentPlan, items: updatedItems };
    setCurrentPlan(updatedPlan);
    StorageService.saveDailyPlan(updatedPlan);

    // Sync with global topic status
    onUpdateTopicStatus(item.topicId, nextCompleted ? 'Completed' : 'In Progress');
  };

  const handleRescheduleItem = (topicId: string) => {
    if (!currentPlan) return;
    // Remove from current plan
    const updatedItems = currentPlan.items.filter((i) => i.topicId !== topicId);
    const updatedPlan = { ...currentPlan, items: updatedItems };
    setCurrentPlan(updatedPlan);
    StorageService.saveDailyPlan(updatedPlan);
  };

  const totalPlannedMinutes = currentPlan
    ? currentPlan.items.reduce((sum, item) => sum + item.estimatedMinutes, 0)
    : 0;
  const completedPlannedMinutes = currentPlan
    ? currentPlan.items
        .filter((i) => i.completed)
        .reduce((sum, item) => sum + item.estimatedMinutes, 0)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between gap-4 bg-neutral-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm tracking-tight">
                Daily Study Planner
              </h3>
              <p className="text-[11px] text-neutral-500">
                Paces your progress in strict recommended sequence based on available study time
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {selectedAreaFilter === 'la_ssccgl' ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-neutral-100 rounded-lg border border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs text-neutral-800">Learning Area:</span>
                  <select
                    value={selectedAreaFilter}
                    onChange={(e) => setSelectedAreaFilter(e.target.value)}
                    className="bg-white border border-neutral-300 rounded-md px-2.5 py-1 text-neutral-700 text-xs"
                  >
                    <option value="all">All Active Areas</option>
                    {areas.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name.split('—')[0].trim()}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-[11px] text-neutral-600 font-medium">
                  5-Subject Adaptive Mode (1 Topic / Category Daily + Rotating Practice)
                </div>
              </div>

              <SscDailyPlanner
                topics={topics}
                onUpdateTopicStatus={onUpdateTopicStatus}
                onSelectTopic={onSelectTopic}
                onClose={onClose}
              />
            </div>
          ) : (
            <>
              {/* Controls to configure study session */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-4">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    How much study time do you have today?
                  </label>
              <div className="flex flex-wrap gap-2">
                {[30, 45, 60, 90, 120, 180].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setAvailableMinutes(mins)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all font-mono tabular-nums border ${
                      availableMinutes === mins
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {mins < 60 ? `${mins}m` : `${mins / 60}h${mins % 60 ? ` ${mins % 60}m` : ''}`}
                  </button>
                ))}
                <div className="flex items-center gap-1 ml-auto">
                  <input
                    type="number"
                    min={15}
                    step={15}
                    value={availableMinutes}
                    onChange={(e) => setAvailableMinutes(parseInt(e.target.value) || 60)}
                    className="w-16 px-2 py-1 bg-white border border-neutral-300 rounded-lg text-center font-mono"
                  />
                  <span className="text-neutral-500">mins</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-200/70">
              <div className="flex items-center gap-4">
                {/* Area filter */}
                <select
                  value={selectedAreaFilter}
                  onChange={(e) => setSelectedAreaFilter(e.target.value)}
                  className="bg-white border border-neutral-300 rounded-md px-2.5 py-1 text-neutral-700 text-xs"
                >
                  <option value="all">All Active Areas</option>
                  {areas.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name.split('—')[0].trim()}
                    </option>
                  ))}
                </select>

                {/* Include revision toggle */}
                <label className="flex items-center gap-2 cursor-pointer text-neutral-700">
                  <input
                    type="checkbox"
                    checked={includeRevision}
                    onChange={(e) => setIncludeRevision(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900"
                  />
                  <span>Prioritize topics needing revision</span>
                </label>
              </div>

              <button
                type="button"
                onClick={handleGeneratePlan}
                className="flex items-center justify-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate Today's Plan</span>
              </button>
            </div>
          </div>

          {/* Generated Plan Display */}
          {currentPlan ? (
            <div className="space-y-4">
              {/* Plan metrics header */}
              <div className="flex items-center justify-between p-3.5 bg-neutral-100/60 rounded-lg border border-neutral-200">
                <div className="space-y-0.5">
                  <div className="font-semibold text-neutral-900 text-xs flex items-center gap-2">
                    <span>Today's Target Agenda</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums text-neutral-600">
                      {totalPlannedMinutes} mins allocated ({currentPlan.items.length} topics)
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono tabular-nums">
                    Completed: {completedPlannedMinutes} of {totalPlannedMinutes} mins
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleGeneratePlan}
                    className="flex items-center gap-1 px-2.5 py-1 text-[11px] text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 rounded-md"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>Regenerate</span>
                  </button>
                </div>
              </div>

              {/* Items List */}
              {currentPlan.items.length === 0 ? (
                <div className="p-8 text-center bg-white border border-neutral-200 rounded-xl">
                  <p className="text-neutral-500 text-xs">
                    No eligible topics found for this time allocation. You may have completed all sequenced topics or all areas are paused!
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {currentPlan.items.map((item, index) => {
                    const isNextToStudy = !item.completed && currentPlan.items.slice(0, index).every((i) => i.completed);

                    return (
                      <div
                        key={item.topicId}
                        className={`p-3.5 rounded-xl border transition-all ${
                          item.completed
                            ? 'bg-neutral-50/70 border-neutral-200 opacity-70'
                            : isNextToStudy
                            ? 'bg-white border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
                            : 'bg-white border-neutral-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            {/* Checkbox */}
                            <button
                              type="button"
                              onClick={() => handleTogglePlanItem(item)}
                              className="mt-0.5 text-neutral-400 hover:text-neutral-900 shrink-0"
                            >
                              {item.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <Circle className="w-5 h-5 text-neutral-300" />
                              )}
                            </button>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                {isNextToStudy && (
                                  <span className="text-[10px] font-bold bg-neutral-900 text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                                    Next to study
                                  </span>
                                )}
                                {item.isRevision && (
                                  <span className="text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded">
                                    Revision
                                  </span>
                                )}
                                <span className="font-mono text-xs text-neutral-400 font-semibold">
                                  #{item.sequenceNumber}
                                </span>
                                <span
                                  onClick={() => {
                                    const topic = topics.find((t) => t.id === item.topicId);
                                    if (topic) onSelectTopic(topic);
                                  }}
                                  className={`font-semibold text-xs cursor-pointer hover:underline ${
                                    item.completed ? 'line-through text-neutral-400' : 'text-neutral-900'
                                  }`}
                                >
                                  {item.topicName}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-1">
                                <span>{item.module.split(':')[0]}</span>
                                <span aria-hidden="true">·</span>
                                <span>Diff: {item.difficulty}</span>
                                <span aria-hidden="true">·</span>
                                <span className="flex items-center gap-1 font-mono tabular-nums text-neutral-700">
                                  <Clock className="w-3 h-3 text-neutral-400" />
                                  {item.estimatedMinutes} mins
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleRescheduleItem(item.topicId)}
                              title="Reschedule / Skip for today"
                              className="text-neutral-400 hover:text-neutral-700 text-[11px] px-2 py-1 rounded hover:bg-neutral-100"
                            >
                              Reschedule
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center bg-neutral-50 border border-neutral-200 rounded-xl space-y-2">
              <Calendar className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">
                No Plan Generated For Today Yet
              </h4>
              <p className="text-neutral-500 text-xs max-w-md mx-auto">
                Choose your available study time above and click "Generate Today's Plan" to receive a tailored, sequence-ordered study agenda.
              </p>
            </div>
          )}
          </>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="text-[11px] text-neutral-500">
            {todayStr} · FocusMe Adaptive Daily Engine
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg shadow-2xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
