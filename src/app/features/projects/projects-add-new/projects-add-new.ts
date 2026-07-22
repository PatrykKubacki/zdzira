import { Component, inject, signal } from '@angular/core';
import { Project, ProjectType } from '../../../models/project';
import { form, FormField, required } from '@angular/forms/signals';
import { ProjectService } from '../../../core/services/projectService';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-projects-add-new',
  imports: [FormField, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './projects-add-new.html',
  styleUrl: './projects-add-new.css',
})
export class ProjectsAddNew {
  private store = inject(ProjectService);
  readonly projectsNames = this.store.projects;

  project = signal<Project>({ id: 0, name: '', description: '', isPrivate: false, owner: '', projectType: ProjectType.Software, key: '', tasks: [] })
  newProjectForm = form(this.project, (schemaPath) => {
    required(schemaPath.name, { message: 'Nazwa projektu jest wymagana' });
    required(schemaPath.owner, { message: 'Właściciel projektu jest wymagany' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    const ids = this.projectsNames().map(x => x.id)
    const newId = Math.max(...ids) + 1
    const newProject: Project = {
      id: newId,
      name: this.newProjectForm.name().value(),
      description: this.newProjectForm.description().value(),
      isPrivate: this.newProjectForm.isPrivate().value(),
      owner: this.newProjectForm.owner().value(),
      projectType: this.newProjectForm.projectType().value(),
      key: `PRO-${newId}`,
      tasks: []
    }
    this.projectsNames.update(x => [...x, newProject])
    this.project.set({ id: 0, name: '', description: '', isPrivate: false, owner: '', projectType: ProjectType.Software, key: '', tasks: [] })
    this.newProjectForm().reset();
  }

  clearForm() {
    this.project.set({ id: 0, name: '', description: '', isPrivate: false, owner: '', projectType: ProjectType.Software, key: '', tasks: [] })
    this.newProjectForm().reset();
  }
}
