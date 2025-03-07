import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../student.model'

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [
    {id: 1, firstName: 'Albert', lastName: 'Einstein'},
    {id: 2, firstName: 'Isaac', lastName: 'Newton'},
    {id: 3, firstName: 'Erwin', lastName: 'Schrodinger'},
  ]

  deleteStudent(id: number): void{
    this.students = this.students.filter(student => student.id !== id);
  }
}
