import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: true },
    { id: 5, title: 'Task 5', completed: false },
    { id: 6, title: 'Task 6', completed: false },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  markAsCompleted(task: Task): void {
    task.completed = true;
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
