export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number; // 0-based index
  explanation?: string;
  category?: string;
  icon?: string; // New icon property
}

export interface ExamModel {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export enum SectionType {
  TEXT = 'TEXT',
  LIST = 'LIST',
  TIMELINE = 'TIMELINE', // For hierarchy
  COMPARISON = 'COMPARISON', // For RAM vs ROM
  TABLE = 'TABLE', // For Shortcuts
  GRID = 'GRID' // For general items
}

export interface SummarySection {
  id: string;
  title: string;
  type: SectionType;
  content: any; // Flexible content based on type
  icon?: string;
}

export interface ShortcutItem {
  key: string;
  action: string;
}

export interface ShortcutCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  shortcuts: ShortcutItem[];
}

export interface CourseData {
  summary: SummarySection[];
  exams: ExamModel[];
  shortcutsLibraries: ShortcutCategory[]; // New collection for shortcuts
}

// Global declaration for html2pdf
declare global {
  interface Window {
    html2pdf: any;
  }
}