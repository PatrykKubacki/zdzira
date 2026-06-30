import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsList } from './projects-list/projects-list';
import { ProjectsAddNew } from './projects-add-new/projects-add-new';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsList, ProjectsAddNew],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public projectsNames = signal<Project[]>(startStateProjects)
  protected readonly title = signal('zdzira.UI');
}

export type Project = {
  id: number,
  name: string,
  description: string,
  isPrivate: boolean,
  owner: string,
  key:string,
  projectType: ProjectType
}

export enum ProjectType {
  Software = "Software",
  Business = "Business",
  ServiceManagement = "ServiceManagement"
}

const startStateProjects: Project[] = [
  { 
    id: 1,
    name: "Projekt 1",
    description: "To jest bardzo ważny projekt 1",
    isPrivate: false,
    owner: "Mareczek Zawleczek",
    key: "PRO-1",
    projectType: ProjectType.Software
  },
  { 
    id: 2,
    name: "Projekt 2",
    description: "To jest mało ważny projekt 2",
    isPrivate: false,
    owner: "Jakub Jakubowski",
    key: "PRO-2",
    projectType: ProjectType.Business
  },
]