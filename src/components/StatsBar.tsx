import React from 'react';
import { Topic } from '../types/syllabus.ts';
import { CheckCircle2, Clock, RotateCcw, PlayCircle, BookMarked } from 'lucide-react';
import { SSC_MAIN_CATEGORIES, getSscCategory } from '../services/sscSyllabusService.ts';

interface StatsBarProps {
  topics: Topic[];
  areaName: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({ topics, areaName }) => {
  const total = topics.length;
  const completed = topics.filter((t) => t.status === 'Completed').length;
  const inProgress = topics.filter((t) => t.status === 'In Progress').length;
  const notStarted = total - completed - inProgress;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const totalRemainingMinutes = topics
    .filter((t) => t.status !== 'Completed')
    .reduce((sum, t) => sum + (t.estimatedMinutes || 60), 0);
  const remainingHours = (totalRemainingMinutes / 60).toFixed(1);

  const needsRevisionCount = topics.filter((t) => t.revisionStatus === 'Needs Revision').length;

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-4 sm:p-5 mb-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
            <span>Active Curriculum</span>
            <span aria-hidden="true">·</span>
            <span>Recommended Sequence Enforced</span>
          </div>
          <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
            {areaName}
          </h2>
        </div>

        {/* Progress bar and numeric percentage */}
        <div className="flex items-center gap-4 min-w-[220px]">
          <div className="flex-1">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="text-neutral-500 font-medium">Syllabus Progress</span>
              <span className="font-semibold text-neutral-900 font-mono tabular-nums">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-neutral-900 h-full rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of structured stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 text-xs">
        <div>
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <BookMarked className="w-3.5 h-3.5 text-neutral-400" />
            <span>Total Topics</span>
          </div>
          <p className="text-lg font-semibold text-neutral-900 font-mono tabular-nums">
            {total}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Completed</span>
          </div>
          <p className="text-lg font-semibold text-emerald-700 font-mono tabular-nums">
            {completed}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <PlayCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>In Progress</span>
          </div>
          <p className="text-lg font-semibold text-blue-700 font-mono tabular-nums">
            {inProgress}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Est. Remaining</span>
          </div>
          <p className="text-lg font-semibold text-neutral-900 font-mono tabular-nums">
            {remainingHours} <span className="text-xs font-normal text-neutral-500">hrs</span>
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
            <span>Needs Revision</span>
          </div>
          <p className="text-lg font-semibold text-amber-700 font-mono tabular-nums">
            {needsRevisionCount}
          </p>
        </div>
      </div>

      {/* SSC 5-Subject Preparation Matrix */}
      {topics.length > 0 && topics[0].learningAreaId === 'la_ssccgl' && (
        <div className="mt-4 pt-3 border-t border-neutral-100">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-neutral-800">5-Subject Progress Breakdown</span>
            <span className="text-[11px] text-neutral-500 font-mono">1 Topic/Subject Daily Cadence</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            {SSC_MAIN_CATEGORIES.map((cat) => {
              const catTopics = topics.filter((t) => (t.sscCategory || getSscCategory(t.module)) === cat);
              const catDone = catTopics.filter((t) => t.status === 'Completed').length;
              const catTotal = catTopics.length;
              const catPct = catTotal > 0 ? Math.round((catDone / catTotal) * 100) : 0;
              return (
                <div key={cat} className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between font-bold text-neutral-900">
                    <span>{cat}</span>
                    <span className="font-mono text-[11px] text-neutral-600 font-normal">{catPct}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-1 rounded-full overflow-hidden my-1.5">
                    <div className="bg-neutral-900 h-full rounded-full transition-all duration-300" style={{ width: `${catPct}%` }} />
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono tabular-nums flex justify-between">
                    <span>{catDone}/{catTotal} done</span>
                    <span>{catTotal - catDone} left</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
