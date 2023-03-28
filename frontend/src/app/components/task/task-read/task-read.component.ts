import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

}
