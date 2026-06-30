import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, ProjectType } from '../app';

@Component({
  selector: 'app-projects-add-new',
  imports: [FormsModule],
  templateUrl: './projects-add-new.html',
  styleUrl: './projects-add-new.css',
})
export class ProjectsAddNew {
  projectsNames = model<Project[]>([])
  projectName = model<string>('')

  addNewProject(name: string){
    if(name !== '') {
      const ids = this.projectsNames().map(x => x.id)
      const newId = Math.max(...ids) + 1 
      const newProject: Project = {id: newId, name: name, description: '', isPrivate: false, owner: 'Patryczek Pstryczek', projectType: ProjectType.Software, key: `PRO-${newId}`}
      this.projectsNames.update(x => [...x, newProject])
      this.projectName.set('')
    }
  }
}
