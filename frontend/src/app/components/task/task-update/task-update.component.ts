import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../status.enum';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

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

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.readById(id).subscribe(task => {
        this.task = task;
      })
    }
  }

  updateTask(): void {
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage('Task atualizada com sucesso!');
      this.router.navigate(['/tasks']);
    })
  }

  cancel(): void {
    this.taskService.showMessage('Operação cancelada!');
    this.router.navigate(['/tasks']);
  }

}
