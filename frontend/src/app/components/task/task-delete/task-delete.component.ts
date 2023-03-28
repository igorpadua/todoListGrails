import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../status.enum';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

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
    status: Status.DONE,
  }

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.taskService.readById(id).subscribe(task => {
        this.task = task
      })
    }
  }

  deletarTask(): void {
    if (this.task.id) {
      this.taskService.delete(this.task.id).subscribe(() => {
        this.taskService.showMessage('Tarefa deletada com sucesso!')
        this.router.navigate(['/tasks'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks'])
  }

}
