import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  @Output() studentCreated = new EventEmitter<any>();

  onSubmit(){
    if (this.studentForm.valid){
      this.studentCreated.emit(this.studentForm.value);
      this.studentForm.reset();
    } else{
      console.log('Form is invalid')
    }
  }
}
