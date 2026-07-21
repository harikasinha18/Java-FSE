import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Home } from './home';
import { CourseService } from '../../services/course';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  const courseServiceMock = {
    getCourses: () => of([])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        {
          provide: CourseService,
          useValue: courseServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});