import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../../core/services/projectService';
import { Project } from '../../../models/project';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects-details',
  imports: [],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',
})
export class ProjectsDetails {
  private router = inject(Router);
  private store = inject(ProjectService);
  private activatedRoute = inject(ActivatedRoute);
  private projectId = signal('');
  public project: Project | undefined = undefined;

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.projectId.set(params['id']);
      this.project = this.store.getProjectById(Number(this.projectId()));
    });
  }

  goBack() {
     this.router.navigate(['/projects']);
  }

  goToTasks() {
     this.router.navigate([`/projects/${this.projectId()}/tasks`]);
  }
}
