import { Topic, DifficultyLevel, ImportanceLevel, DailyStudyPlanItem } from '../types/syllabus.ts';

export type SscMainCategory = 'English' | 'Reasoning' | 'Maths' | 'Finance' | 'GK';
export type SscRotatingCategory = 'Computer Knowledge' | 'DEST';
export type SscSubjectCategory = SscMainCategory | SscRotatingCategory;

export const SSC_MAIN_CATEGORIES: SscMainCategory[] = [
  'English',
  'Reasoning',
  'Maths',
  'Finance',
  'GK',
];

export const SSC_CATEGORY_CONFIG: Record<
  SscSubjectCategory,
  {
    displayName: string;
    description: string;
    targetSessionsPerWeek?: string;
    durationGuidance: string;
  }
> = {
  English: {
    displayName: 'English Language',
    description: 'Tier 1 & Tier 2 Grammar, Vocabulary, Comprehension, Cloze Tests & Voice/Narration',
    durationGuidance: 'Daily: 1 Topic (Easy: ~30m, Med: ~45m, Hard: ~75m)',
  },
  Reasoning: {
    displayName: 'General Intelligence & Reasoning',
    description: 'Tier 1 & Tier 2 Analogies, Series, Coding-Decoding, Puzzles, Statement & Assumptions',
    durationGuidance: 'Daily: 1 Topic (Easy: ~30m, Med: ~45m, Hard: ~75m)',
  },
  Maths: {
    displayName: 'Quantitative Aptitude & Mathematics',
    description: 'Tier 1 Arithmetic, Algebra, Geometry, Mensuration & Tier 2 Probability, Statistics',
    durationGuidance: 'Daily: 1 Topic (Easy: ~30m, Med: ~45m, Hard: ~75m)',
  },
  Finance: {
    displayName: 'AAO Paper 3: Finance, Accounts & Economics',
    description: 'Financial Accounting, Auditing, CAG Powers, Microeconomics, Indian Economy & Governance',
    durationGuidance: 'Daily: 1 Topic (Easy: ~30m, Med: ~45m, Hard: ~75m)',
  },
  GK: {
    displayName: 'General Awareness (GK)',
    description: 'Tier 1 & Tier 2 History, Polity, Geography, Economy, Science, Current Affairs & Static GK',
    durationGuidance: 'Daily: 1 Topic (Easy: ~30m, Med: ~45m, Hard: ~75m)',
  },
  'Computer Knowledge': {
    displayName: 'Computer Knowledge Module',
    description: 'Hardware, Windows OS, Networking, Cyber Security, MS Word, Excel & Shortcuts',
    targetSessionsPerWeek: '2–3 sessions per week',
    durationGuidance: 'Rotating Practice: 20–30 mins / session',
  },
  DEST: {
    displayName: 'Data Entry Speed Test (DEST)',
    description: 'Typing drills, 2000 keystrokes cadence, accuracy benchmarks & speed runs',
    targetSessionsPerWeek: '3–5 sessions per week',
    durationGuidance: 'Rotating Practice: 10–15 mins / session',
  },
};

export function getSscCategory(moduleName: string): SscSubjectCategory {
  if (moduleName.startsWith('Tier 1: English') || moduleName.startsWith('Tier 2 P1: English')) {
    return 'English';
  }
  if (moduleName.startsWith('Tier 1: Reasoning') || moduleName.startsWith('Tier 2 P1: Reasoning')) {
    return 'Reasoning';
  }
  if (
    moduleName.startsWith('Tier 1: Quantitative Aptitude') ||
    moduleName.startsWith('Tier 2 P1: Mathematical Abilities')
  ) {
    return 'Maths';
  }
  if (moduleName.startsWith('Tier 2 P3:')) {
    return 'Finance';
  }
  if (
    moduleName.startsWith('Tier 1: General Awareness') ||
    moduleName.startsWith('Tier 2 P1: General Awareness')
  ) {
    return 'GK';
  }
  if (moduleName.includes('Computer Knowledge')) {
    return 'Computer Knowledge';
  }
  if (moduleName.includes('Data Entry Speed Test') || moduleName.includes('DEST')) {
    return 'DEST';
  }
  return 'GK';
}

