import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../student.model'
import { StudentFormComponent } from "../student-form/student-form.component";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentFormComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [
    {id: 1, firstName: 'Albert', lastName: 'Einstein'},
    {id: 2, firstName: 'Isaac', lastName: 'Newton'},
    {id: 3, firstName: 'Erwin', lastName: 'Schrodinger'},
  ]
  selectedStudent: any;
  selectedStudentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  addStudent(newStudent: Student){
    this.students.push(newStudent);
  }

  deleteStudent(id: number): void{
    this.students = this.students.filter(student => student.id !== id);
  }

  editStudent(student: any): void{
    this.selectedStudent = student;
    this.selectedStudentForm = new FormGroup({
      firstName: new FormControl(student.firstName),
      lastName: new FormControl(student.lastName),
    });
  }

  updateStudent(){
    if (this.selectedStudent){
      this.selectedStudent.firstName = this.selectedStudentForm.value.firstName;
      this.selectedStudent.lastName = this.selectedStudentForm.value.lastName;

      this.selectedStudentForm.reset();
      this.selectedStudent = null;
    }
  }

  cancelEdit(): void{
    this.selectedStudentForm.reset();
    this.selectedStudent = null;
  }
}
