import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  goToAbout(): void {
    this.router.navigate(['/about']);
  }

  goToResume(): void {
    this.router.navigate(['/resume']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
}
