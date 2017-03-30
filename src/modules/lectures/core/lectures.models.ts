export interface Lecture {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly lecturer: string;
  readonly lectureDays: LectureDay[];
  readonly excerciseDays: LectureDay[];
  readonly try: number;
  readonly semester: number;
  readonly credits: number;
  readonly onSchedule: boolean;
  readonly isMaster: boolean;
  readonly inSchedule: boolean;
  readonly isDone: boolean;
}

export interface LectureDay {
  readonly begin: string;
  readonly end: string;
  readonly location: string;
  readonly weekday: number;
}