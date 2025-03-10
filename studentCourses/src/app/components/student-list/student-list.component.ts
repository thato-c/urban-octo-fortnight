import { Component } from '@angular/core';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-list',
  imports: [StudentFormComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  standalone: true,
})
export class StudentListComponent {

}
