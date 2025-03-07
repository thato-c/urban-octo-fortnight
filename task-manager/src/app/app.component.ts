import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';

  tasks: Task[] = [
    {id: 1, title: 'Learn Angular', description: 'Understand components and services', completed: false},
    {id: 2, title: 'Build Task Manager', description: 'Implement CRUD functionality', completed: false},
    {id: 3, title: 'Refactor Code', description: 'Improve code organization and reusability', completed: false},
  ];

  addTask(task: Task): void{
    this.tasks.push(task)
  }
}
