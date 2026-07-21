import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/course.state';
import * as CourseActions from '../actions/course.actions';

export const courseReducer = createReducer(
  initialState,

  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);