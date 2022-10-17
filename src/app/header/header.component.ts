import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  public clicked = false;
  _el: any;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  onClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }
  
  @HostListener('document:click', ['event'])
  private clickedOutside(event: any): void {
    if (this.clicked) {
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }
}
