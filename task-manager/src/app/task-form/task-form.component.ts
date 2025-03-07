import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() taskToEdit: Task | null = null;
  @Output() taskCreated = new EventEmitter<Task>();
  @Output() taskUpdated = new EventEmitter<Task>();

  constructor(private fb: FormBuilder){
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.taskToEdit){
      this.taskForm.patchValue({
        title: this.taskToEdit.title,
        description: this.taskToEdit.description,
      })
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid){
      const taskData = {...this.taskForm.value, completed: false};

      if (this.taskToEdit){
        this.taskUpdated.emit({...this.taskToEdit, ...taskData});
      } else{
        const newTask: Task = { id: Math.random(), ...taskData};
        this.taskCreated.emit(newTask);
      }

      this.taskForm.reset();
    }
  }

}
