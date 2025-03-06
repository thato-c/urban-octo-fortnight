import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    {id: 1, title: 'Learn Angular', description: 'Understand components and services', completed: false},
    {id: 2, title: 'Build Task Manager', description: 'Implement CRUD functionality', completed: false},
    {id: 3, title: 'Refactor Code', description: 'Improve code organization and reusability', completed: false},
  ];

  constructor(){}

  ngOnInit(): void{
  }
}