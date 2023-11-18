import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm: FormGroup; 

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  onAddTask(): void {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')?.value;
      this.taskService.addTask({
        id: Date.now(),
        title,
        completed: false
      });
      this.taskForm.reset(); 
    }
  }
}
