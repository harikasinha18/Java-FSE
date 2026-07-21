import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';
import { CourseState } from '../../store/state/course.state';
import {
  selectAllCourses,
  selectLoading,
  selectError
} from '../../store/selectors/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ courses: CourseState }>) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

}