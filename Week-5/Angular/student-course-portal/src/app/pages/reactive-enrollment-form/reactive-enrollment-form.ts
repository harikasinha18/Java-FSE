import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: ['', [Validators.required, this.nameValidator]],

      studentEmail: ['', [Validators.required, Validators.email]],

      agreeToTerms: [false, Validators.requiredTrue],

      courses: this.fb.array([
        this.fb.control('', Validators.required)
      ])

    });

  }

  nameValidator(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.length < 3) {
      return { invalidName: true };
    }

    return null;

  }

  get courses(): FormArray {
    return this.enrollForm.get('courses') as FormArray;
  }

  addCourse() {
    this.courses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number) {
    this.courses.removeAt(index);
  }

  onSubmit() {

    if (this.enrollForm.valid) {
      console.log(this.enrollForm.value);
    }

  }

}