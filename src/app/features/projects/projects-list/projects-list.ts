import { Component, model } from '@angular/core';
import { ProjectsListItem } from '../projects-list-item/projects-list-item';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-projects-list',
  imports: [ProjectsListItem],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.css',
})
export class ProjectsList {
  projectsNames = model<Project[]>([]);
}