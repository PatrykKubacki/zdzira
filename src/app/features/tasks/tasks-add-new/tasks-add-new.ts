import { Component, inject, signal } from '@angular/core';
import { Task, TaskPriority } from '../../../models/task';
import { form, FormField, required } from '@angular/forms/signals';
import { ProjectService } from '../../../core/services/projectService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-add-new',
  imports: [FormField],
  templateUrl: './tasks-add-new.html',
  styleUrl: './tasks-add-new.css',
})
export class TasksAddNew {
  private activatedRoute = inject(ActivatedRoute);
  private projectId = signal('');
  private store = inject(ProjectService);
  readonly projectsNames = this.store.projects;
  task = signal<Task>({id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
  taskForm = form(this.task, (schemaPath) => {
    required(schemaPath.name, {message: 'Nazwa zadania jest wymagana'});
    required(schemaPath.creatorName, {message: 'Twórca zadania jest wymagany'});
  })

    constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.projectId.set(params['id']);
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    debugger;
    const projects = this.projectsNames();
    const index = projects.findIndex(p => p.id.toString() === this.projectId())
    const project = projects[index];
    const tasksIds = project.tasks.map(t => t.id)
    const newId = tasksIds.length > 0 ? Math.max(...tasksIds) + 1 : 1
    const newTask: Task = {
      id: newId, 
      name: this.taskForm.name().value(), 
      description: this.taskForm.description().value(), 
      isCompleted: this.taskForm.isCompleted().value(),
      creationDate: this.taskForm.creationDate().value(), 
      dueDate: this.taskForm.dueDate().value(), 
      priority: this.taskForm.priority().value(), 
      creatorName: this.taskForm.creatorName().value()
      }

    this.store.addTask(project.id, newTask);
    this.task.set({id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
    this.taskForm().reset();
  }

  onClearForm() {
    this.task.set({id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
    this.taskForm().reset();
  }
}