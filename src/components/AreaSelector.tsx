import React from 'react';
import { LearningArea, Topic } from '../types/syllabus.ts';
import { Pause, Play, CheckCircle, Clock } from 'lucide-react';

interface AreaSelectorProps {
  areas: LearningArea[];
  selectedAreaId: string;
  onSelectArea: (id: string) => void;
  onTogglePause: (id: string) => void;
  allTopics: Topic[];
}

export const AreaSelector: React.FC<AreaSelectorProps> = ({
  areas,
  selectedAreaId,
  onSelectArea,
  onTogglePause,
  allTopics,
}) => {
  const selectedArea = areas.find((a) => a.id === selectedAreaId) || areas[0];

  return (
    <div className="mb-6 space-y-3">
      {/* Horizontal pill-free segmented selector for 5 Learning Areas */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-200">
        {areas.map((area, idx) => {
          const isSelected = area.id === selectedAreaId;
          const areaTopics = allTopics.filter((t) => t.learningAreaId === area.id);
          const completedCount = areaTopics.filter((t) => t.status === 'Completed').length;
          const isBatchDone = area.batchStatus === 'completed';

          return (
            <button
              key={area.id}
              onClick={() => onSelectArea(area.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 border ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-white text-neutral-700 hover:text-neutral-900 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold ${
                isSelected ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {idx + 1}
              </span>
              <span>{area.name.split('—')[0].trim()}</span>
              
              <span className={`text-[11px] font-mono tabular-nums ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {isBatchDone ? `(${areaTopics.length} topics)` : '(Queued)'}
              </span>

              {area.status === 'paused' && (
                <span className={`text-[10px] px-1 py-0.5 rounded ${
                  isSelected ? 'bg-neutral-800 text-amber-300' : 'bg-amber-50 text-amber-700'
                }`}>
                  Paused
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Area Context Header with Pause/Resume Toggle */}
      <div className="bg-neutral-100/70 border border-neutral-200/80 rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-neutral-600 font-medium">
            <span>{selectedArea.subtitle}</span>
            <span aria-hidden="true">·</span>
            <span>Category: {selectedArea.category}</span>
          </div>
          <p className="text-neutral-500 text-[11px] max-w-3xl">
            {selectedArea.description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedArea.batchStatus === 'completed' ? (
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Batch Populated ({allTopics.filter((t) => t.learningAreaId === selectedArea.id).length} Topics)</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-neutral-600 font-medium bg-neutral-200/80 px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5" />
              <span>Awaiting Next Batch Request</span>
            </div>
          )}

          <button
            onClick={() => onTogglePause(selectedArea.id)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
              selectedArea.status === 'active'
                ? 'bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 shadow-2xs'
                : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
            }`}
          >
            {selectedArea.status === 'active' ? (
              <>
                <Pause className="w-3.5 h-3.5 text-neutral-600" />
                <span>Pause Area</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-amber-800" />
                <span>Resume Area</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
