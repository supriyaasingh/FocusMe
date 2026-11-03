import { LearningArea, Topic, DailyStudyPlan } from '../types/syllabus.ts';
import { INITIAL_LEARNING_AREAS } from '../data/learningAreasManifest.ts';
import { INITIAL_CPP_TOPICS } from '../data/seedCpp.ts';
import { INITIAL_WEBDEV_TOPICS } from '../data/seedWebDev.ts';
import { INITIAL_PM_TOPICS } from '../data/seedPm.ts';
import { INITIAL_ENGLISH_TOPICS } from '../data/seedEnglish.ts';
import { INITIAL_SSC_TOPICS } from '../data/seedSscCgl.ts';
import { getSscCategory, getExamTier } from './sscSyllabusService.ts';

const STORAGE_KEYS = {
  TOPICS: 'focusme_topics_v1',
  AREAS: 'focusme_areas_v1',
  DAILY_PLANS: 'focusme_daily_plans_v1',
  SELECTED_AREA: 'focusme_selected_area_v1',
};

export class StorageService {
  static getLearningAreas(): LearningArea[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.AREAS);
      if (!raw) {
        localStorage.setItem(STORAGE_KEYS.AREAS, JSON.stringify(INITIAL_LEARNING_AREAS));
        return INITIAL_LEARNING_AREAS;
      }
      const parsed: LearningArea[] = JSON.parse(raw);
      // Ensure any newly defined areas exist in stored list, and sync batch statuses
      const existingMap = new Map(parsed.map((a) => [a.id, a]));
      let modified = false;

      for (const initialArea of INITIAL_LEARNING_AREAS) {
        if (!existingMap.has(initialArea.id)) {
          parsed.push(initialArea);
          modified = true;
        } else {
          const current = existingMap.get(initialArea.id)!;
          // If manifest updated batchStatus to completed, sync it
          if (initialArea.batchStatus === 'completed' && current.batchStatus !== 'completed') {
            current.batchStatus = 'completed';
            modified = true;
          }
        }
      }

