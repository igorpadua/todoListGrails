import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../status.enum';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  statusList: Status[] = [
    Status.TODO,
    Status.DOING,
    Status.DONE
  ]

  task: Task = {
    nome: '',
    descricao: '',
    dataTermino: new Date(),
    prioridade: null,
    categoria: '',
    status: Status.TODO
  }

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {}

  criarTask(): void {
    this.taskService.create(this.task).subscribe(() => {
      this.taskService.showMessage('Task criada com sucesso!');
      this.router.navigate(['/tasks']);
    })
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }

}
