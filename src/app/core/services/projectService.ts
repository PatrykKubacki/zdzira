import { computed, Injectable, signal } from "@angular/core";
import { Project, ProjectType } from "../../models/project";
import { Task } from "../../models/task";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  readonly projects = signal<Project[]>([
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
  ]);

  getProjectById(id: number): Project | undefined {
    return this.projects().find(project => project.id === id);
  }

  getTasksByProjectId(projectId: number): Task[] {
    const project = this.getProjectById(projectId);
    return project ? project.tasks : [];
  }

  addProject(project: Project) {
    this.projects.update(projects => [...projects, project]);
  }

  addTask(projectId: number, task: Task) {
    this.projects.update(projects =>
      projects.map(project =>
        project.id === projectId
          ? {
              ...project,
              tasks: [...project.tasks, task]
            }
          : project
      )
    );
  }

  readonly projectsCount = computed(() => this.projects().length);
}