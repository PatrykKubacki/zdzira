import { Component, inject, model } from '@angular/core';
import { ProjectsListItem } from '../projects-list-item/projects-list-item';
import { ProjectService } from '../../../core/services/projectService';

@Component({
  selector: 'app-projects-list',
  imports: [ProjectsListItem],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.css',
})
export class ProjectsList {
  private store = inject(ProjectService);
  readonly projects = this.store.projects;
  readonly projectsCount = this.store.projectsCount;
}