import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "http://localhost:8080/tasks";

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    alert(msg);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  readById(id: string): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  delete(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}
