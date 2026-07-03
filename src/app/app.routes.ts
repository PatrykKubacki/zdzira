import { Routes } from '@angular/router';
import { HomePage } from './features/pages/home-page/home-page';
import { ProjectsListPage } from './features/pages/projects-list-page/projects-list-page';
import { ProjectDetailsPage } from './features/pages/project-details-page/project-details-page';
import { TasksListPage } from './features/pages/tasks-list-page/tasks-list-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Strona główna',
    },
    {
        path: 'projects',
        component: ProjectsListPage,
        title: 'Lista projektów',
    },
    {
        path: 'projects/:id',
        component: ProjectDetailsPage,
        title: 'Szczegóły projektu',
    },
    {
        path: 'projects/:id/tasks',
        component: TasksListPage,
        title: 'Lista zadań',
    },
  //{
    // path: 'projects/:id/tasks/:taskId',
    // component: TaskDetailsPage,
    // title: 'Szczegóły zadania',
  // },
];