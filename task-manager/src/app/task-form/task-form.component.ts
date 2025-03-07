import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../task.model'

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  @Output() taskCreated = new EventEmitter<Task>();

  constructor(private fb: FormBuilder){
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskForm.valid){
      const newTask: Task = {
        id: Math.random(), 
        ...this.taskForm.value, 
        completed: false
      };

      this.taskCreated.emit(newTask);
      this.taskForm.reset();
    }
  }

}
