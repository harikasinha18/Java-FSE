  import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() courseId = 0;
  @Input() courseName = '';
  @Input() gradeStatus = '';
  @Input() credits = 0;

  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnrollment() {
    if (this.enrollmentService.isEnrolled(this.courseId)) {
      this.enrollmentService.unenroll(this.courseId);
    } else {
      this.enrollmentService.enroll(this.courseId);
    }
  }

  get cardClasses() {
    return {
      expanded: this.isExpanded
    };
  }
}