export enum DueDate {
  urgent = 0,
  days,
  week
}

export class ToDo {
  description: string;
  dueDate: DueDate;
}
