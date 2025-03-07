import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../student.model'
import { StudentFormComponent } from "../student-form/student-form.component";

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

  addStudent(newStudent: Student){
    this.students.push(newStudent);
  }

  deleteStudent(id: number): void{
    this.students = this.students.filter(student => student.id !== id);
  }
}
