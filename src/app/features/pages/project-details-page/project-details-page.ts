import { Component } from '@angular/core';
import { ProjectsDetails } from '../../projects/projects-details/projects-details';

@Component({
  selector: 'app-project-details-page',
  imports: [ProjectsDetails],
  templateUrl: './project-details-page.html',
  styleUrl: './project-details-page.css',
})
export class ProjectDetailsPage {}