import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskDeleteComponent } from './components/task/task-delete/task-delete.component';
import { TaskUpdateComponent } from './components/task/task-update/task-update.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TaskCrudComponent,
  },
  {
    path: 'tasks/create',
    component: TaskCreateComponent,
  },
  {
    path: 'tasks/update/:id',
    component: TaskUpdateComponent,
  },
  {
    path: 'tasks/delete/:id',
    component: TaskDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
