import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent {

  constructor(private router: Router) { }

  navigateToTaskCreate(): void {
    this.router.navigate(['/tasks/create']);
  }

}
