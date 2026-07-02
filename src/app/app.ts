import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsList } from './features/projects/projects-list/projects-list';
import { ProjectsAddNew } from './features/projects/projects-add-new/projects-add-new';
import { Project, ProjectType } from './models/project';
import { TasksAddNew } from './features/tasks/tasks-add-new/tasks-add-new';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsList, ProjectsAddNew, TasksAddNew],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public projectsNames = signal<Project[]>(startStateProjects)
  protected readonly title = signal('zdzira.UI');
}

const startStateProjects: Project[] = [
  { 
    id: 1,
    name: "Projekt 1",
    description: "To jest bardzo ważny projekt 1",
    isPrivate: false,
    owner: "Mareczek Zawleczek",
    key: "PRO-1",
    projectType: ProjectType.Software,
    tasks:[],
  },
  { 
    id: 2,
    name: "Projekt 2",
    description: "To jest mało ważny projekt 2",
    isPrivate: false,
    owner: "Jakub Jakubowski",
    key: "PRO-2",
    projectType: ProjectType.Business,
    tasks:[],
  },
]