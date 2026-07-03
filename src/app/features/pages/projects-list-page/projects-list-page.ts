import { Component } from '@angular/core';
import { ProjectsList } from '../../projects/projects-list/projects-list';
import { ProjectsAddNew } from '../../projects/projects-add-new/projects-add-new';

@Component({
  selector: 'app-projects-list-page',
  imports: [ProjectsList, ProjectsAddNew],
  templateUrl: './projects-list-page.html',
  styleUrl: './projects-list-page.css',
})
export class ProjectsListPage {}
