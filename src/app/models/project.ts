import { Task } from "./task"

export type Project = {
  id: number,
  name: string,
  description: string,
  isPrivate: boolean,
  owner: string,
  key:string,
  projectType: ProjectType
  tasks: Task[],
}

export enum ProjectType {
  Software = "Software",
  Business = "Business",
  ServiceManagement = "ServiceManagement"
}