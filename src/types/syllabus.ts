export type ImportanceLevel = 'High' | 'Medium' | 'Low';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';
export type TopicStatus = 'Not Started' | 'In Progress' | 'Completed';
export type RevisionStatus = 'Not Reviewed' | 'Needs Revision' | 'In Review' | 'Mastered';

export interface PracticeQuestion {
  id: string;
  question: string;
  completed: boolean;
  notes?: string;
}

export interface LearningTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Subtopic {
  id: string;
  name: string;
  sequenceNumber: number;
  importance: ImportanceLevel;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  status: TopicStatus;
  notes: string;
  practiceQuestions: PracticeQuestion[];
  completionDate: string | null;
  revisionStatus: RevisionStatus;
  tasks: LearningTask[];
}

export interface Topic {
  id: string;
  learningAreaId: string;
  learningAreaName: string;
  subjectId: string;
  subjectName: string;
  module: string;
  name: string;
  sequenceNumber: number;
  importance: ImportanceLevel;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  status: TopicStatus;
  notes: string;
  practiceQuestions: PracticeQuestion[];
  completionDate: string | null;
  revisionStatus: RevisionStatus;
  revisionCount: number;
  nextRevisionDate: string | null;
  subtopics: Subtopic[];
  sscCategory?: 'English' | 'Reasoning' | 'Maths' | 'Finance' | 'GK' | 'Computer Knowledge' | 'DEST';
  examTier?: string;
  paperName?: string;
  postponeCount?: number;
  lastPostponedDate?: string | null;
}

export interface Subject {
  id: string;
  learningAreaId: string;
  name: string;
  description: string;
  sequenceOrder: number;
}

export interface LearningArea {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  category: 'Programming' | 'Engineering' | 'Management' | 'Communication' | 'Government Exam';
  status: 'active' | 'paused';
  batchStatus: 'completed' | 'in_progress' | 'queued';
  targetExamDeadline?: string;
  subjects: Subject[];
}

export interface DailyStudyPlanItem {
  topicId: string;
  topicName: string;
  module: string;
  learningAreaName: string;
  sequenceNumber: number;
  estimatedMinutes: number;
  difficulty: DifficultyLevel;
  importance: ImportanceLevel;
  isRevision: boolean;
  completed: boolean;
  sscCategory?: 'English' | 'Reasoning' | 'Maths' | 'Finance' | 'GK' | 'Computer Knowledge' | 'DEST';
  isPostponed?: boolean;
  postponedReason?: string;
}

export interface DailyStudyPlan {
  date: string;
  allocatedMinutes: number;
  selectedAreaId: string | 'all';
  items: DailyStudyPlanItem[];
  postponedItems?: DailyStudyPlanItem[];
  rotatingPractice?: {
    computerKnowledge?: DailyStudyPlanItem | null;
    destTyping?: DailyStudyPlanItem | null;
  };
}