export function getExamTier(moduleName: string): string {
  if (moduleName.startsWith('Tier 1:')) return 'Tier 1';
  if (moduleName.startsWith('Tier 2 P1:')) return 'Tier 2 Paper 1';
  if (moduleName.startsWith('Tier 2 P3:')) return 'Tier 2 Paper 3 (AAO)';
  return 'SSC CGL';
}

export interface CategoryProgress {
  category: SscSubjectCategory;
  displayName: string;
  total: number;
  completed: number;
  inProgress: number;
  remaining: number;
  percentage: number;
  isRotating?: boolean;
}

export interface OverallSscProgress {
  total: number;
  completed: number;
  inProgress: number;
  remaining: number;
  percentage: number;
  mainCategoryProgress: Record<SscMainCategory, CategoryProgress>;
  rotatingProgress: Record<SscRotatingCategory, CategoryProgress>;
}

export function calculateSscProgress(allTopics: Topic[]): OverallSscProgress {
  const sscTopics = allTopics.filter((t) => t.learningAreaId === 'la_ssccgl');

  const getStats = (cat: SscSubjectCategory, isRot = false): CategoryProgress => {
    const list = sscTopics.filter((t) => getSscCategory(t.module) === cat);
    const total = list.length;
    const completed = list.filter((t) => t.status === 'Completed').length;
    const inProgress = list.filter((t) => t.status === 'In Progress').length;
    const remaining = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return {
      category: cat,
      displayName: SSC_CATEGORY_CONFIG[cat].displayName,
      total,
      completed,
      inProgress,
      remaining,
      percentage,
      isRotating: isRot,
    };
  };

  const mainCategoryProgress = {
    English: getStats('English'),
    Reasoning: getStats('Reasoning'),
    Maths: getStats('Maths'),
    Finance: getStats('Finance'),
    GK: getStats('GK'),
  };

  const rotatingProgress = {
    'Computer Knowledge': getStats('Computer Knowledge', true),
    DEST: getStats('DEST', true),
  };

  const total = sscTopics.length;
  const completed = sscTopics.filter((t) => t.status === 'Completed').length;
  const inProgress = sscTopics.filter((t) => t.status === 'In Progress').length;
  const remaining = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    inProgress,
    remaining,
    percentage,
    mainCategoryProgress,
    rotatingProgress,
  };
}

export interface PostponedTopicRecord {
  topicId: string;
  topicName: string;
  category: SscMainCategory;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  postponedOn: string;
  reason: string;
  postponeCount: number;
}

const POSTPONED_STORAGE_KEY = 'focusme_ssc_postponed_v1';

