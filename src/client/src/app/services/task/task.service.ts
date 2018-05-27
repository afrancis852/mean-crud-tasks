import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Task } from '../../class/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  domain: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>('api/tasks')
      .map(res => res);
  }
 
  addTask(newTask: Task) {
    return this.http.post<Task>('api/task', newTask)
      .map(res => res);
  }

  deleteTask(id) {
    return this.http.delete<Task>(`api/task/${id}`)
      .map(res => res);
  }

  updateTask(newTask) {
    return this.http.put<Task>(`api/task/${newTask._id}`, newTask)
      .map(res => res);
  }
}
