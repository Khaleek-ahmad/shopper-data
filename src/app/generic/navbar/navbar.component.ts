import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCloseVisible: boolean;
  public userName: string;
  isClassVisible: boolean;

  constructor(private router: Router, private elem: ElementRef
  ) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName')
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  toggle() {
    this.isCloseVisible = !this.isCloseVisible;
  }


}
