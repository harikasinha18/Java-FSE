import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  ngOnInit(): void {
    console.log('Home Component Initialized');
  }

  ngOnDestroy(): void {
    console.log('Home Component Destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}