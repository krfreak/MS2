export class Lecture{
  name: string;
  shortName: string;
  lecturer: string;
  lectureDays: any[];
  excerciseDays: any[];
  semester: number;
  onSchedule: boolean;
  isMaster: boolean;
  credits: number;
  inSchedule: boolean;
  try: number;
  isDone: boolean;

  constructor(name, shortName, lecturer, lectureDays, excerciseDays, semester, onSchedule, isMaster, credits){
    this.name = name;
    this.shortName = shortName;
    this.lecturer = lecturer;
    this.lectureDays = lectureDays;
    this.excerciseDays = excerciseDays;
    this.semester = semester;
    this.onSchedule = onSchedule;
    this.isMaster = isMaster;
    this.credits = credits;
    this.try = 0;
    this.isDone = false;
    this.inSchedule = false;
  }
}
