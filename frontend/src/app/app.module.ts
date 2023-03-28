import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';
import { TaskReadComponent } from './components/task/task-read/task-read.component';
import { TaskUpdateComponent } from './components/task/task-update/task-update.component';
import { TaskDeleteComponent } from './components/task/task-delete/task-delete.component';
import { NavComponent } from './components/template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskCrudComponent,
    TaskReadComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
