import { Component } from '@angular/core';
import { TasksList } from '../../tasks/tasks-list/tasks-list';
import { TasksAddNew } from "../../tasks/tasks-add-new/tasks-add-new";

@Component({
  selector: 'app-tasks-list-page',
  imports: [TasksList, TasksAddNew],
  templateUrl: './tasks-list-page.html',
  styleUrl: './tasks-list-page.css',
})
export class TasksListPage {}
