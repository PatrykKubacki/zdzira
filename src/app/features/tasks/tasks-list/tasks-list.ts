import { Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../../core/services/projectService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  private router = inject(Router);
  private store = inject(ProjectService);
  private activatedRoute = inject(ActivatedRoute);
  private projectId = signal('');

  readonly projects = this.store.projects;
  readonly tasks = computed(() => {
    const project = this.projects().find(project => project.id === Number(this.projectId()));
    return project?.tasks ?? [];
  });

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.projectId.set(params['id']);
    });
  }

  goBack() {
     this.router.navigate([`/projects/${this.projectId()}`]);
  }
}
