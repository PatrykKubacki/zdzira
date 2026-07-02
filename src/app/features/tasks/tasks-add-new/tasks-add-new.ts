import { Component, model, signal } from '@angular/core';
import { Task, TaskPriority } from '../../../models/task';
import { form, FormField, required } from '@angular/forms/signals';
import { Project } from '../../../models/project';

type TaskForm = {projectId: string} & Task;

@Component({
  selector: 'app-tasks-add-new',
  imports: [FormField],
  templateUrl: './tasks-add-new.html',
  styleUrl: './tasks-add-new.css',
})
export class TasksAddNew {
  projectsNames = model<Project[]>([])
  task = signal<TaskForm>({projectId: '0', id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
  taskForm = form(this.task, (schemaPath) => {
    required(schemaPath.projectId, {message: 'Projekt jest wymagany'});
    required(schemaPath.name, {message: 'Nazwa zadania jest wymagana'});
    required(schemaPath.creatorName, {message: 'Twórca zadania jest wymagany'});
  })

  onSubmit(event: Event) {
    event.preventDefault();
    const projects = this.projectsNames();
    const index = projects.findIndex(p => p.id.toString() === this.taskForm.projectId().value())
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
      this.projectsNames.update(projects =>
      projects.map(project =>
        project.id.toString() === this.taskForm.projectId().value()
          ? {
              ...project,
              tasks: [...project.tasks, newTask],
            }
          : project
      )
    );
    this.task.set({projectId: '0', id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
    this.taskForm().reset();
  }

  onClearForm() {
    this.task.set({projectId: '0', id: 0, name: '', description: '', isCompleted: false, creationDate: new Date(), dueDate: new Date(), priority: TaskPriority.Low, creatorName: ''})
    this.taskForm().reset();
  }
}