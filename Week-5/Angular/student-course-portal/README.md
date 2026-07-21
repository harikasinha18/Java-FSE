# Student Course Portal

## Project Description

This project is developed using **Angular** as part of the **Cognizant Digital Nurture 5.0 Angular Hands-On Exercises**.

---

## Technologies Used

- Angular 21
- TypeScript
- HTML
- CSS

---

# Hands-On Progress

## ✅ Hands-On 1 – Environment Setup, Project Structure & First Components

### Task 1: Scaffold and Explore the Angular Project
- Installed Angular CLI
- Created Angular Project
- Explored Angular Project Structure
- Understood generated files
- Executed `ng serve`
- Executed `ng build`
- Explored the `dist` folder
- Studied Angular build budgets

### Task 2: Create and Organize Components
- Created Header Component
- Created Home Component
- Created Course List Component
- Created Student Profile Component
- Added Navigation Header
- Added Home Page
- Verified application execution

---

## ✅ Hands-On 2 – Data Binding, Lifecycle Hooks & Component Communication

### ✅ Task 1: Data Binding
- Interpolation
- Property Binding
- Event Binding
- Two-Way Binding (`ngModel`)

### ✅ Task 2: Lifecycle Hooks
- Implemented `ngOnInit()`
- Implemented `ngOnDestroy()`
- Verified lifecycle hook execution using Browser Console

### ✅ Task 3: Parent-Child Communication
- Implemented `@Input()`
- Implemented `@Output()`
- Used `EventEmitter` for child-to-parent communication

**Status:** ✅ Completed

---

## ✅ Hands-On 3 – Directives & Pipes

### ✅ Task 1: Structural Directives
- *ngIf
- *ngFor
- *ngSwitch
- trackBy

### ✅ Task 2: Attribute Directives
- ngClass
- ngStyle

### ✅ Task 3: Custom Directive & Custom Pipe
- Highlight Directive
- Credit Label Pipe

**Status:** ✅ Completed

---

## ✅ Hands-On 4 – Template-Driven Forms & Validation

### ✅ Task 1: Enrollment Request Form

Implemented:
- Created `EnrollmentFormComponent`
- Added `/enroll` route
- Built a Template-Driven Form using `ngForm`
- Implemented `[(ngModel)]` for all form controls
- Added Student Name, Email, Course ID, Preferred Semester and Terms fields
- Implemented form submission using `onSubmit()`
- Disabled the Submit button when the form is invalid

### ✅ Task 2: Validation & Error Messages

Implemented:
- Required validation
- Minimum length validation
- Email validation
- Dynamic error messages
- Red border for invalid fields
- Green border for valid fields
- Success message after submission
- Reset functionality

**Status:** ✅ Completed

---

## ✅ Hands-On 5 – Reactive Forms

### ✅ Task 1
- Created Reactive Form using FormBuilder
- Implemented FormGroup and Validators
- Used ReactiveFormsModule
- Submitted form values

### ✅ Task 2
- Created a custom validator
- Implemented FormArray for dynamic courses
- Added Add Course functionality
- Added Remove Course functionality

**Status:** ✅ Completed

---

## ✅ Hands-On 6 – Services & Dependency Injection

### ✅ Task 1
- Created `CourseService`
- Shared course data across components
- Implemented singleton service

### ✅ Task 2
- Created `EnrollmentService`
- Injected `CourseService` into `EnrollmentService`
- Implemented Enroll/Unenroll functionality
- Displayed enrolled courses in Student Profile
- Demonstrated Angular Dependency Injection

**Status:** ✅ Hands-On 6 Completed

---

## ✅ Hands-On 7 – Angular Routing, Guards & Lazy Loading

### ✅ Task 1
- Configured application routing using `app.routes.ts`
- Created `CourseDetail` component
- Created `CoursesLayout` component
- Created `NotFound` component
- Implemented nested routes
- Used route parameters (`:id`) to display course details

### ✅ Task 2
- Created `AuthService`
- Implemented `CanActivate` Auth Guard
- Protected the Profile route
- Created `CanDeactivate` Guard
- Created Enrollment Feature Module
- Configured Lazy Loading for the Enrollment module

**Status:** ✅ Completed

---

## ✅ Hands-On 8: HTTP Client – API Integration, Observables & Interceptors

## ✅ Task 1: Replace Service Data with HttpClient Calls

- Configured HttpClient using `provideHttpClient()`.
- Injected `HttpClient` into `CourseService`.
- Replaced hardcoded data with HTTP GET requests.
- Implemented GET, GET by ID, POST, PUT, and DELETE operations.
- Updated components to use `subscribe()` for fetching data from the API.

---

## ✅ Task 2: RxJS Operators and Error Handling

- Used `map()` to transform API response.
- Used `tap()` for logging API responses.
- Implemented `retry(2)` for failed requests.
- Added `catchError()` for custom error handling.
- Used `switchMap()` for chaining HTTP requests.

---

## ✅ Task 3: HTTP Interceptors

- Created Authentication Interceptor.
- Added Authorization header to all HTTP requests.
- Created Error Handler Interceptor for global error handling.
- Created Loading Interceptor to manage loading state.
- Registered all interceptors in `app.config.ts`.
- Verified interceptor functionality using the browser Network tab.

**Status:** ✅ Completed

---

## ✅ Hands-On 9: State Management using NgRx

## ✅ Task 1: NgRx Store Setup

- Installed NgRx packages.
- Created Store folder structure.
- Defined Course State.
- Configured initial application state.

---

## ✅ Task 2: Actions & Reducer

- Created Actions for loading course data.
- Implemented Reducer to update application state.
- Registered Store in app.config.ts.

---

## ✅ Task 3: Effects

- Created NgRx Effects.
- Integrated CourseService with Effects.
- Dispatched Success and Failure actions.
- Registered Effects in app.config.ts.

---

## ✅ Task 4: Selectors & Store Integration

- Created Selectors to access application state.
- Connected Store with Course List component.
- Displayed course data using Selectors.
- Managed loading and error states through the Store.

**Status:** ✅ Completed


---

## ⏳ Hands-On 10
Pending

---

## Author

**Pandu Harika Sinha**