import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {
  constructor(private router: Router) {}

  filterTasks(status: string): void {
    this.router.navigate(['/tasks', { status }]);
  }

}


