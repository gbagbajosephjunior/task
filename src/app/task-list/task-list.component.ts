import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmationComponent } from '../comfirmation/comfirmation.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],

})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(private taskService: TaskService,private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  onTaskStatusChange(task: Task): void {
    this.taskService.markAsCompleted(task);
  }

  onEditTask(task: Task): void {
    this.editingTask = task;
  }

  onSaveEditedTask(task: Task): void {
    this.editingTask = null;
  }

  onDeleteTask(task: Task): void {
    const dialogRef = this.dialog.open(ComfirmationComponent, {
      data: { message: 'Are you sure you want to delete this task?' }
    });
    
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(task);
      }
    });

  }
}