export function getStoredPostponedTopics(): PostponedTopicRecord[] {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return [];
  }
  try {
    const raw = localStorage.getItem(POSTPONED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredPostponedTopics(records: PostponedTopicRecord[]): void {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(POSTPONED_STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error('Failed to save postponed topics:', e);
  }
}

export interface SscDailyPlanGenerationOptions {
  allTopics: Topic[];
  availableMinutes: number;
  todayDate: string;
  includeComputerKnowledge?: boolean;
  includeDest?: boolean;
  manualPostponeEasyId?: string; // Optional user override
}

export interface SscDailyPlanResult {
  date: string;
  allocatedMinutes: number;
  totalEstimatedMinutes: number;
  activeItems: DailyStudyPlanItem[];
  postponedItems: DailyStudyPlanItem[];
  rotatingPractice: {
    computerKnowledge: DailyStudyPlanItem | null;
    destTyping: DailyStudyPlanItem | null;
  };
  hasHardTopic: boolean;
  hardTopicName: string | null;
  postponedReasons: string[];
}

/**
 * Implements the SSC Subject-Wise Daily Learning System:
 * 1. Exactly 1 topic for each of the 5 main categories (English, Reasoning, Maths, Finance, GK).
 * 2. Sequential order: lowest sequenceNumber incomplete topics first.
 * 3. Prerequisites before advanced: Tier 1 sequence precedes Tier 2 sequence.
 * 4. Difficult topic replacement rule:
 *    - If a topic is Hard (60-90m), or if total time exceeds user's daily budget:
 *      * Keep the Hard/Important topic in today's plan.
 *      * Remove one Easy topic (with postponeCount == 0) from today's plan.
 *      * Move the easy topic to the postponed queue for tomorrow's plan.
 *      * Preserve sequence, never mark complete, never delete, never repeatedly postpone.
 * 5. Rotating Practice: Computer Knowledge (2-3/week) and DEST (3-5/week).
 */
export function generateSscSubjectDailyPlan(
  options: SscDailyPlanGenerationOptions
): SscDailyPlanResult {
  const { allTopics, availableMinutes, todayDate, includeComputerKnowledge, includeDest } = options;

  const sscTopics = allTopics.filter((t) => t.learningAreaId === 'la_ssccgl');
  const storedPostponed = getStoredPostponedTopics();

  // Helper to get estimated minutes conforming to standard:
  // Easy: 25-35m (default 30m), Med: 40-50m (default 45m), Hard: 60-90m (default 75m)
  const getStandardizedMinutes = (t: Topic): number => {
    if (t.difficulty === 'Hard') return Math.max(60, t.estimatedMinutes || 75);
    if (t.difficulty === 'Easy') return Math.min(35, Math.max(25, t.estimatedMinutes || 30));
    return Math.min(50, Math.max(40, t.estimatedMinutes || 45));
  };

  // 1. Select candidates for the 5 main categories
  const selectedCandidates: {
    category: SscMainCategory;
    topic: Topic;
    isFromPostponed: boolean;
    postponeCount: number;
  }[] = [];

  for (const cat of SSC_MAIN_CATEGORIES) {
    // Check if there was a postponed topic in this category from a previous day
    const postponedIndex = storedPostponed.findIndex((p) => p.category === cat);
    let chosenTopic: Topic | undefined;
    let isFromPostponed = false;
    let postponeCount = 0;

    if (postponedIndex !== -1) {
      const rec = storedPostponed[postponedIndex];
      const match = sscTopics.find((t) => t.id === rec.topicId && t.status !== 'Completed');
      if (match) {
        chosenTopic = match;
        isFromPostponed = true;
        postponeCount = rec.postponeCount;
      }
    }

    // If no eligible postponed topic, pick next incomplete in recommended sequence
    if (!chosenTopic) {
      const eligible = sscTopics
        .filter((t) => getSscCategory(t.module) === cat && t.status !== 'Completed')
        .sort((a, b) => a.sequenceNumber - b.sequenceNumber);

      chosenTopic = eligible[0];
      postponeCount = chosenTopic?.postponeCount || 0;
    }

    if (chosenTopic) {
      selectedCandidates.push({
        category: cat,
        topic: chosenTopic,
        isFromPostponed,
        postponeCount,
      });
    }
  }

  // 2. Analyze difficulties and total time
  let initialTotalTime = selectedCandidates.reduce(
    (sum, c) => sum + getStandardizedMinutes(c.topic),
    0
  );

  const hardCandidates = selectedCandidates.filter((c) => c.topic.difficulty === 'Hard');
  const hasHardTopic = hardCandidates.length > 0;
  const hardTopicName = hasHardTopic ? hardCandidates[0].topic.name : null;

  const activeCandidates = [...selectedCandidates];
  const newPostponedRecords: PostponedTopicRecord[] = [];
  const postponedReasons: string[] = [];

  // 3. Difficult Topic Replacement Rule & Workload Balancing
  // Rule: If one selected topic is difficult and requires extra time, or if total time exceeds availableMinutes:
  // - Keep the difficult topic in today's plan.
  // - Remove one easy topic from today's plan.
  // - Move the removed easy topic to tomorrow's plan.
  // - Do NOT repeatedly postpone the same topic (only postpone if postponeCount === 0).
  const needsWorkloadReduction = hasHardTopic || initialTotalTime > availableMinutes;

  if (needsWorkloadReduction && activeCandidates.length > 3) {
    // Look for an Easy topic that hasn't been postponed yet (postponeCount === 0)
    let candidateToPostponeIndex = activeCandidates.findIndex(
      (c) => c.topic.difficulty === 'Easy' && c.postponeCount === 0 && !c.isFromPostponed
    );

    // If no Easy topic found with postponeCount === 0, look for a Medium topic with postponeCount === 0
    if (candidateToPostponeIndex === -1 && initialTotalTime > availableMinutes + 30) {
      candidateToPostponeIndex = activeCandidates.findIndex(
        (c) => c.topic.difficulty === 'Medium' && c.postponeCount === 0 && !c.isFromPostponed
      );
    }

    if (candidateToPostponeIndex !== -1) {
      const removed = activeCandidates.splice(candidateToPostponeIndex, 1)[0];
      const reason = hasHardTopic
        ? `Postponed to tomorrow to allow dedicated focus on Hard topic (${hardCandidates[0].topic.name} · ${getStandardizedMinutes(hardCandidates[0].topic)}m).`
        : `Postponed to tomorrow to respect your daily limit of ${availableMinutes}m (workload balancing).`;

      newPostponedRecords.push({
        topicId: removed.topic.id,
        topicName: removed.topic.name,
        category: removed.category,
        difficulty: removed.topic.difficulty,
        estimatedMinutes: getStandardizedMinutes(removed.topic),
        postponedOn: todayDate,
        reason,
        postponeCount: (removed.postponeCount || 0) + 1,
      });

      postponedReasons.push(reason);
    }
  }

  // If user requested manual postponement of an easy topic
  if (options.manualPostponeEasyId) {
    const idx = activeCandidates.findIndex((c) => c.topic.id === options.manualPostponeEasyId);
    if (idx !== -1) {
      const removed = activeCandidates.splice(idx, 1)[0];
      const reason = `Manually rescheduled to tomorrow's plan.`;
      newPostponedRecords.push({
        topicId: removed.topic.id,
        topicName: removed.topic.name,
        category: removed.category,
        difficulty: removed.topic.difficulty,
        estimatedMinutes: getStandardizedMinutes(removed.topic),
        postponedOn: todayDate,
        reason,
        postponeCount: (removed.postponeCount || 0) + 1,
      });
      postponedReasons.push(reason);
    }
  }

  // 4. Update the stored postponed list:
  // Remove any postponed topic that is now actively in today's plan
  const activeIds = new Set(activeCandidates.map((c) => c.topic.id));
  const remainingStoredPostponed = storedPostponed.filter((p) => !activeIds.has(p.topicId));

  // Merge newly postponed records (avoiding duplicates)
  const combinedPostponedMap = new Map<string, PostponedTopicRecord>();
  for (const r of remainingStoredPostponed) combinedPostponedMap.set(r.topicId, r);
  for (const r of newPostponedRecords) combinedPostponedMap.set(r.topicId, r);

  const updatedStoredPostponed = Array.from(combinedPostponedMap.values());
  saveStoredPostponedTopics(updatedStoredPostponed);

  // 5. Build active plan items
  const activeItems: DailyStudyPlanItem[] = activeCandidates.map((c) => {
    const stdMinutes = getStandardizedMinutes(c.topic);
    return {
      topicId: c.topic.id,
      topicName: c.topic.name,
      module: c.topic.module,
      learningAreaName: c.topic.learningAreaName,
      sequenceNumber: c.topic.sequenceNumber,
      estimatedMinutes: stdMinutes,
      difficulty: c.topic.difficulty,
      importance: c.topic.importance,
      isRevision: c.topic.revisionStatus === 'Needs Revision',
      completed: c.topic.status === 'Completed',
      sscCategory: c.category,
      isPostponed: false,
    };
  });

  // Build postponed plan items for display
  const postponedItems: DailyStudyPlanItem[] = updatedStoredPostponed.map((p) => {
    const topic = sscTopics.find((t) => t.id === p.topicId);
    return {
      topicId: p.topicId,
      topicName: p.topicName,
      module: topic?.module || 'SSC CGL',
      learningAreaName: 'SSC CGL — AAO Exam Preparation',
      sequenceNumber: topic?.sequenceNumber || 0,
      estimatedMinutes: p.estimatedMinutes,
      difficulty: p.difficulty,
      importance: topic?.importance || 'Medium',
      isRevision: false,
      completed: false,
      sscCategory: p.category,
      isPostponed: true,
      postponedReason: p.reason,
    };
  });

  // 6. Rotating Practice (Computer Knowledge & DEST)
  let rotatingComputer: DailyStudyPlanItem | null = null;
  let rotatingDest: DailyStudyPlanItem | null = null;

  // Decide if rotating practice should be active today
  // By default: include if requested or on weekdays (Mon/Wed/Fri for Computer; Mon-Fri for DEST)
  const dayOfWeek = new Date().getDay(); // 0 is Sun, 1 is Mon, 5 is Fri
  const isComputerDay =
    includeComputerKnowledge !== undefined ? includeComputerKnowledge : [1, 3, 5].includes(dayOfWeek);
  const isDestDay =
    includeDest !== undefined ? includeDest : [1, 2, 3, 4, 5].includes(dayOfWeek);

  if (isComputerDay) {
    const nextComp = sscTopics
      .filter((t) => getSscCategory(t.module) === 'Computer Knowledge' && t.status !== 'Completed')
      .sort((a, b) => a.sequenceNumber - b.sequenceNumber)[0];

    if (nextComp) {
      rotatingComputer = {
        topicId: nextComp.id,
        topicName: nextComp.name,
        module: nextComp.module,
        learningAreaName: nextComp.learningAreaName,
        sequenceNumber: nextComp.sequenceNumber,
        estimatedMinutes: 25,
        difficulty: nextComp.difficulty,
        importance: nextComp.importance,
        isRevision: false,
        completed: nextComp.status === 'Completed',
        sscCategory: 'Computer Knowledge',
        isPostponed: false,
      };
    }
  }

  if (isDestDay) {
    const nextDest = sscTopics
      .filter((t) => getSscCategory(t.module) === 'DEST' && t.status !== 'Completed')
      .sort((a, b) => a.sequenceNumber - b.sequenceNumber)[0];

    if (nextDest) {
      rotatingDest = {
        topicId: nextDest.id,
        topicName: nextDest.name,
        module: nextDest.module,
        learningAreaName: nextDest.learningAreaName,
        sequenceNumber: nextDest.sequenceNumber,
        estimatedMinutes: 15,
        difficulty: nextDest.difficulty,
        importance: nextDest.importance,
        isRevision: false,
        completed: nextDest.status === 'Completed',
        sscCategory: 'DEST',
        isPostponed: false,
      };
    }
  }

  const totalEstimatedMinutes =
    activeItems.reduce((sum, item) => sum + item.estimatedMinutes, 0) +
    (rotatingComputer ? rotatingComputer.estimatedMinutes : 0) +
    (rotatingDest ? rotatingDest.estimatedMinutes : 0);

  return {
    date: todayDate,
    allocatedMinutes: availableMinutes,
    totalEstimatedMinutes,
    activeItems,
    postponedItems,
    rotatingPractice: {
      computerKnowledge: rotatingComputer,
      destTyping: rotatingDest,
    },
    hasHardTopic,
    hardTopicName,
    postponedReasons,
  };
}

export function restorePostponedTopic(topicId: string): void {
  const stored = getStoredPostponedTopics();
  const filtered = stored.filter((t) => t.topicId !== topicId);
  saveStoredPostponedTopics(filtered);
}
