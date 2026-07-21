import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import * as CourseActions from '../../store/actions/course.actions';
import * as CourseSelectors from '../../store/selectors/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  private store = inject(Store);

  courses$ = this.store.select(CourseSelectors.selectAllCourses);
  loading$ = this.store.select(CourseSelectors.selectLoading);
  error$ = this.store.select(CourseSelectors.selectError);

  ngOnInit(): void {
    this.store.dispatch(CourseActions.loadCourses());
  }
}