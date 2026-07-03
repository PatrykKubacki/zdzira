import { Component, inject, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../core/services/projectService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list-item',
  imports: [FormsModule],
  templateUrl: './projects-list-item.html',
  styleUrl: './projects-list-item.css',
})
export class ProjectsListItem {
    private router = inject(Router);
    private store = inject(ProjectService);
    readonly projectsNames = this.store.projects;
    
    currentProject = input<Project | null>(null);
    newName = signal<string>('');
    isEditMode = signal<boolean>(false)

    save() {
       const newProjectsList = this.projectsNames().map(project => {
        if(project.name === this.currentProject()?.name) {
          project.name = this.newName()
        }
        return project
       })
        this.projectsNames.set(newProjectsList);
        this.isEditMode.set(false)
    }

    cancel () {
      this.isEditMode.set(false)
      this.newName.set('')
    }

    edit () {
      this.newName.set(this.currentProject()?.name ?? '')
      this.isEditMode.set(true)
    }

    remove() {
      const name = this.currentProject()?.name;
      const index = this.projectsNames().findIndex(x => x.name === name)
      if(index > -1) {
        const newProjectsNames = this.projectsNames().filter(x => x.name !== name)
        this.projectsNames.set(newProjectsNames);
      }
    }

    details (id: number) {
      this.router.navigate(['/projects', id]);
    }
}
