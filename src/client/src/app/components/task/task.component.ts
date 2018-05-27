import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task/task.service';

import { Task } from '../../class/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

  // Atributos
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  ngOnInit() {
  }

  addTask(event){
    event.preventDefault();
    let newTask:Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      })        
  }

  deleteTask(id) {
    let response = confirm('are you sure to delete it?');
    if (response){
      let tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          if(data) {
            this.tasks = this.tasks.filter(t => t._id !== id);
          }
        })
    }
  }                 

  updateStatus(task: Task) {
    let newTask: Task = Object.assign({}, task, {isDone: !task.isDone});
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      })
  }

}
