import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() courseName = '';

  @Output() enroll = new EventEmitter<string>();

  enrollCourse() {
    this.enroll.emit(this.courseName);
  }

}