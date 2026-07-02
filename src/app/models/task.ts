export type Task = {
  id: number,
  name: string,
  description: string,
  isCompleted: boolean,
  creationDate: Date,
  dueDate: Date,
  priority: TaskPriority,
  creatorName: string,
}

export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High"
}