      if (modified) {
        localStorage.setItem(STORAGE_KEYS.AREAS, JSON.stringify(parsed));
      }
      return parsed;
    } catch (e) {
      console.error('Failed to load learning areas from localStorage:', e);
      return INITIAL_LEARNING_AREAS;
    }
  }

  static saveLearningAreas(areas: LearningArea[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.AREAS, JSON.stringify(areas));
    } catch (e) {
      console.error('Failed to save learning areas:', e);
    }
  }

  static getTopics(): Topic[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.TOPICS);
      const allSeeds = [
        ...INITIAL_CPP_TOPICS,
        ...INITIAL_WEBDEV_TOPICS,
        ...INITIAL_PM_TOPICS,
        ...INITIAL_ENGLISH_TOPICS,
        ...INITIAL_SSC_TOPICS,
      ];

      if (!raw) {
        localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(allSeeds));
        return allSeeds;
      }

      const parsed: Topic[] = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(allSeeds));
        return allSeeds;
      }

      let modified = false;
      let currentTopics = [...parsed];

      // Check if C++ topics exist; if none exist, seed them while preserving user data
      const hasCpp = currentTopics.some((t) => t.learningAreaId === 'la_cpp');
      if (!hasCpp) {
        currentTopics = [...INITIAL_CPP_TOPICS, ...currentTopics];
        modified = true;
      }

      // Check if WebDev topics exist; if none exist, append them while preserving all existing topics & user edits
      const hasWebDev = currentTopics.some((t) => t.learningAreaId === 'la_webdev');
      if (!hasWebDev) {
        currentTopics = [...currentTopics, ...INITIAL_WEBDEV_TOPICS];
        modified = true;
      }

      // Check if Project Management topics exist; if none exist, append them while preserving all existing data
      const hasPm = currentTopics.some((t) => t.learningAreaId === 'la_pm');
      if (!hasPm) {
        currentTopics = [...currentTopics, ...INITIAL_PM_TOPICS];
        modified = true;
      }

      // Check if English Speaking topics exist; if none exist, append them while preserving all existing data
      const hasEnglish = currentTopics.some((t) => t.learningAreaId === 'la_english');
      if (!hasEnglish) {
        currentTopics = [...currentTopics, ...INITIAL_ENGLISH_TOPICS];
        modified = true;
      }

      // Check if SSC CGL topics exist; if none exist, append them while preserving all existing data & edits
      const hasSsc = currentTopics.some((t) => t.learningAreaId === 'la_ssccgl');
      if (!hasSsc) {
        currentTopics = [...currentTopics, ...INITIAL_SSC_TOPICS];
        modified = true;
      }

      // Transparently ensure all SSC topics have sscCategory and examTier without altering user notes or progress
      let sscMetadataEnriched = false;
      currentTopics = currentTopics.map((t) => {
        if (t.learningAreaId === 'la_ssccgl' && (!t.sscCategory || !t.examTier)) {
          sscMetadataEnriched = true;
          return {
            ...t,
            sscCategory: t.sscCategory || getSscCategory(t.module),
            examTier: t.examTier || getExamTier(t.module),
            postponeCount: t.postponeCount ?? 0,
          };
        }
        return t;
      });

      if (sscMetadataEnriched) {
        modified = true;
      }

      if (modified) {
        localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(currentTopics));
      }

      return currentTopics;
    } catch (e) {
      console.error('Failed to load topics from localStorage:', e);
      return [
        ...INITIAL_CPP_TOPICS,
        ...INITIAL_WEBDEV_TOPICS,
        ...INITIAL_PM_TOPICS,
        ...INITIAL_ENGLISH_TOPICS,
        ...INITIAL_SSC_TOPICS,
      ];
    }
  }

  static saveTopics(topics: Topic[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(topics));
    } catch (e) {
      console.error('Failed to save topics:', e);
    }
  }

  static getSelectedAreaId(): string {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_AREA) || 'la_cpp';
  }

  static setSelectedAreaId(id: string): void {
    localStorage.setItem(STORAGE_KEYS.SELECTED_AREA, id);
  }

  static getDailyPlan(date: string): DailyStudyPlan | null {
    try {
      const raw = localStorage.getItem(`${STORAGE_KEYS.DAILY_PLANS}_${date}`);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  static saveDailyPlan(plan: DailyStudyPlan): void {
    try {
      localStorage.setItem(`${STORAGE_KEYS.DAILY_PLANS}_${plan.date}`, JSON.stringify(plan));
    } catch (e) {
      console.error('Failed to save daily plan:', e);
    }
  }

  static exportBackup(): string {
    const data = {
      version: '5.0',
      exportedAt: new Date().toISOString(),
      areas: this.getLearningAreas(),
      topics: this.getTopics(),
    };
    return JSON.stringify(data, null, 2);
  }

  static importBackup(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.topics || !Array.isArray(parsed.topics)) {
        throw new Error('Invalid backup schema');
      }
      if (parsed.areas && Array.isArray(parsed.areas)) {
        this.saveLearningAreas(parsed.areas);
      }
      this.saveTopics(parsed.topics);
      return true;
    } catch (e) {
      console.error('Failed to import backup:', e);
      return false;
    }
  }

  static resetToDefaults(): void {
    const allSeeds = [
      ...INITIAL_CPP_TOPICS,
      ...INITIAL_WEBDEV_TOPICS,
      ...INITIAL_PM_TOPICS,
      ...INITIAL_ENGLISH_TOPICS,
      ...INITIAL_SSC_TOPICS,
    ];
    localStorage.setItem(STORAGE_KEYS.AREAS, JSON.stringify(INITIAL_LEARNING_AREAS));
    localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(allSeeds));
    localStorage.setItem(STORAGE_KEYS.SELECTED_AREA, 'la_cpp');
  }
}
